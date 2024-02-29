import { Test, TestingModule } from '@nestjs/testing';
import { SaleService } from './sale.service';
import { PrismaService } from '../../database/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { ClientDTO } from '../client/dtos/clientDTO';
import { Decimal } from '@prisma/client/runtime/library';

describe('SaleService', () => {
  let service: SaleService;
  let ids: string[] = [];
  let pIds: string[] = [];
  let client: ClientDTO;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleService, PrismaService],
    }).compile();

    service = module.get<SaleService>(SaleService);

    prisma = new PrismaService();
    client = await prisma.client.create({ data: { name: 'Joaninha Morais' } });
  });

  afterEach(async () => {
    await prisma.sale.deleteMany({ where: { client_id: client.id } });
    await prisma.product.deleteMany({ where: { id: { in: pIds } } });

    ids = [];
    pIds = [];
  });

  afterAll(async () => {
    await prisma.client.deleteMany({ where: { id: { in: [client.id] } } });
  });

  it('should be able to make a sale', async () => {
    const product = await prisma.product.create({
      data: {
        name: 'Asus ROG',
        price: new Decimal(20.99),
      },
    });

    const s = {
      client_id: client.id,
      products: [{ id: product.id }],
      total: new Decimal(20.99),
    };

    const sale = await service.create(s);

    delete s.products;

    expect(typeof sale.id).toBe('string');
    expect(sale.date).toBeInstanceOf(Date);

    delete sale.id;
    delete sale.date;

    expect(sale).toStrictEqual(s);

    ids.push(sale.id);
    pIds.push(product.id);
  });

  it('should be able to find a sale by id', async () => {
    const product = await prisma.product.create({
      data: {
        name: 'Asus ROG',
        price: new Decimal(20.99),
      },
    });

    const s = {
      client_id: client.id,
      products: [{ id: product.id }],
      total: new Decimal(20.99),
    };

    const sale = await service.create(s);

    const sale_found = await service.findOne(sale.id);

    expect(sale_found.id).toStrictEqual(sale.id);

    ids.push(sale_found.id);
    pIds.push(product.id);
  });

  it('should be able to list all sales', async () => {
    const product = await prisma.product.create({
      data: {
        name: 'Asus ROG',
        price: new Decimal(20.99),
      },
    });

    const s = {
      client_id: client.id,
      products: [{ id: product.id }],
      total: new Decimal(20.99),
    };

    const sale = await service.create(s);

    const sales = await service.findAll();

    expect(sales[sales.length - 1].id).toStrictEqual(sale.id);

    ids.push(sale.id);
    pIds.push(product.id);
  });

  it('should be able to delete a sale by id', async () => {
    const product = await prisma.product.create({
      data: {
        name: 'Asus ROG',
        price: new Decimal(20.99),
      },
    });

    const s = {
      client_id: client.id,
      products: [{ id: product.id }],
      total: new Decimal(20.99),
    };

    const sale = await service.create(s);

    const sale_deleted = await service.remove(sale.id);

    expect(sale_deleted).toStrictEqual(sale);
  });

  it('should not be able to delete a non existent sale', async () => {
    expect(async () => {
      await service.remove('ffdafasfasf');
    }).rejects.toThrow(NotFoundException);
  });
});
