import { Product, ProductPriceInfo } from '@/src/server/domains/product';
import { ExpertDto } from './expert.dto';

export class ProductDto {
  id: string;
  expert: ExpertDto;
  name: string;
  priceInfos: ProductPriceInfo[];
  detailFields: string[];
  targetDescription: string;
  productDescription: string;

  constructor(product: Product) {
    this.id = product.id;
    this.expert = new ExpertDto(product.expert);
    this.name = product.name;
    this.priceInfos = product.priceInfos;
    this.detailFields = product.detailFields;
    this.targetDescription = product.targetDescription;
    this.productDescription = product.productDescription;
  }
}
