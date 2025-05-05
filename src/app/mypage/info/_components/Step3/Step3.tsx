import { Controller, useFormContext } from 'react-hook-form';
import { Stack, Text } from '@chakra-ui/react';

import Textarea from '@/src/app/components/Textarea/Textarea';
import Field from '@/src/app/components/Field/Field';
import RadioGroup from '@/src/app/components/RadioGroup/RadioGroup';
import { UserFinancialInfo } from '@/src/client/lib/api/postUserFinancialInfo';

import { FINANCIAL_CONCERN_PERIOD_OPTIONS } from '../../_constants/financial-info-form';
import CategorySelect from './CategorySelect';

function Step3() {
  const { control, register } = useFormContext<UserFinancialInfo>();

  return (
    <Stack dir="column" width="100%" gap="0">
      <Stack dir="column" gap="12px" mb="34px">
        <Text textStyle="lg" fontWeight={600}>
          재무 고민을 작성해 주세요
        </Text>
        <Text textStyle="md" color="main.black_3">
          공인 재무전문가와 1:1 비대면으로 재무 고민을 해결 할 수 있어요
        </Text>
      </Stack>

      <Stack dir="column" gap="50px">
        <Field
          label="현재 재무고민을 최대 3개 선택해 주세요"
          required
          gap="34px"
        >
          <CategorySelect
            fieldName="financial_concern.concerns"
            maxSelectCount={3}
          />
        </Field>

        <Field
          label="전문가와 해결하고 싶은 재무고민 1가지만 선택해 주세요"
          required
          gap="34px"
        >
          <CategorySelect fieldName="financial_concern.concern_with_expert" />
        </Field>

        <Field
          label="재무 고민을 언제까지 해결하고 싶나요?"
          required
          gap="22px"
        >
          <Controller
            control={control}
            name="financial_concern.concern_period"
            render={({ field }) => (
              <RadioGroup
                {...field}
                options={FINANCIAL_CONCERN_PERIOD_OPTIONS}
              />
            )}
          />
        </Field>

        <Field label="전문가님이 이해할 수 있게 재무고민을 자세히 적어주세요">
          <Textarea
            h="260px"
            placeholder={`작성 예시:
              
포트폴리오
현재 나의 현금 흐름이 적절한지?
여윳돈이 생긴다면, 어느 항목의 비중을 높이는 것이 좋은지?

투자
현재 시도 중인 적립식 투자 방식에 대한 조언
미국 주식 시장의 전망 및 장기 투자 조언
헤지 자산 설정법
장기 방치 중인 주식의 평단가를 낮춰 빨리 빼는 게 나은지? 계속 두는 것이 나은지?
예수금은 최소한으로 유지하는 것이 좋은지?
개인연금 & IRP 장기 투자처`}
            {...register('financial_concern.concern_detail')}
          />
        </Field>
      </Stack>
    </Stack>
  );
}

export default Step3;
