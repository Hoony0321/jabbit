import { Stack, Text, SimpleGrid, HStack } from '@chakra-ui/react';
import AnswerButton from './AnswerButton';
import AnswerInput from './AnswerInput';
import { useBuyHomeSurveyStore } from '@/src/app/ai/coach/_store/buyHomeSurveyStore';
import { region } from '@/src/app/ai/_constants/survey';

interface AnswerChoice {
  code: string;
  label: string;
}

interface AnswerProps {
  type: 'choice-full' | 'input-year' | 'input-area' | 'choice-grid';
  answerChoices: AnswerChoice[];
  onClick: (answer: string | number) => void;
  onChange: (answer: string | number) => void;
  onEnter: () => void;
  selectedAnswers: Record<string, string | number>;
  currentStep: number;
  error?: string;
}

function Answer({
  type,
  answerChoices,
  onClick,
  onChange,
  onEnter,
  selectedAnswers,
  currentStep,
  error,
}: AnswerProps) {
  const selectedAnswer = selectedAnswers[`q${currentStep}`];

  const { response } = useBuyHomeSurveyStore();
  const getRegionChoices = (): AnswerChoice[] => {
    const prevChoice = response['q4'];
    switch (prevChoice) {
      case '서울':
        return region.SEOUL.map((item) => ({ ...item }));
      case '경기':
        return region.KYEONGGI.map((item) => ({ ...item }));
      case '기타':
        return region.ETC.map((item) => ({ ...item }));
      default:
        return region.SEOUL.map((item) => ({ ...item }));
    }
  };

  const renderChoiceButtons = (choices: AnswerChoice[]) =>
    choices.map((choice) => (
      <AnswerButton
        key={choice.code}
        isSelected={selectedAnswer === choice.label}
        onClick={() => onClick(choice.label)}
      >
        {choice.label}
      </AnswerButton>
    ));

  const renderAnswerChoices = () => {
    switch (type) {
      case 'choice-full':
        return (
          <Stack direction="column" minH="305px">
            {renderChoiceButtons(answerChoices)}
          </Stack>
        );

      case 'choice-grid':
        const regionChoices = getRegionChoices();
        return (
          <SimpleGrid columns={3} gap="8px" maxH="200px" overflowY="auto">
            {renderChoiceButtons(regionChoices)}
          </SimpleGrid>
        );

      case 'input-year':
        return (
          <>
            <HStack align="center" justify="center" gap="12px">
              <Text textStyle="mobile_b1_semi" color="font.700">
                지금부터
              </Text>
              <AnswerInput
                value={selectedAnswer ?? ''}
                onChange={(e) => onChange(Number(e.target.value))}
                onEnter={() => onEnter()}
              />
              <Text textStyle="mobile_b1_semi" color="font.700">
                년 뒤
              </Text>
            </HStack>

            {error && (
              <Text
                mt="8px"
                textAlign="center"
                color="red"
                textStyle="mobile_b2"
              >
                {error}
              </Text>
            )}
          </>
        );

      case 'input-area':
        return (
          <>
            <HStack align="center" justify="center" gap="12px">
              <AnswerInput
                value={selectedAnswer ?? ''}
                onChange={(e) => onChange(Number(e.target.value))}
                onEnter={onEnter}
              />
              <Text>평</Text>
            </HStack>
            {error && (
              <Text
                mt="8px"
                textAlign="center"
                color="red"
                textStyle="mobile_b2"
              >
                {error}
              </Text>
            )}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Stack direction="column" gap="12px">
      {renderAnswerChoices()}
    </Stack>
  );
}

export default Answer;
