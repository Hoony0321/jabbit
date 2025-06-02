import { Stack, Text } from '@chakra-ui/react';
import { EXPENSE_CATEGORY_MAP } from '@/src/app/ai/money-tracker/_ constants/category';
import Input from '@/src/app/components/Input/Input';

function BudgetSettingPage() {
  return (
    <Stack gap="24px" p="20px" pt="10px">
      {Object.values(EXPENSE_CATEGORY_MAP).map((item) => (
        <Stack key={item.name} gap="8px">
          <Text textStyle="mobile_b2">{`${item.icon} ${item.name}`}</Text>
          <Input
            placeholder="금액을 입력해주세요"
            _placeholder={{
              color: 'font.600',
            }}
            textStyle="mobile_b2"
            bgColor="blue.100"
            borderColor="font.400"
            h="auto"
            px="16px"
            py="14px"
          />
        </Stack>
      ))}
    </Stack>
  );
}

export default BudgetSettingPage;
