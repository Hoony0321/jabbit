'use client';

import { Fragment, useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  Box,
  Button,
  createListCollection,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';

import Modal from '@/src/app/common/Modal/Modal';
import Input from '@/src/app/components/Input/Input';
import Select from '@/src/app/components/Select/Select';
import Textarea from '@/src/app/components/Textarea/Textarea';

import { formatNumberWithCommas, unformatNumber } from '../utils/number';
import {
  expenseCategoryOptions,
  incomeCategoryOptions,
  paymentMethodOptions,
} from '../constants/categoryOptions';
import { TransactionTabType } from '../constants/tabMenus';
import useHistoryCreate from './hooks/useHistoryCreate';

function AccountBookHistoryCreate({ type }: { type: TransactionTabType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { control, register, isDisabled, handleSubmit } = useHistoryCreate({
    type,
  });

  return (
    <Fragment>
      <form>
        <Box p="20px">
          <Stack gap="20px">
            <Stack gap="8px">
              <Text textStyle="mobile_b2">날짜</Text>
              <Input
                placeholder="날짜를 선택해주세요"
                bgColor="blue.100"
                textStyle="mobile_b2"
                _placeholder={{ color: 'font.600' }}
                borderColor="font.400"
                type="date"
                {...register('dateTime')}
              />
            </Stack>
            <Stack gap="8px">
              <Text textStyle="mobile_b2">금액</Text>
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    value={formatNumberWithCommas(field.value ?? '')}
                    onChange={(e) => {
                      const raw = unformatNumber(e.target.value);
                      const num = Number(raw);
                      if (!isNaN(num)) field.onChange(num);
                    }}
                    placeholder="금액을 입력해주세요"
                    _placeholder={{ color: 'font.600' }}
                    textStyle="mobile_b2"
                    bgColor="blue.100"
                    borderColor="font.400"
                    h="auto"
                    px="16px"
                    py="14px"
                  />
                )}
              />
            </Stack>
            <Stack gap="8px">
              <Text textStyle="mobile_b2">카테고리</Text>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    collection={createListCollection({
                      items:
                        type === 'expense'
                          ? expenseCategoryOptions
                          : incomeCategoryOptions,
                    })}
                    placeholder="카테고리를 선택해주세요"
                    name={field.name}
                    onValueChange={({ value }) => field.onChange(value[0])}
                    onInteractOutside={() => field.onBlur()}
                  />
                )}
              />
            </Stack>
            {type === 'expense' && (
              <Stack gap="8px">
                <Text textStyle="mobile_b2">결제수단</Text>
                <Controller
                  name="paymentMethod"
                  control={control}
                  render={({ field }) => (
                    <Select
                      collection={createListCollection({
                        items: paymentMethodOptions,
                      })}
                      placeholder="결제수단을 선택해주세요"
                      name={field.name}
                      onValueChange={({ value }) => field.onChange(value[0])}
                      onInteractOutside={() => field.onBlur()}
                    />
                  )}
                />
              </Stack>
            )}
            <Stack gap="8px">
              <Text textStyle="mobile_b2">메모</Text>
              <Textarea
                placeholder="메모를 입력해주세요"
                bgColor="blue.100"
                textStyle="mobile_b2"
                _placeholder={{ color: 'font.600' }}
                borderColor="font.400"
                resize="none"
                {...register('memo')}
              />
            </Stack>
          </Stack>

          <Flex
            position="fixed"
            bottom="18px"
            left="0"
            right="0"
            py="20px"
            zIndex="100"
            justifyContent="center"
          >
            <Button
              bgColor="brand.blue"
              borderRadius="14px"
              w="calc(100% - 40px)"
              h="62px"
              disabled={isDisabled}
              onClick={() => setIsModalOpen(true)}
            >
              저장하기
            </Button>
          </Flex>
        </Box>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleSubmit}
        content={`${type === 'income' ? '수입' : '지출'} 내역을 저장할까요?`}
        confirmText="확인"
        cancelText="취소"
      />
    </Fragment>
  );
}

export default AccountBookHistoryCreate;
