'use client';
import {
  Box,
  Accordion,
  Flex,
  Text,
  Span,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import FinancialDynamicPresentationSVG from '@/public/assets/Financial_Dynamic_Presentation.svg';
import { useRouter } from 'next/navigation';
const AccordionTrigger = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Accordion.ItemTrigger p="0">
      <Flex
        bgColor="#E6E9F8"
        justifyContent="center"
        alignItems="center"
        py="16px"
        w="100%"
        borderRadius={isOpen ? '10px 10px 0 0' : '10px'}
        onClick={() => setIsOpen(!isOpen)}
        position="relative"
      >
        <Text
          color="primary"
          fontSize="20px"
          fontWeight="semibold"
          position="relative"
        >
          목표 달성기간을 줄이고 싶다면?
        </Text>
        <Box
          position="absolute"
          top="50%"
          transform={`translateY(-50%)`}
          right="200px"
        >
          {isOpen ? (
            <IoIosArrowUp color="#334195" size="24px" />
          ) : (
            <IoIosArrowDown color="#334195" size="24px" />
          )}
        </Box>
      </Flex>
    </Accordion.ItemTrigger>
  );
};

const AccordionContent = ({
  consultingPoints,
  originalDuration,
  estimatedReducedDuration,
}: {
  consultingPoints: string[];
  originalDuration: number;
  estimatedReducedDuration: number;
}) => {
  const router = useRouter();
  return (
    <Flex
      flexDirection="column"
      p="28px"
      bgColor="#E6E9F8"
      borderBottomRadius="10px"
      borderTopRadius="0px"
    >
      <Flex
        bgColor="#F4F6FF"
        borderRadius="10px"
        w="100%"
        gap="32px"
        alignItems="center"
        justifyContent="center"
        p="32px"
      >
        <FinancialDynamicPresentationSVG />
        <Flex flexDirection="column" gap="12px">
          <Text fontSize="24px" fontWeight="semibold">
            [{'종합재무상담'}]을 받으면
          </Text>
          <Text fontSize="20px" fontWeight="medium" color="main.black_2">
            예상 소요시간: {originalDuration}개월 →{' '}
            <Span color="primary" fontSize="20px" fontWeight="semibold">
              {estimatedReducedDuration}개월
            </Span>
          </Text>
        </Flex>
      </Flex>

      <Box h="40px" />

      <Flex flexDirection="column" gap="24px" px="60px">
        <Text fontSize="20px" fontWeight="medium" color="main.black_3">
          예상 상담내용
        </Text>
        <Flex
          flexDirection="column"
          gap="4px"
          fontSize="20px"
          fontWeight="medium"
          color="main.black_3"
        >
          <List.Root pl="20px" style={{ listStyleType: 'disc' }}>
            {consultingPoints.map((point) => (
              <ListItem key={point}> {point}</ListItem>
            ))}
          </List.Root>
        </Flex>
      </Flex>

      <Box h="60px" />

      <Button
        w="240px"
        h="50px"
        bgColor="primary"
        color="white"
        borderRadius="10px"
        mx="auto"
        fontSize="18px"
        fontWeight="semibold"
        onClick={() => {
          router.push('/experts');
        }}
      >
        상담 둘러보러 가기
      </Button>
    </Flex>
  );
};

interface ConsultingSuggestion {
  originalDuration: number;
  estimatedReducedDuration: number;
  consultingPoints: string[];
}

const ConsultingSuggestionSection = ({
  consultingSuggestion,
}: {
  consultingSuggestion: ConsultingSuggestion;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion.Root collapsible w="100%">
      <Accordion.Item value="_" borderBottom="none">
        <AccordionTrigger isOpen={isOpen} setIsOpen={setIsOpen} />
        <Accordion.ItemContent borderTopRadius="0px">
          <Accordion.ItemBody p="0" m="0">
            <AccordionContent
              consultingPoints={consultingSuggestion.consultingPoints}
              originalDuration={consultingSuggestion.originalDuration}
              estimatedReducedDuration={
                consultingSuggestion.estimatedReducedDuration
              }
            />
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};
export default ConsultingSuggestionSection;
