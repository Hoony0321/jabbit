import { Flex, Separator, Stack, Text } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import Input from '@/src/app/components/Input/Input';
import Field from '@/src/app/components/Field/Field';
import { UserFinancialInfo } from '@/src/client/lib/api/postUserFinancialInfo';

function Step2() {
  const { register } = useFormContext<UserFinancialInfo>();

  return (
    <Stack dir="column" width="100%" gap="0">
      <Stack dir="column" gap="12px" mb="34px">
        <Text textStyle="lg" fontWeight={600}>
          재무 목표를 작성해 주세요
        </Text>
        <Text textStyle="md" color="main.black_3">
          재무목표 달성 가능성을 확인 할 수 있어요
        </Text>
      </Stack>

      <Field
        label="단기 목표 (향후 1~2년 안에)"
        required
        gap="34px"
        fontSize="20px"
      >
        <Field label="목적" gap="9px">
          <Input
            placeholder="이루고 싶은 목표를 입력하세요 (ex. 종잣돈 모으기)"
            {...register('financial_goals.0.goal_title')}
          />
        </Field>
        <Flex alignItems="center" gap="138px" width="100%">
          <Field label="목표 기간" gap="9px" width="fit-content">
            <Flex alignItems="center" gap="10px">
              <Input
                type="number"
                placeholder="99"
                w="50px"
                {...register('financial_goals.0.target_years', {
                  valueAsNumber: true,
                })}
              />
              <Text>년 후까지</Text>
            </Flex>
          </Field>
          <Field label="목표 금액" gap="9px" flex={1}>
            <Input
              type="number"
              placeholder="금액을 입력하세요"
              {...register('financial_goals.0.target_amount', {
                valueAsNumber: true,
              })}
            />
          </Field>
        </Flex>
      </Field>

      <Separator my="50px" />

      <Field
        label="중기 목표 (향후 5년 안에)"
        required
        gap="34px"
        fontSize="20px"
      >
        <Field label="목적" gap="9px">
          <Input
            placeholder="이루고 싶은 목표를 입력하세요 (ex. 종잣돈 모으기)"
            {...register('financial_goals.1.goal_title')}
          />
        </Field>
        <Flex alignItems="center" gap="138px" width="100%">
          <Field label="목표 기간" gap="9px" width="fit-content">
            <Flex alignItems="center" gap="10px">
              <Input
                type="number"
                placeholder="99"
                w="50px"
                {...register('financial_goals.1.target_years', {
                  valueAsNumber: true,
                })}
              />
              <Text>년 후까지</Text>
            </Flex>
          </Field>
          <Field label="목표 금액" gap="9px" flex={1}>
            <Input
              type="number"
              placeholder="금액을 입력하세요"
              {...register('financial_goals.1.target_amount', {
                valueAsNumber: true,
              })}
            />
          </Field>
        </Flex>
      </Field>

      <Separator my="50px" />

      <Field
        label="장기 목표 (향후 10년 안에)"
        required
        gap="34px"
        fontSize="20px"
      >
        <Field label="목적" gap="9px">
          <Input
            placeholder="이루고 싶은 목표를 입력하세요 (ex. 종잣돈 모으기)"
            {...register('financial_goals.2.goal_title')}
          />
        </Field>
        <Flex alignItems="center" gap="138px" width="100%">
          <Field label="목표 기간" gap="9px" width="fit-content">
            <Flex alignItems="center" gap="10px">
              <Input
                type="number"
                placeholder="99"
                w="50px"
                {...register('financial_goals.2.target_years', {
                  valueAsNumber: true,
                })}
              />
              <Text>년 후까지</Text>
            </Flex>
          </Field>
          <Field label="목표 금액" gap="9px" flex={1}>
            <Input
              type="number"
              placeholder="금액을 입력하세요"
              {...register('financial_goals.2.target_amount', {
                valueAsNumber: true,
              })}
            />
          </Field>
        </Flex>
      </Field>
    </Stack>
  );
}

export default Step2;
