import { Box, Text, VStack } from '@chakra-ui/react';

interface PlanItem {
  plan_type: string;
  core_recommendation: string;
  recommendation_reason: string;
}

type PlanProps = {
  data: PlanItem[];
};

export default function Plan({ data }: PlanProps) {
  const icons = ['💸', '🧾', '🏦', '📚'];
  return (
    <VStack gap="8px" align="stretch">
      {data.map((item, idx) => (
        <Box key={idx} p={2}>
          <Box mb={4}>
            <Text textStyle="mobile_h2" color="main.black_1">
              ✅ Plan {idx + 1}. {icons[idx]} {item.plan_type}
            </Text>
          </Box>

          <Text textStyle="mobile_h3" mb={1}>
            🔹 핵심 제안
          </Text>
          <Box p={4} bg="gray.50" borderRadius="md">
            <Text textStyle="mobile_b1_med">{item.core_recommendation}</Text>
          </Box>

          <Text textStyle="mobile_h3" mb={1}>
            🔹 추천 이유
          </Text>
          <Box p={4} bg="gray.50" borderRadius="md">
            <Text textStyle="mobile_b1_med">{item.recommendation_reason}</Text>
          </Box>
        </Box>
      ))}
    </VStack>
  );
}
