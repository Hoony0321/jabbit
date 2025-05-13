import { Stack, Text } from '@chakra-ui/react';

interface QuestionProps {
  title: string;
  description?: string;
}

function Question({ title, description }: QuestionProps) {
  return (
    <Stack direction="column" gap="12px">
      <Text textStyle="mobile_h1" color="font.900">
        {title}
      </Text>
      {description && (
        <Text textStyle="mobile_b1_semi" color="font.700">
          {description}
        </Text>
      )}
    </Stack>
  );
}

export default Question;
