import { UserFinancialInfo } from '@/src/server/types/domains';
import { GroupComparison } from '../../types/financial';

const GROUP_AVERAGE_20S = [
  {
    category: '소득',
    variable_name: 'monthly_income',
    average: 296,
  },
  {
    category: '보유 자산',
    variable_name: 'total_asset',
    average: 16938,
  },
  {
    category: '소비/지출',
    variable_name: 'monthly_income',
    average: 132,
  },
  {
    category: '저축/투자',
    variable_name: 'monthly_investment',
    average: 87,
  },
  {
    category: '부채 상환',
    variable_name: 'total_debt',
    average: 30,
  },
];

export const getGroupComparison = (
  userFinancialInfo: UserFinancialInfo,
): GroupComparison => {
  const {
    monthly_income,
    monthly_savings,
    monthly_expenses,
    monthly_investment,
    total_debt,
    net_worth,
  } = userFinancialInfo;

  const groupComparison: GroupComparison = [
    {
      category: '소득',
      user: Math.round(monthly_income / 10000),
      average: GROUP_AVERAGE_20S[0].average,
    },
    {
      category: '보유 자산',
      user: Math.round((net_worth - total_debt) / 10000),
      average: GROUP_AVERAGE_20S[1].average,
    },
    {
      category: '소비/지출',
      user: Math.round(monthly_expenses / 10000),
      average: GROUP_AVERAGE_20S[2].average,
    },
    {
      category: '저축/투자',
      user: Math.round((monthly_investment + monthly_savings) / 10000),
      average: GROUP_AVERAGE_20S[3].average,
    },
    {
      category: '부채 상환',
      user: Math.round(total_debt / 10000),
      average: GROUP_AVERAGE_20S[4].average,
    },
  ];

  return groupComparison;
};
