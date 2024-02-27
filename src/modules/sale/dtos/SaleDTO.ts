import { Decimal } from '@prisma/client/runtime/library';
import { ClientDTO } from 'src/modules/client/dtos/clientDTO';
import { ProductDTO } from 'src/modules/product/dtos/productDTO';

export type SaleDTO = {
  id?: string;
  client_id: string;
  client?: ClientDTO;
  products?: ProductDTO[];
  date: Date;
  total: Decimal;
};

type product = {
  id: string;
};

export type CreateSaleDTO = {
  id?: string;
  client_id: string;
  client?: ClientDTO;
  products?: product[];
  date: Date;
  total: Decimal;
};
