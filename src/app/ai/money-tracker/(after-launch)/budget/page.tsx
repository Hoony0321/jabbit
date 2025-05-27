import { Stack } from '@chakra-ui/react';
import GuideLinkButton from '@/src/app/ai/_components/GuideLinkButton';
import { GUIDE_BUTTONS } from '@/src/app/ai/_constants/guide';

function BudgetPage() {
  return (
    <Stack gap="20px" p ="20px">
      <GuideLinkButton data={GUIDE_BUTTONS['money-tracker']} />
    </Stack>
  );
}

export default BudgetPage;
