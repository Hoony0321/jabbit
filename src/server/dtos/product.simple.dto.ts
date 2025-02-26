import { Product, ProductPriceInfo } from '@/src/server/domains/product';
import { ExpertSimpleDto } from './expert.simple.dto';

export class ProductSimpleDto {
  id: string;
  expert: ExpertSimpleDto;
  name: string;
  priceInfos: ProductPriceInfo[];
  detailFields: string[];
  category: string;

  constructor(product: Product) {
    this.id = product.id;
    this.expert = new ExpertSimpleDto(product.expert);
    this.name = product.name;
    this.priceInfos = product.priceInfos;
    this.detailFields = product.detailFields;
    this.category = product.category;
  }

  getMinimumPriceInfo(): ProductPriceInfo {
    return this.priceInfos.reduce((min, current) => {
      return current.price < min.price ? current : min;
    });
  }
}
