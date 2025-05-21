import { Stack, Text, SimpleGrid, HStack } from '@chakra-ui/react';
import AnswerButton from './AnswerButton';
import AnswerInput from './AnswerInput';
import { useBuyHomeSurveyStore } from '@/src/client/store/survey/buyHomeSurveyStore';
import { region } from '@/src/client/types/survey';

interface AnswerChoice {
  code: string;
  label: string;
}

interface AnswerProps {
  type: 'choice-full' | 'input-year' | 'input-area' | 'choice-grid';
  answerChoices: AnswerChoice[];
  onClick: (answer: string | number, text: string) => void;
  onChange: (answer: string | number, text: string) => void;
  onEnter: () => void;
  selectedAnswers: Record<number, { id: number; answer: string | number }>;
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
  const selectedAnswer = selectedAnswers[currentStep]?.answer;
  const { answers } = useBuyHomeSurveyStore();
  const getRegionChoices = (): AnswerChoice[] => {
    const prevChoice = answers[4]?.answer;
    switch (prevChoice) {
      case 'a':
        return region.SEOUL.map((item) => ({ ...item }));
      case 'b':
        return region.KYEONGGI.map((item) => ({ ...item }));
      case 'c':
        return region.ETC.map((item) => ({ ...item }));
      default:
        return region.SEOUL.map((item) => ({ ...item }));
    }
  };

  const renderChoiceButtons = (choices: AnswerChoice[]) =>
    choices.map((choice) => (
      <AnswerButton
        key={choice.code}
        isSelected={selectedAnswer === choice.code}
        onClick={() => onClick(choice.code, choice.label)}
      >
        {choice.label}
      </AnswerButton>
    ));

  const renderAnswerChoices = () => {
    switch (type) {
      case 'choice-full':
        return renderChoiceButtons(answerChoices);

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
                onChange={(e) =>
                  onChange(Number(e.target.value), e.target.value)
                }
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
                onChange={(e) =>
                  onChange(Number(e.target.value), e.target.value)
                }
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
