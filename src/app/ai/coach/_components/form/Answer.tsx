import { Stack, Text, SimpleGrid, HStack } from '@chakra-ui/react';
import AnswerButton from './AnswerButton';
import AnswerInput from './AnswerInput';
import Region from '../../../../data/region.json';
import { useBuyHomeSurveyStore } from '../../../../../client/store/survey/buyHomeSurveyStore';

interface AnswerChoice {
  code: string;
  label: string;
}

interface AnswerProps {
  type: 'choice-full' | 'input-year' | 'input-area' | 'choice-grid';
  answerChoices: AnswerChoice[];
  onAnswerSelect: (answer: string | number, label: string) => void;
  selectedAnswers: Record<number, { id: number; answer: string | number }>;
  currentStep: number;
}

function Answer({
  type,
  answerChoices,
  onAnswerSelect,
  selectedAnswers,
  currentStep,
}: AnswerProps) {
  const selectedAnswer = selectedAnswers[currentStep]?.answer;
  const handleSelect = (answer: string | number, label: string) => {
    onAnswerSelect(answer, label);
  };

  const { answers } = useBuyHomeSurveyStore();
  const getRegionChoices = (): AnswerChoice[] => {
    const prevChoice = answers[4]?.answer;
    switch (prevChoice) {
      case 'a':
        return Region.SEOUL;
      case 'b':
        return Region.KYEONGGI;
      case 'c':
        return Region.ETC;
      default:
        return Region.SEOUL;
    }
  };

  const renderChoiceButtons = (choices: AnswerChoice[]) =>
    choices.map((choice) => (
      <AnswerButton
        key={choice.code}
        isSelected={selectedAnswer === choice.code}
        onClick={() => handleSelect(choice.code, choice.label)}
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
          <SimpleGrid columns={3} gap="8px">
            {renderChoiceButtons(regionChoices)}
          </SimpleGrid>
        );

      case 'input-year':
        return (
          <HStack align="center" justify="center" gap="12px">
            <Text textStyle="mobile_b1_semi" color="font.700">
              지금부터
            </Text>
            <AnswerInput
              value={selectedAnswer ?? ''}
              onChange={(e) =>
                handleSelect(Number(e.target.value), e.target.value)
              }
            />
            <Text textStyle="mobile_b1_semi" color="font.700">
              년 뒤
            </Text>
          </HStack>
        );

      case 'input-area':
        return (
          <HStack align="center" justify="center" gap="12px">
            <AnswerInput
              value={selectedAnswer ?? ''}
              onChange={(e) =>
                handleSelect(Number(e.target.value), e.target.value)
              }
            />
            <Text>평</Text>
          </HStack>
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
