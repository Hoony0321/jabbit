import { Stack, Text } from '@chakra-ui/react';
import { useBuyHomeSurveyStore } from '@/src/app/ai/coach/_store/buyHomeSurveyStore';

interface QuestionProps {
  title: string;
  description: string | null;
  id?: number;
}

function Question({ title, description, id }: QuestionProps) {
  const { response } = useBuyHomeSurveyStore();
  const householdType =
    response['q3'] === '결혼했어요 or 결혼할거에요' ? '초혼 신혼부부' : '1인 가구';
  console.log('familyType', householdType);
  return (
    <Stack direction="column" gap="12px" height="98px">
      <Text
        textStyle="mobile_h1"
        color="font.900"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && id && (
        <Text
          textStyle="mobile_b1_semi"
          color="font.700"
          dangerouslySetInnerHTML={{
            __html: id >= 4 ? householdType + description : description,
          }}
        />
      )}
    </Stack>
  );
}

export default Question;
