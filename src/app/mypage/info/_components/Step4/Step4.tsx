import { Separator, Stack, Text, createListCollection } from '@chakra-ui/react';
import Input from '@/src/app/components/Input/Input';
import Field from '@/src/app/components/Field/Field';
import { FINANCIAL_EXPENSE_OPTIONS } from '../../_constants/financial-info-form';
import { UserFinancialInfo } from '@/src/client/lib/api/postUserFinancialInfo';
import { useFormContext } from 'react-hook-form';
import RecordTable from './RecordTable';

const spendingTypes = createListCollection({
  items: FINANCIAL_EXPENSE_OPTIONS,
});

function Step4() {
  const { register } = useFormContext<UserFinancialInfo>();

  return (
    <Stack dir="column" width="100%">
      <Stack dir="column" gap="12px" mb="34px">
        <Text textStyle="lg" fontWeight={600}>
          현금 흐름을 작성해 주세요
        </Text>
        <Text textStyle="md" color="main.black_3">
          재무관리를 잘해왔는지 진단 및 평가를 받아 볼 수 있어요
        </Text>
      </Stack>

      <Field label="소득" required gap="34px" fontSize="20px" fontWeight={600}>
        <Field label="정기 수입" gap="9px">
          <Input
            type="number"
            placeholder="월 수입은 얼마인가요?"
            {...register('cashflows.regular_income', {
              valueAsNumber: true,
            })}
          />
        </Field>
        <Field label="비정기 수입" gap="9px">
          <Input
            type="number"
            placeholder="비정기 수입은 연간 얼마인가요?"
            {...register('cashflows.irregular_income', {
              valueAsNumber: true,
            })}
          />
        </Field>
        <Field label="메모" gap="9px">
          <Input
            placeholder="메모를 작성하면 더 정확한 진단이 이뤄져요"
            {...register('cashflows.income_memo')}
          />
        </Field>
      </Field>

      <Separator my="50px" />

      <Field label="저축" required gap="34px" fontSize="20px" fontWeight={600}>
        <Field label="정기 저축" gap="9px">
          <Input
            type="number"
            placeholder="월 저축 금액은 얼마인가요?"
            {...register('cashflows.regular_saving', {
              valueAsNumber: true,
            })}
          />
        </Field>
        <Field label="비정기 저축" gap="9px">
          <Input
            type="number"
            placeholder="비정기 저축 금액은 연간 얼마인가요?"
            {...register('cashflows.irregular_saving', {
              valueAsNumber: true,
            })}
          />
        </Field>
        <Field label="메모" gap="9px">
          <Input
            placeholder="메모를 작성하면 더 정확한 진단이 이뤄져요"
            {...register('cashflows.saving_memo')}
          />
        </Field>
      </Field>

      <Separator my="50px" />

      <Field label="투자" required gap="34px" fontSize="20px" fontWeight={600}>
        <Field label="정기 투자" gap="9px">
          <Input
            type="number"
            placeholder="월 투자 금액은 얼마인가요?"
            {...register('cashflows.regular_investment', {
              valueAsNumber: true,
            })}
          />
        </Field>
        <Field label="비정기 투자" gap="9px">
          <Input
            type="number"
            placeholder="비정기 투자 금액은 연간 얼마인가요?"
            {...register('cashflows.irregular_investment', {
              valueAsNumber: true,
            })}
          />
        </Field>
        <Field label="메모" gap="9px">
          <Input
            placeholder="메모를 작성하면 더 정확한 진단이 이뤄져요"
            {...register('cashflows.investment_memo')}
          />
        </Field>
      </Field>

      <Separator my="50px" />

      <Field label="지출" required gap="34px" fontSize="20px" fontWeight={600}>
        <RecordTable
          fieldName="expenses"
          options={spendingTypes}
          subFields={[
            { label: '지출 종류', placeholder: '카테고리를 선택하세요' },
            { label: '지출 금액', placeholder: '월 지출은 얼마인가요?' },
            { label: '메모', placeholder: '어떤 목적으로 지출했나요?' },
          ]}
        />
      </Field>
    </Stack>
  );
}

export default Step4;
