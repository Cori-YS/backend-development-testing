import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDTO } from './dtos/SaleDTO';

@Controller('sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  create(@Body() data: CreateSaleDTO) {
    return this.saleService.create(data);
  }

  @Get()
  findAll() {
    return this.saleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleService.remove(id);
  }
}
