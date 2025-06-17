'use client';

import { Flex, Stack, Text } from '@chakra-ui/react';
import { useGetAccountBookHistory } from '../../hooks/accountBook.query';
import { formatDateKoreanWeekday } from '../../utils/date';
import HistoryAddFloatingButton from '../../components/HistoryAddFloatingButton';
import { groupHistoryByDate } from '../utils/groupHistoryByDate';
import TransactionItem from './TransactionItem';

function HistoryList() {
  const { data } = useGetAccountBookHistory();
  const { dateTime, totalExpense, totalIncome, historyList } = data.body;
  const groupedByDate = groupHistoryByDate(historyList);

  return (
    <Stack gap="24px" p="20px">
      <Stack gap="16px">
        <Text textStyle="mobile_h3">{dateTime}</Text>
        <Flex gap="20px" alignItems="center">
          <Stack
            gap="4px"
            borderRadius="8px"
            bgColor="blue.200"
            p="16px"
            flex={1}
          >
            <Text textStyle="mobile_b2">이번 달 지출</Text>
            <Text textStyle="mobile_h3" color="font.800">
              {totalExpense.toLocaleString()} 원
            </Text>
          </Stack>
          <Stack
            gap="4px"
            borderRadius="8px"
            bgColor="blue.200"
            p="16px"
            flex={1}
          >
            <Text textStyle="mobile_b2">이번 달 수입</Text>
            <Text textStyle="mobile_h3" color="brand.blue">
              {totalIncome.toLocaleString()} 원
            </Text>
          </Stack>
        </Flex>
      </Stack>

      {groupedByDate.map((dailyHistory) => (
        <Stack gap="10px" key={dailyHistory.date}>
          <Text textStyle="mobile_b2">
            {formatDateKoreanWeekday(dailyHistory.date)}
          </Text>
          <Stack gap="20px">
            {dailyHistory.entries.map((entry) => (
              <TransactionItem key={entry.historyId} data={entry} />
            ))}
          </Stack>
        </Stack>
      ))}

      <HistoryAddFloatingButton />
    </Stack>
  );
}

export default HistoryList;
