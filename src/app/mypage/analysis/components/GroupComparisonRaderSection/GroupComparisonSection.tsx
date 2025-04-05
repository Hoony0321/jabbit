import { Box, Flex, Text } from '@chakra-ui/react';
import GroupComparisonRadarChart from './GroupComparisonRaderChart/GroupComparisonRadarChart';
import { GroupComparison } from '@/src/client/types/financial';

interface GroupComparisonSectionProps {
  groupComparison: GroupComparison;
}

const GroupComparisonSection = ({
  groupComparison,
}: GroupComparisonSectionProps) => {
  return (
    <div>
      <Flex flexDirection="column">
        <Text fontSize="24px" fontWeight="semibold">
          그룹 비교
        </Text>
        <Box h="12px" />
        <Text fontSize="16px" fontWeight="medium" color="main.black_3">
          내가 속한 그룹 평균과 비교해 드릴게요
        </Text>
        <Box h="34px" />
        <GroupComparisonRadarChart data={groupComparison} />
      </Flex>
    </div>
  );
};

export default GroupComparisonSection;
