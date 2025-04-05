import { FinancialDiagnosis_FinancialGoal } from '../domains/financialDiagnosis';

import {
  FinancialDiagnosis,
  FinancialDiagnosis_FinancialRatios,
} from '../domains/financialDiagnosis';

import { FinancialDiagnosis_GroupComparison } from '../domains/financialDiagnosis';

export class FinancialDiagnosisDto {
  id: string;
  userId: string;
  birthYear: number;
  mainInvestmentStrategies: string[];
  mainFinancialIssues: string[];
  financialGoal: FinancialDiagnosis_FinancialGoal;
  financialRatios: FinancialDiagnosis_FinancialRatios;
  isMarried: boolean;
  hasChildren: boolean;
  groupComparison: FinancialDiagnosis_GroupComparison;

  constructor(financialDiagnosis: FinancialDiagnosis) {
    this.id = financialDiagnosis.id;
    this.userId = financialDiagnosis.userId;
    this.birthYear = financialDiagnosis.birthYear;
    this.mainInvestmentStrategies = financialDiagnosis.mainInvestmentStrategies;
    this.mainFinancialIssues = financialDiagnosis.mainFinancialIssues;
    this.financialGoal = financialDiagnosis.financialGoal;
    this.financialRatios = financialDiagnosis.financialRatios;
    this.isMarried = financialDiagnosis.isMarried;
    this.hasChildren = financialDiagnosis.hasChildren;
    this.groupComparison = financialDiagnosis.groupComparison;
  }
}
