'use client';

import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { parseLastTwoNumberOfYear } from '@/src/client/utils/parser';
import ConsultationAuthWrapper from '../../../components/ConsultationAuthWrapper';
import ReportAccordion from './ReportAccordion';
import ProfitCards from './ProfitCards';
import MissionAccordion from './MissionAccordion';
import { formatKoreanCurrency } from '@/src/client/utils/currency';

interface ConsultationReportViewProps {
  userId: string;
  createdAt: string;
  field: string;
  expertName: string;
  mainProposals: any[];
  additionalProposals: any[];
  profits: any;
  profitInfo: any;
  weeklyMissions: any[];
}

const ConsultationReportView = ({
  userId,
  createdAt,
  field,
  expertName,
  mainProposals,
  additionalProposals,
  profits,
  profitInfo,
  weeklyMissions,
}: ConsultationReportViewProps) => {
  return (
    <ConsultationAuthWrapper targetUserId={userId}>
      <Flex flexDirection="column" gap="54px">
        <Flex flexDirection="column" gap="32px">
          <Text fontSize="24px" fontWeight="600">
            {parseLastTwoNumberOfYear(createdAt)} {field} 결과
          </Text>
          <Flex flexDirection="column" gap="12px">
            <Text fontSize="20px" fontWeight="500">
              {expertName} 전문가님이 제안했어요
            </Text>
            <Text textStyle="sm" color="main.black_3">
              전문가님이 선정한 우선순위 대로 보여드릴게요!
            </Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="64px">
          <Flex flexDirection="column" gap="28px" w="100%">
            <Text fontSize="20px" fontWeight="600">
              핵심제안 {mainProposals.length}가지 알려드려요
            </Text>
            {mainProposals.map((proposal, index) => {
              const rank = index + 1;
              return (
                <ReportAccordion
                  key={index}
                  rank={rank}
                  title={proposal.title}
                  description={proposal.description}
                  isMainProposal={true}
                />
              );
            })}
          </Flex>
          <Flex flexDirection="column" gap="28px" w="100%">
            <Text fontSize="20px" fontWeight="600">
              추가적인 제안들도 알려드려요
            </Text>
            {additionalProposals.map((proposal, index) => {
              const rank = index + 1;
              return (
                <ReportAccordion
                  key={index}
                  rank={rank}
                  title={proposal.title}
                  description={proposal.description}
                  isMainProposal={false}
                />
              );
            })}
          </Flex>
          <Flex flexDirection="column" gap="34px">
            <Text fontSize="20px" fontWeight="600">
              지금 제안들을 실행하면 얼마나 이득일까요?
            </Text>
            <ProfitCards profits={profits} profitInfo={profitInfo} />
          </Flex>
          <Flex flexDirection="column" gap="34px">
            <Text fontSize="20px" fontWeight="600">
              주간 미션을 추천드려요
            </Text>
            {weeklyMissions.map((mission, index) => (
              <MissionAccordion key={index} index={index} {...mission} />
            ))}
          </Flex>
        </Flex>
        <Box margin="54px auto 120px auto" position="relative" flexShrink={0}>
          <Flex
            zIndex="10"
            position="absolute"
            bottom="38px"
            left="53%"
            transform="translateX(-50%)"
            p="6px 12px"
            bg="#f6f7ff"
            borderRadius="10px"
            justifyContent="center"
            alignItems="center"
            _after={{
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '30%',
              width: '0',
              height: '0',
              border: '7px solid transparent',
              borderTopColor: '#f6f7ff',
              borderBottom: '0',
              marginLeft: '-16px',
              marginBottom: '-7px',
            }}
          >
            <Text
              textStyle="sm"
              fontWeight={600}
              color="#5971b2"
              whiteSpace="nowrap"
            >
              오늘 시작하면 {formatKoreanCurrency(profits.today)}원 이득!
            </Text>
          </Flex>
          <Button w="300px" borderRadius="10px" bg="primary" cursor="pointer">
            <Text fontSize="16px"> 미션 리마인드 알림 받기</Text>
          </Button>
        </Box>
      </Flex>
    </ConsultationAuthWrapper>
  );
};

export default ConsultationReportView;
