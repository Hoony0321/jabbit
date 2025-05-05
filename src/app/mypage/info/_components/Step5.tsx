import { Separator, Stack, Text, createListCollection } from '@chakra-ui/react';
import Field from '@/src/app/components/Field/Field';

import {
  FINANCIAL_ASSET_OPTIONS,
  FINANCIAL_DEBT_OPTIONS,
} from '../_constants/financial-info-form';
import RecordTable from './Step4/RecordTable';

const assetTypes = createListCollection({
  items: FINANCIAL_ASSET_OPTIONS,
});

const debtTypes = createListCollection({
  items: FINANCIAL_DEBT_OPTIONS,
});

function Step5() {
  return (
    <Stack dir="column" width="100%">
      <Stack dir="column" gap="12px" mb="34px">
        <Text textStyle="lg" fontWeight={600}>
          자산부채를 작성해 주세요
        </Text>
        <Text textStyle="md" color="main.black_3">
          재무관리를 잘해왔는지 진단 및 평가를 받아 볼 수 있어요
        </Text>
      </Stack>

      <Field label="자산" required gap="34px" fontSize="20px" fontWeight={600}>
        <RecordTable
          fieldName="assets"
          options={assetTypes}
          subFields={[
            { label: '자산 유형', placeholder: '카테고리를 선택하세요' },
            { label: '금액', placeholder: '총 얼마인가요?' },
            { label: '메모', placeholder: '어떤 자산인지 설명해주세요' },
          ]}
        />
      </Field>

      <Separator my="50px" />

      <Field label="부채" required gap="34px" fontSize="20px" fontWeight={600}>
        <RecordTable
          fieldName="debts"
          options={debtTypes}
          subFields={[
            { label: '부채 유형', placeholder: '카테고리를 선택하세요' },
            { label: '금액', placeholder: '총 얼마인가요?' },
            {
              label: '메모',
              placeholder:
                '어떤 부채인지 설명해주세요 (ex. 대출상품명, 만기일, 이율 등)',
            },
          ]}
        />
      </Field>
    </Stack>
  );
}

export default Step5;
