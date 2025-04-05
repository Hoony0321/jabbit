export type EvaluatedResult = {
  name: string;
  label: string;
  evaluation: boolean;
  myRatio: number;
};

export type RatioConditionType = 'min' | 'max' | 'range';

type BaseRatioConfig = {
  label: string;
  condition: RatioConditionType;
  displayText: string;
};

type MinOrMaxConfig = BaseRatioConfig & {
  condition: 'min' | 'max';
  value: number;
};

type RangeConfig = BaseRatioConfig & {
  condition: 'range';
  value: number[];
};

export type FinancialRatioItem = MinOrMaxConfig | RangeConfig;

export type FinancialRatioConfig = Record<string, FinancialRatioItem>;

export type GroupComparisonItem = {
  category: string;
  user: number;
  average: number;
};

export type GroupComparison = GroupComparisonItem[];
