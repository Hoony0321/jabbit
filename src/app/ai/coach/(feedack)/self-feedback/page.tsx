'use client';

import { useRouter } from 'next/navigation';
import {
  Button,
  Text,
  Flex,
  Box,
  Checkbox,
  Stack,
  HStack,
  Textarea,
} from '@chakra-ui/react';
import {
  WEEKLY_FEELING_MAP,
  ACHIEVEMENT_MAP,
  FAILURE_MAP,
  NEXT_WEEK_ROUTINE_MAP,
} from '@/src/client/modules/Coach/constants/feedbackOptions';
import { useState } from 'react';
import { useGenerateAiSolutionStore } from '@/src/app/ai/coach/_store/generateAiSolutionStore';
import { postAiFeedback } from '@/src/client/modules/Coach/api/coach.api';
import { mixpanelTrack } from '@/src/client/utils/mixpanelHelpers';
import { useAuthStore } from '@/src/client/store/authStore';

interface ItemProps extends Checkbox.RootProps {
  title: string;
  isSelected: boolean;
  onClickOption: (
    questionId: string,
    answer: string,
    checked?: boolean,
  ) => void;
  questionId: string;
}

interface CheckboxItemProps extends Checkbox.RootProps {
  title: string;
  onClickOption: (
    questionId: string,
    answer: string,
    checked?: boolean,
  ) => void;
  questionId: string;
}

function Item({ title, isSelected, ...props }: ItemProps) {
  const { onClickOption, questionId } = props;
  return (
    <Flex
      borderRadius="10px"
      bgColor="app_background"
      p="12px"
      _selected={{
        backgroundColor: 'blue.300',
        borderWidth: '1px',
        borderColor: 'brand.blue',
      }}
      aria-selected={isSelected}
      color="primary.900"
      onClick={() => onClickOption(questionId, title)}
    >
      <Text textStyle="mobile_b1_med">{title}</Text>
    </Flex>
  );
}

function CheckboxItem({ title, ...props }: CheckboxItemProps) {
  const { onClickOption, questionId, checked } = props;

  const handleCheckboxClick = () => {
    onClickOption(questionId, title, !checked);
  };
  return (
    <Flex
      borderRadius="10px"
      bgColor="app_background"
      p="12px"
      _selected={{
        backgroundColor: 'blue.300',
        borderWidth: '1px',
        borderColor: 'brand.blue',
      }}
      aria-selected={checked === true}
      onClick={() => handleCheckboxClick()}
    >
      <Checkbox.Root
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="12px"
        variant="solid"
        {...props}
        checked={checked}
      >
        <Checkbox.Label textStyle="mobile_b1_med">{title}</Checkbox.Label>
        <Checkbox.HiddenInput />
        <Checkbox.Control
          _checked={{
            bgColor: 'brand.blue',
            borderColor: 'brand.blue',
          }}
        />
      </Checkbox.Root>
    </Flex>
  );
}

interface Response {
  q1: string;
  q2: string[];
  q3: string[];
  q4: string[];
  q5: string;
}

export default function SelfFeedbackPage() {
  const router = useRouter();
  const { setSelfFeedbackIsSubmitted } = useGenerateAiSolutionStore();
  const { user } = useAuthStore();
  const [response, setResponse] = useState<Response>({
    q1: '',
    q2: [],
    q3: [],
    q4: [],
    q5: '',
  });
  console.log(response);

  const handleOptionClick = (id: string, answer: string, checked?: boolean) => {
    if (typeof checked !== 'boolean') {
      setResponse((prev) => ({ ...prev, [id]: answer }));
    }
    if (id === 'q2' || id === 'q3' || id === 'q4') {
      if (checked) {
        setResponse((prev) => ({ ...prev, [id]: [...prev[id], answer] }));
      } else {
        setResponse((prev) => ({
          ...prev,
          [id]: prev[id].filter((item) => item !== answer),
        }));
      }
    }
  };

  const onClickSubmit = async () => {
    try {
      setSelfFeedbackIsSubmitted(true);

      mixpanelTrack(
        '코치탭',
        '셀프 피드백 제출하기 버튼 클릭',
        '셀프 피드백 제출하기 버튼',
        user,
      );

      await postAiFeedback(response);
    } catch (error) {
      console.error('셀프 피드백 제출 실패:', error);
    } finally {
      router.push('/ai/coach');
    }
  };
  const isResponseInvalid =
    response.q1 === '' ||
    response.q2.length === 0 ||
    response.q3.length === 0 ||
    response.q4.length === 0;

  return (
    <Box>
      <Box px="20px" rounded="md" mt="16px" pb="80px">
        <Stack gap="8px">
          <HStack gap={0}>
            <Text textStyle="mobile_h3">1. 이번 주, 어땠나요?</Text>
            <Text color="font.required">*</Text>
          </HStack>
          <Stack gap="8px">
            {Object.values(WEEKLY_FEELING_MAP).map((item, idx) => (
              <Item
                key={idx}
                title={item.icon + ' ' + item.name}
                isSelected={response.q1 === item.icon + ' ' + item.name}
                onClickOption={handleOptionClick}
                checked={response.q1 === item.icon + ' ' + item.name}
                questionId="q1"
              />
            ))}
          </Stack>
        </Stack>

        <Stack gap="8px" mt="48px">
          <HStack gap={0}>
            <Text textStyle="mobile_h3">
              2. 잘했다고 생각한 점은 무엇인가요?
            </Text>
            <Text color="font.required">*</Text>
          </HStack>
          <Text textStyle="mobile_b2" color="font.800" mb="8px">
            (복수선택 가능)
          </Text>
          <Stack gap="8px">
            {Object.values(ACHIEVEMENT_MAP).map((item, idx) => (
              <CheckboxItem
                key={idx}
                title={item.icon + ' ' + item.name}
                onClickOption={handleOptionClick}
                questionId="q2"
                checked={response.q2.includes(item.icon + ' ' + item.name)}
              />
            ))}
          </Stack>
        </Stack>

        <Stack gap="8px" mt="48px">
          <HStack gap={0}>
            <Text textStyle="mobile_h3">3. 조금 아쉬운 점은 무엇인가요?</Text>
            <Text color="font.required">*</Text>
          </HStack>
          <Text textStyle="mobile_b2" color="font.800" mb="8px">
            (복수선택 가능)
          </Text>
          <Stack gap="8px">
            {Object.values(FAILURE_MAP).map((item, idx) => (
              <CheckboxItem
                key={idx}
                title={item.icon + ' ' + item.name}
                onClickOption={handleOptionClick}
                questionId="q3"
                checked={response.q3.includes(item.icon + ' ' + item.name)}
              />
            ))}
          </Stack>
        </Stack>

        <Stack gap="8px" mt="48px">
          <HStack gap={0}>
            <Text textStyle="mobile_h3">
              4. 다음 주엔 어떤 재무 루틴을 실천해보고 싶으세요?
            </Text>
            <Text color="font.required">*</Text>
          </HStack>
          <Text textStyle="mobile_b2" color="font.800" mb="8px">
            (복수선택 가능)
          </Text>
          <Stack gap="8px">
            {Object.values(NEXT_WEEK_ROUTINE_MAP).map((item, idx) => (
              <CheckboxItem
                key={idx}
                title={item.icon + ' ' + item.name}
                onClickOption={handleOptionClick}
                questionId="q4"
                checked={response.q4.includes(item.icon + ' ' + item.name)}
              />
            ))}
          </Stack>
        </Stack>

        <Stack gap="8px" mt="48px">
          <Text textStyle="mobile_h3">5. 나에게 하는 한마디!</Text>
          <Stack gap="12px">
            <Textarea
              as="textarea"
              placeholder="자유롭게 적어보세요!"
              textStyle="mobile_b1_med"
              color="main.black_1"
              minH="120px"
              mb="50px"
              backgroundColor="app_background"
              border="none"
              borderRadius="4px"
              value={response.q5}
              p="20px"
              onChange={(e) => setResponse({ ...response, q5: e.target.value })}
            />
          </Stack>
        </Stack>
      </Box>
      <Button
        position="fixed"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        borderRadius="14px"
        height="60px"
        color="white"
        backgroundColor="brand.blue"
        borderWidth="2px"
        borderColor="gray.100"
        minWidth="335px"
        disabled={isResponseInvalid}
        onClick={onClickSubmit}
      >
        <Text textStyle="mobile_b1_semi" color="white">
          제출하기
        </Text>
      </Button>
    </Box>
  );
}
