import { Box, Text, VStack } from '@chakra-ui/react';

interface RoutineItem {
  name: string;
  category: 'DAILY' | 'MANAGEMENT' | 'INVESTMENT' | 'REVIEW' | 'EDUCATION';
  frequency: string;
  description: string;
}

type RoutineProps = {
  data: RoutineItem[];
};

const categoryMap: Record<
  RoutineItem['category'],
  { label: string; emoji: string }
> = {
  DAILY: { label: '매일해야 할 루틴', emoji: '🗓️' },
  MANAGEMENT: { label: '돈 관리 루틴', emoji: '💼' },
  INVESTMENT: { label: '돈 굴리기 루틴', emoji: '💸' },
  REVIEW: { label: '지출 점검 & 피드백 루틴', emoji: '🔍' },
  EDUCATION: { label: '금융 지식 & 성장 루틴', emoji: '🧠' },
};

export default function Routine({ data }: RoutineProps) {
  const grouped = data.reduce<Record<string, RoutineItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <VStack align="stretch" gap={8}>
      {Object.entries(grouped).map(([category, items]) => (
        <Box key={category} p={2}>
          <Text textStyle="mobile_h2" mb={4} color="main.black_1">
            {categoryMap[category as RoutineItem['category']].emoji}{' '}
            {categoryMap[category as RoutineItem['category']].label}
          </Text>

          <VStack gap={4} align="stretch">
            {items.map((item, idx) => (
              <Box key={idx}>
                <Text textStyle="mobile_h3" color="main.black_1">
                  {item.name}
                </Text>
                <Box bg="gray.50" p={3} borderRadius="md">
                  <Text textStyle="mobile_b1_med">{item.description}</Text>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>
      ))}
    </VStack>
  );
}
