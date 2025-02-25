import { Expert } from './expert';

export interface ProductPriceInfo {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  expert: Expert;
  name: string;
  priceInfos: ProductPriceInfo[];
  detailFields: string[];
  targetDescription: string;
  productDescription: string;
  googleFormUrl: string;
}
