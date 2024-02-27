import { Decimal } from '@prisma/client/runtime/library';
import { SaleDTO } from 'src/modules/sale/dtos/SaleDTO';

export type ProductDTO = {
  id?: string;
  name: string;
  price: Decimal;
  sales?: SaleDTO[];
};
