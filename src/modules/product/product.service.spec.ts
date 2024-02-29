import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { PrismaService } from '../../database/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { ProductDTO } from './dtos/productDTO';
import { Decimal } from '@prisma/client/runtime/library';

describe('ProductService', () => {
  let service: ProductService;
  let ids: string[] = [];
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService, PrismaService],
    }).compile();

    service = module.get<ProductService>(ProductService);
    prisma = new PrismaService();
  });

  afterAll(async () => {
    await prisma.product.deleteMany({ where: { id: { in: ids } } });
    ids = [];
  });

  it('should be able to create a product', async () => {
    const p: ProductDTO = {
      name: 'Macbook' + Math.random(),
      price: new Decimal(14.99),
    };

    const product = await service.create(p);

    expect(product.name).toBe(p.name);
    expect(product.price).toStrictEqual(p.price);
    expect(typeof product.id).toBe('string');

    ids.push(product.id);
  });

  it('should be able to find a product by id', async () => {
    const p: ProductDTO = {
      name: 'Macbook' + Math.random(),
      price: new Decimal(14.99),
    };

    const product = await service.create(p);

    const product_found = await service.findOne(product.id);

    expect(product_found).toStrictEqual(product);

    ids.push(product_found.id);
  });

  it('should be able to list all products', async () => {
    const p: ProductDTO = {
      name: 'Macbook' + Math.random(),
      price: new Decimal(14.99),
    };

    const product = await service.create(p);

    const products = await service.findAll();

    expect(products[products.length - 1]).toStrictEqual(product);

    ids.push(product.id);
  });

  it('should be able to update a product', async () => {
    const p: ProductDTO = {
      name: 'Macbook' + Math.random(),
      price: new Decimal(14.99),
    };

    const product = await service.create(p);

    product.name = 'Laptop Asus';

    const product_updated = await service.update(product.id, product);

    expect(product_updated).toStrictEqual(product);

    ids.push(product.id);
  });

  it('should not be able to update a non existent product', async () => {
    expect(async () => {
      await service.update('ffdafasfasf', { name: '', price: new Decimal(0) });
    }).rejects.toThrow(NotFoundException);
  });

  it('should be able to delete a product by id', async () => {
    const p: ProductDTO = {
      name: 'Macbook' + Math.random(),
      price: new Decimal(14.99),
    };

    const product = await service.create(p);

    const product_deleted = await service.remove(product.id);

    expect(product_deleted).toStrictEqual(product);
  });

  it('should not be able to delete a non existent product', async () => {
    expect(async () => {
      await service.remove('ffdafasfasf');
    }).rejects.toThrow(NotFoundException);
  });
});
