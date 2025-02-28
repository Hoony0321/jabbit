import {
  EXPERT_SHEET_NAME,
  EXPERT_SHEET_RANGE,
  PRODUCT_SHEET_RANGE,
} from '@/src/server/constants/SHEET_INFOS';
import { readSheetData } from '@/src/server/service/googleSheet/googleSheetService';
import { PRODUCT_SHEET_NAME } from '@/src/server/constants/SHEET_INFOS';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';
import { ERROR_INFOS } from '@/src/client/constants/ERROR_INFOS';
import { ProductMapper } from '@/src/server/mappers/product.mapper';
import { ProductSimpleDto } from '@/src/server/dtos/product.simple.dto';
import { ExpertMapper } from '@/src/server/mappers/expert.mapper';
import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';

export async function GET(req: Request) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { headerRow: productHeaderRow, dataRows: productDataRows } =
    await readSheetData(PRODUCT_SHEET_NAME, PRODUCT_SHEET_RANGE);
  if (!productHeaderRow || !productDataRows) {
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.noData'].statusCode,
      'googleSheet.noData',
    );
  }

  const { headerRow: expertHeaderRow, dataRows: expertDataRows } =
    await readSheetData(EXPERT_SHEET_NAME, EXPERT_SHEET_RANGE);
  if (!expertHeaderRow || !expertDataRows) {
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.noData'].statusCode,
      'googleSheet.noData',
    );
  }

  const productSimpleDtos: ProductSimpleDto[] = [];
  const productColumnIndexes = ProductMapper.getColumnIndexes(productHeaderRow);
  const expertColumnIndexes = ExpertMapper.getColumnIndexes(expertHeaderRow);
  for (const product of productDataRows) {
    try {
      const expert = expertDataRows.find(
        (expert) =>
          expert[expertColumnIndexes.id] ===
          product[productColumnIndexes.expertId],
      );
      if (!expert) {
        console.error(
          `Expert not found for product id ${product[0]}:`,
          product,
        );
        continue;
      }
      const parsedProduct = ProductMapper.fromSheetRow(
        productHeaderRow,
        product,
        ExpertMapper.fromSheetRow(expertHeaderRow, expert),
      );
      productSimpleDtos.push(new ProductSimpleDto(parsedProduct));
    } catch (error) {
      console.error(`Parsing error on product id ${product[0]}:`, error);
    }
  }

  return createSuccessApiResponse(
    200,
    productSimpleDtos,
    API_MESSAGES['READ_SUCCESS'],
  );
}
