import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductDTO } from './dtos/productDTO';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create({ name, price }: ProductDTO): Promise<ProductDTO> {
    return await this.prisma.product.create({ data: { name, price } });
  }

  async findAll(): Promise<ProductDTO[]> {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string): Promise<ProductDTO> {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: string, { name, price }: ProductDTO): Promise<ProductDTO> {
    const productExists = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!productExists) throw new NotFoundException('Product not found');

    return await this.prisma.product.update({
      where: { id },
      data: { name, price },
    });
  }

  async remove(id: string): Promise<ProductDTO> {
    const productExists = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!productExists) throw new NotFoundException('Product not found');

    return await this.prisma.product.delete({ where: { id } });
  }
}
