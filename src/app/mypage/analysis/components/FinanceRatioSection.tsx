import { Flex, Text } from '@chakra-ui/react';
import FinanceTable from './FinanceTable';
import TableBadge from './TableBadge';
import { evaluateFinancialRatio } from '@/src/client/services/analysis/evaluateFinancialRatio';
import { getFinancialRatioByBirthYear } from '@/src/client/services/analysis/getFinancialRatioConstant';
import { EvaluatedResult } from '@/src/client/types/financial';

// 타입 정의
type FinancialRatioKey =
  | 'expense'
  | 'insurance'
  | 'saving'
  | 'investment'
  | 'debtRepayment'
  | 'retirement';

type FinancialRatios = Record<FinancialRatioKey, number>;

interface FinanceRatioSectionProps {
  birthYear: number;
  financialRatios: FinancialRatios;
}

const FinanceRatioSection = ({
  birthYear,
  financialRatios,
}: FinanceRatioSectionProps) => {
  const ratioConstant = getFinancialRatioByBirthYear(birthYear);

  const evaluatedResult: EvaluatedResult[] = Object.entries(
    financialRatios,
  ).map(([key, value]) => {
    const ratio = ratioConstant[key as keyof typeof ratioConstant];
    const evaluation = evaluateFinancialRatio(
      ratio.condition,
      value,
      ratio.value,
    );
    return {
      name: key,
      label: ratio.label,
      evaluation,
      myRatio: value,
    };
  });

  return (
    <Flex flexDirection="column" gap="36px">
      <Flex flexDirection="column" gap="12px">
        <Text fontSize="24px" fontWeight="600" color="main.black_1">
          재무비율 진단
        </Text>
        <Text fontSize="16px" fontWeight="500" color="main.black_3">
          매월 소득을 잘 쓰고 있는지 알려드릴게요
        </Text>
      </Flex>
      <FinanceTable
        ratioConstant={ratioConstant}
        evaluatedResult={evaluatedResult}
      />
      <ul>
        <li
          style={{
            listStyle: 'disc',
            fontSize: '16px',
            marginLeft: '22px',
            marginBottom: '20px',
          }}
        >
          <Flex gap="10px">
            <Text>잘하고 있어요</Text>
            <Flex gap="4px">
              {evaluatedResult.map((item) =>
                item.evaluation ? (
                  <TableBadge
                    title={item.label}
                    evaluation={item.evaluation}
                    key={item.name}
                  />
                ) : null,
              )}
            </Flex>
          </Flex>
        </li>
        <li style={{ listStyle: 'disc', fontSize: '16px', marginLeft: '22px' }}>
          <Flex gap="10px">
            <Text>보완해야 돼요</Text>
            <Flex gap="4px">
              {evaluatedResult.map((item) =>
                !item.evaluation ? (
                  <TableBadge
                    title={item.label}
                    evaluation={item.evaluation}
                    key={item.name}
                  />
                ) : null,
              )}
            </Flex>
          </Flex>
        </li>
      </ul>
    </Flex>
  );
};

export default FinanceRatioSection;
