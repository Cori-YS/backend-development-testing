import { Module } from '@nestjs/common';
import { ClientModule } from './modules/client/client.module';
import { ProductModule } from './modules/product/product.module';
import { SaleModule } from './modules/sale/sale.module';

@Module({
  imports: [ClientModule, ProductModule, SaleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
