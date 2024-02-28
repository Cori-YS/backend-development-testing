import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientDTO } from './dtos/clientDTO';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create({ name }: ClientDTO): Promise<ClientDTO> {
    return await this.prisma.client.create({ data: { name } });
  }

  async findAll(): Promise<ClientDTO[]> {
    return await this.prisma.client.findMany();
  }

  async findOne(id: string): Promise<ClientDTO> {
    return await this.prisma.client.findUnique({ where: { id } });
  }

  async update(id: string, { name }: ClientDTO): Promise<ClientDTO> {
    const clientExists = await this.prisma.client.findUnique({ where: { id } });

    if (!clientExists) throw new NotFoundException('Client not found!');

    return await this.prisma.client.update({ data: { name }, where: { id } });
  }

  async remove(id: string): Promise<ClientDTO> {
    const clientExists = await this.prisma.client.findUnique({ where: { id } });

    if (!clientExists) throw new NotFoundException('Client not found!');

    return await this.prisma.client.delete({ where: { id } });
  }
}
