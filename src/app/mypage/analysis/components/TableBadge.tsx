import { Flex, Text } from '@chakra-ui/react';

interface TableBadgeProps {
  title: string;
  evaluation: boolean;
}

const TableBadge = ({ title, evaluation }: TableBadgeProps) => {
  return (
    <Flex
      p="3px 10px"
      color={evaluation ? '#1f7f31' : '#b86358'}
      bg={evaluation ? '#d8f3dd' : '#fee8e5'}
      borderRadius="7px"
    >
      <Text fontSize="12px" fontWeight="600">
        {title}
      </Text>
    </Flex>
  );
};

export default TableBadge;
