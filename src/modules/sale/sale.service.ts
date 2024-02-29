import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSaleDTO, SaleDTO } from './dtos/SaleDTO';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) {}

  async create({
    client_id,
    products,
    total,
  }: CreateSaleDTO): Promise<SaleDTO> {
    let sale: SaleDTO;

    try {
      sale = await this.prisma.sale.create({
        data: { client_id, total, products: { connect: products } },
      });
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err.meta.cause);
    }

    return sale;
  }

  async findAll(): Promise<SaleDTO[]> {
    return await this.prisma.sale.findMany({
      include: { products: true, client: true },
    });
  }

  async findOne(id: string): Promise<SaleDTO> {
    return await this.prisma.sale.findUnique({
      where: { id },
      include: { products: true, client: true },
    });
  }

  async remove(id: string): Promise<SaleDTO> {
    const saleExists = await this.prisma.sale.findUnique({ where: { id } });

    if (!saleExists) throw new NotFoundException('Sale not found');

    return await this.prisma.sale.delete({ where: { id } });
  }
}
