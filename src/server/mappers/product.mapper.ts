import { Product, ProductPriceInfo } from '@/src/server/domains/product';
import { Expert } from '@/src/server/domains/expert';
import { PRODUCT_SHEET_HEADERS } from '../constants/SHEET_INFOS';

export class ProductMapper {
  static getColumnIndexes(headerRow: any[]) {
    return PRODUCT_SHEET_HEADERS.reduce(
      (acc, header) => {
        const index = headerRow.indexOf(header);
        if (index === -1) {
          throw new Error(`Sheet에 필요한 컬럼 "${header}"이(가) 없습니다.`);
        }
        acc[header] = index;
        return acc;
      },
      {} as Record<(typeof PRODUCT_SHEET_HEADERS)[number], number>,
    );
  }

  static fromSheetRow(
    headerRow: string[],
    dataRow: string[],
    expert: Expert,
  ): Product {
    const columnIndexes = ProductMapper.getColumnIndexes(headerRow);

    return {
      id: dataRow[columnIndexes.id],
      expert: expert,
      name: dataRow[columnIndexes.name],
      priceInfos: JSON.parse(
        dataRow[columnIndexes.priceInfos],
      ) as ProductPriceInfo[],
      detailFields: JSON.parse(dataRow[columnIndexes.detailFields]) as string[],
      targetDescription: dataRow[columnIndexes.targetDescription],
      productDescription: dataRow[columnIndexes.productDescription],
      googleFormUrl: dataRow[columnIndexes.googleFormUrl],
    };
  }
}
