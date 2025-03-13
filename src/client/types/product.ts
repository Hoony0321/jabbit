import { Expert, SimpleExpert } from './expert';

export interface ProductPriceInfo {
  name: string;
  price: number;
}

export interface roduct {
  id: string;
  expert: Expert;
  name: string;
  priceInfos: ProductPriceInfo[];
  detailFields: string[];
  targetDescription: string;
  productDescription: string;
  googleFormUrl: string;
  category: string;
}

export interface SimpleProduct {
  id: string;
  expert: SimpleExpert;
  name: string;
  priceInfos: ProductPriceInfo[];
  detailFields: string[];
  category: string;
}
