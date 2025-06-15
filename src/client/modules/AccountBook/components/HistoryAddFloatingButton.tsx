import Link from 'next/link';
import { Flex } from '@chakra-ui/react';
import PlusSvg from '@/src/client/assets/plus.svg';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';

function HistoryAddFloatingButton() {
  return (
    <Link href={IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_CREATE_EXPENSE']}>
      <Flex
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        bottom="88px"
        right="0px"
      >
        <PlusSvg />
      </Flex>
    </Link>
  );
}

export default HistoryAddFloatingButton;
