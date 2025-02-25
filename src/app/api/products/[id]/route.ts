import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';
import { ERROR_INFOS } from '@/src/constants/ERROR_INFOS';
import {
  EXPERT_SHEET_NAME,
  EXPERT_SHEET_RANGE,
  PRODUCT_SHEET_NAME,
  PRODUCT_SHEET_RANGE,
} from '@/src/server/constants/SHEET_INFOS';
import { ProductDto } from '@/src/server/dtos/product.dto';
import { findSheetDataById } from '@/src/server/service/googleSheet/googleSheetService';
import { ExpertMapper } from '@/src/server/mappers/expert.mapper';
import { ProductMapper } from '@/src/server/mappers/product.mapper';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const preflightResponse = handlePreflight(request);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { id } = await params;
  const productId = id;

  const { headerRow: productHeaderRow, dataRows: productDataRows } =
    await findSheetDataById(PRODUCT_SHEET_NAME, PRODUCT_SHEET_RANGE, productId);
  if (!productHeaderRow || !productDataRows) {
    console.error(`Product not found for id ${productId}:`, productHeaderRow);
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.noData'].statusCode,
      'googleSheet.noData',
    );
  }

  const productColumnIndexes = ProductMapper.getColumnIndexes(productHeaderRow);

  const { headerRow: expertHeaderRow, dataRows: expertDataRows } =
    await findSheetDataById(
      EXPERT_SHEET_NAME,
      EXPERT_SHEET_RANGE,
      productDataRows[productColumnIndexes.expertId],
    );

  if (!expertHeaderRow || !expertDataRows) {
    console.error(
      `Expert not found for product with id ${productId}:`,
      expertHeaderRow,
    );
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.expertNotFound'].statusCode,
      'googleSheet.expertNotFound',
    );
  }

  try {
    const parsedExpert = ExpertMapper.fromSheetRow(
      expertHeaderRow,
      expertDataRows,
    );
    const parsedProduct = ProductMapper.fromSheetRow(
      productHeaderRow,
      productDataRows,
      parsedExpert,
    );
    const productDto = new ProductDto(parsedProduct);

    return createSuccessApiResponse(
      200,
      productDto,
      API_MESSAGES['READ_SUCCESS'],
    );
  } catch (error) {
    console.error(`Parsing error for product with id ${productId}:`, error);
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.parseError'].statusCode,
      'googleSheet.parseError',
    );
  }
}
