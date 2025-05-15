import { Stack, Text } from '@chakra-ui/react';

interface QuestionProps {
  title: string;
  description: string | null;
}

function Question({ title, description }: QuestionProps) {
  return (
    <Stack direction="column" gap="12px" height="98px">
      <Text
        textStyle="mobile_h1"
        color="font.900"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <Text
          textStyle="mobile_b1_semi"
          color="font.700"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </Stack>
  );
}

export default Question;
