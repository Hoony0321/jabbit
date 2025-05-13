import Input from '@/src/app/components/Input/Input';
import RadioGroup from '@/src/app/components/RadioGroup/RadioGroup';
import Field from '@/src/app/components/Field/Field';
import { Flex, Stack, Text } from '@chakra-ui/react';
import {
  EMPLOYMENT_STATUS_OPTIONS,
  INDEPENDENT_STATUS_OPTIONS,
  MARITAL_STATUS_OPTIONS,
  FAMILY_SUPPORT_STATUS_OPTIONS,
  HEALTH_STATUS_OPTIONS,
} from '../_constants/financial-info-form';
import { Controller, useFormContext } from 'react-hook-form';
import { UserFinancialInfo } from '@/src/client/lib/api/postUserFinancialInfo';

function Step1() {
  const { register, control } = useFormContext<UserFinancialInfo>();

  return (
    <Stack dir="column" width="100%">
      <Stack dir="column" gap="12px" mb="34px">
        <Text textStyle="lg" fontWeight={600}>
          인적 정보를 입력해 주세요
        </Text>
        <Text textStyle="md" color="main.black_3">
          재무진단 및 예측 결과를 확인 할 수 있어요
        </Text>
      </Stack>

      <Stack direction="column" gap="60px">
        <Flex justifyContent="space-between" alignItems="center" gap="88px">
          <Field label="직업" required>
            <Input
              placeholder="직업을 적어주세요"
              {...register('personal_info.job')}
            />
          </Field>

          <Field label="연차" required>
            <Input
              type="number"
              placeholder="연차를 입력하세요 (없으면 0 으로 입력해주세요)"
              {...register('personal_info.years_of_experience', {
                valueAsNumber: true,
              })}
            />
          </Field>
        </Flex>

        <Field label="고용 안정 여부" required gap="22px">
          <Controller
            name="personal_info.employment_status"
            control={control}
            render={({ field }) => (
              <RadioGroup options={EMPLOYMENT_STATUS_OPTIONS} {...field} />
            )}
          />
        </Field>

        <Field label="독립 여부" required gap="22px">
          <Controller
            name="personal_info.independent_status"
            control={control}
            render={({ field }) => (
              <RadioGroup options={INDEPENDENT_STATUS_OPTIONS} {...field} />
            )}
          />
        </Field>

        <Field label="결혼 여부" required gap="22px">
          <Controller
            name="personal_info.marital_status"
            control={control}
            render={({ field }) => (
              <RadioGroup options={MARITAL_STATUS_OPTIONS} {...field} />
            )}
          />
        </Field>

        <Field label="가족 부양 여부" required gap="22px">
          <Controller
            name="personal_info.family_support_status"
            control={control}
            render={({ field }) => (
              <RadioGroup options={FAMILY_SUPPORT_STATUS_OPTIONS} {...field} />
            )}
          />
        </Field>

        <Field label="건강 여부" required gap="22px">
          <Controller
            name="personal_info.health_status"
            control={control}
            render={({ field }) => (
              <RadioGroup options={HEALTH_STATUS_OPTIONS} {...field} />
            )}
          />
        </Field>
      </Stack>
    </Stack>
  );
}

export default Step1;
