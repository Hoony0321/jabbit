import { Box, Text, VStack } from '@chakra-ui/react';

type ScenarioItem = {
  strategy: string;
  goal_type: string;
  customer_goal: string;
  goal_evaluation: string;
};

type ScenarioProps = {
  data: ScenarioItem[];
};

const Scenario = ({ data }: ScenarioProps) => {
  return (
    <VStack gap="8px" align="stretch">
      {data.map((item, index) => (
        <Box key={index} p={2}>
          <Box mb={4}>
            <Text textStyle="mobile_h2" color="main.black_1">
              🎯 {item.goal_type}
            </Text>
          </Box>

          <Box mb={4}>
            <Text textStyle="mobile_h3" mb={1}>
              나의 목표
            </Text>
            <Box p={4} bg="gray.50" borderRadius="md">
              <Text textStyle="mobile_b1_med">{item.customer_goal}</Text>
            </Box>
          </Box>

          <Box mb={4}>
            <Text textStyle="mobile_h3" mb={1}>
              목표 평가 결과
            </Text>
            <Box p={4} bg="gray.50" borderRadius="md">
              <Text textStyle="mobile_b1_med">{item.goal_evaluation}</Text>
            </Box>
          </Box>

          <Box>
            <Text textStyle="mobile_h3" mb={1}>
              목표 달성 전략
            </Text>
            <Box p={4} bg="gray.50" borderRadius="md">
              <Text textStyle="mobile_b1_med">{item.strategy}</Text>
            </Box>
          </Box>
        </Box>
      ))}
    </VStack>
  );
};

export default Scenario;
