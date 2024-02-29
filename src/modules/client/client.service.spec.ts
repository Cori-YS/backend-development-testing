import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { PrismaService } from '../../database/prisma.service';
import { NotFoundException } from '@nestjs/common';

describe('ClientService', () => {
  let service: ClientService;
  let ids: string[] = [];
  let prisma: PrismaService;

  beforeAll(async () => {
    prisma = new PrismaService();

    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientService, PrismaService],
    }).compile();

    service = module.get<ClientService>(ClientService);
  });

  afterEach(async () => {
    await prisma.client.deleteMany({ where: { id: { in: ids } } });
    ids = [];
  });

  it('should be able to create a client', async () => {
    const name = 'Tulumba Costa';

    const client = await service.create({ name });

    expect(client.name).toBe(name);
    expect(typeof client.id).toBe('string');

    ids.push(client.id);
  });

  it('should be able to find a client by id', async () => {
    const name = 'Marcos Silva' + Math.random();

    const client = await service.create({ name });

    const client_found = await service.findOne(client.id);

    expect(client_found).toStrictEqual(client);

    ids.push(client_found.id);
  });

  it('should be able to list all clients', async () => {
    const name = 'Costa Silva' + Math.random();

    const client = await service.create({ name });

    const clients = await service.findAll();

    expect(clients[clients.length - 1]).toStrictEqual(client);

    ids.push(client.id);
  });

  it('should be able to update a client', async () => {
    const name = 'Maria Silva' + Math.random();

    const client = await service.create({ name });

    client.name = 'Joana Marcos';

    const client_updated = await service.update(client.id, client);

    expect(client_updated).toStrictEqual(client);

    ids.push(client.id);
  });

  it('should not be able to update a non existent client', async () => {
    expect(async () => {
      await service.update('ffdafasfasf', { name: '' });
    }).rejects.toThrow(NotFoundException);
  });

  it('should be able to delete a client by id', async () => {
    const name = 'Marcos Silva' + Math.random();

    const client = await service.create({ name });

    const client_deleted = await service.remove(client.id);

    expect(client_deleted).toStrictEqual(client);
  });

  it('should not be able to delete a non existent client', async () => {
    expect(async () => {
      await service.remove('ffdafasfasf');
    }).rejects.toThrow(NotFoundException);
  });
});
