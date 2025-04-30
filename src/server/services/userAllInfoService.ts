import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';
import { UserAsset } from '../types/domains';
import { UserDebt, UserExpense } from '../types/domains';
import { UserCashflows, UserFinancialConcern } from '../types/domains';
import { UserFinancialGoal } from '../types/domains';
import { UserPersonalInfo } from '../types/domains';

interface UserAllInfoCreateForm {
  personal_info: Omit<UserPersonalInfo, 'id'>;
  financial_goals: Omit<UserFinancialGoal, 'user_id'>[];
  financial_concern: Omit<UserFinancialConcern, 'id'>;
  cashflows: Omit<UserCashflows, 'id'>;
  expenses: Omit<UserExpense, 'user_id'>[];
  debts: Omit<UserDebt, 'user_id'>[];
  assets: Omit<UserAsset, 'user_id'>[];
}

class UserAllInfoService {
  constructor(private readonly supabase: SupabaseClient<Database, 'public'>) {}

  insertedTables: { table: string; key: string }[] = [];

  async createUserAllInfo(userId: string, allInfo: UserAllInfoCreateForm) {
    try {
      // user_personal_info
      const { data: userPersonalInfo, error: userPersonalInfoError } =
        await this.supabase
          .from('user_personal_info')
          .insert({
            id: userId,
            ...allInfo.personal_info,
          })
          .select();
      if (userPersonalInfoError) {
        throw new Error(userPersonalInfoError.message);
      }
      this.insertedTables.push({
        table: 'user_personal_info',
        key: userId,
      });

      // user_financial_goal
      const { data: userFinancialGoal, error: userFinancialGoalError } =
        await this.supabase
          .from('user_financial_goal')
          .insert(
            allInfo.financial_goals.map((goal) => ({
              user_id: userId,
              ...goal,
            })),
          )
          .select();
      if (userFinancialGoalError) {
        throw new Error(userFinancialGoalError.message);
      }
      for (const goal of userFinancialGoal) {
        this.insertedTables.push({
          table: 'user_financial_goal',
          key: goal.id.toString(),
        });
      }

      // user_financial_concern
      const { data: userFinancialConcern, error: userFinancialConcernError } =
        await this.supabase
          .from('user_financial_concern')
          .insert({
            id: userId,
            ...allInfo.financial_concern,
          })
          .select();
      if (userFinancialConcernError) {
        throw new Error(userFinancialConcernError.message);
      }
      this.insertedTables.push({
        table: 'user_financial_concern',
        key: userId,
      });

      // user_cashflows
      const { data: userCashflow, error: userCashflowError } =
        await this.supabase
          .from('user_cashflows')
          .insert({
            id: userId,
            ...allInfo.cashflows,
          })
          .select();
      if (userCashflowError) {
        throw new Error(userCashflowError.message);
      }
      for (const cashflow of userCashflow) {
        this.insertedTables.push({
          table: 'user_cashflows',
          key: cashflow.id,
        });
      }

      // user_expense
      const { data: userExpense, error: userExpenseError } = await this.supabase
        .from('user_expense')
        .insert(
          allInfo.expenses.map((expense) => ({
            user_id: userId,
            ...expense,
          })),
        )
        .select();
      if (userExpenseError) {
        throw new Error(userExpenseError.message);
      }
      for (const expense of userExpense) {
        this.insertedTables.push({
          table: 'user_expense',
          key: expense.id.toString(),
        });
      }

      // user_debt
      const { data: userDebt, error: userDebtError } = await this.supabase
        .from('user_debt')
        .insert(
          allInfo.debts.map((debt) => ({
            user_id: userId,
            ...debt,
          })),
        )
        .select();
      if (userDebtError) {
        throw new Error(userDebtError.message);
      }
      for (const debt of userDebt) {
        this.insertedTables.push({
          table: 'user_debt',
          key: debt.id.toString(),
        });
      }

      // user_asset
      const { data: userAsset, error: userAssetError } = await this.supabase
        .from('user_asset')
        .insert(
          allInfo.assets.map((asset) => ({
            user_id: userId,
            ...asset,
          })),
        )
        .select();
      if (userAssetError) {
        throw new Error(userAssetError.message);
      }
      for (const asset of userAsset) {
        this.insertedTables.push({
          table: 'user_asset',
          key: asset.id.toString(),
        });
      }

      return {
        userPersonalInfo,
        userFinancialGoal,
        userFinancialConcern,
        userCashflow,
        userExpense,
        userDebt,
        userAsset,
      };
    } catch (error) {
      console.error(error);
      for (const table of this.insertedTables) {
        await this.supabase
          .from(table.table as never)
          .delete()
          .eq('id', table.key);
      }
      throw new Error('Failed to create user all info');
    }
  }

  async getUserAllInfo(userId: string) {
    const { data: userAllInfo, error: userAllInfoError } = await this.supabase
      .from('users')
      .select(
        `
          *,
          user_personal_info(*),
          user_financial_goal(*),
          user_financial_concern(*),
          user_cashflows(*), user_expense(*), user_debt(*), user_asset(*)`,
      )
      .eq('id', userId);
    if (userAllInfoError) {
      throw new Error(userAllInfoError.message);
    }

    return userAllInfo[0];
  }
}

export default UserAllInfoService;
