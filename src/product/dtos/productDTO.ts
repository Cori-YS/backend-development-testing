import { Decimal } from '@prisma/client/runtime/library';

export type ProductDTO = {
  id?: string;
  name: string;
  price: Decimal;
};
