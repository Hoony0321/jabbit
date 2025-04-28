export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      consulting_products: {
        Row: {
          category: string
          created_at: string
          detail_fields: string[]
          expert_id: string
          google_form_link: string
          id: string
          prices: Json
          product_description: string
          target_descriptions: string[]
          title: string
        }
        Insert: {
          category: string
          created_at?: string
          detail_fields: string[]
          expert_id: string
          google_form_link: string
          id?: string
          prices: Json
          product_description: string
          target_descriptions: string[]
          title: string
        }
        Update: {
          category?: string
          created_at?: string
          detail_fields?: string[]
          expert_id?: string
          google_form_link?: string
          id?: string
          prices?: Json
          product_description?: string
          target_descriptions?: string[]
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "consulting_products_expert_id_fkey"
            columns: ["expert_id"]
            isOneToOne: false
            referencedRelation: "experts"
            referencedColumns: ["id"]
          },
        ]
      }
      experts: {
        Row: {
          activities: Json
          certificates: string[]
          created_at: string
          experiences: Json
          id: string
          is_verified: boolean
          name: string
          primary_fields: string[]
          profile_image_url: string
          yearsOfExperience: number
        }
        Insert: {
          activities: Json
          certificates: string[]
          created_at?: string
          experiences: Json
          id?: string
          is_verified: boolean
          name: string
          primary_fields: string[]
          profile_image_url: string
          yearsOfExperience: number
        }
        Update: {
          activities?: Json
          certificates?: string[]
          created_at?: string
          experiences?: Json
          id?: string
          is_verified?: boolean
          name?: string
          primary_fields?: string[]
          profile_image_url?: string
          yearsOfExperience?: number
        }
        Relationships: []
      }
      user_consulting_histories: {
        Row: {
          additional_proposals: Json
          consulting_product_id: string
          created_at: string
          id: string
          main_proposals: Json
          profit_info: Json
          profits: Json
          status: string
          user_id: string
          weekly_missions: Json
        }
        Insert: {
          additional_proposals: Json
          consulting_product_id: string
          created_at?: string
          id?: string
          main_proposals: Json
          profit_info: Json
          profits: Json
          status?: string
          user_id: string
          weekly_missions: Json
        }
        Update: {
          additional_proposals?: Json
          consulting_product_id?: string
          created_at?: string
          id?: string
          main_proposals?: Json
          profit_info?: Json
          profits?: Json
          status?: string
          user_id?: string
          weekly_missions?: Json
        }
        Relationships: [
          {
            foreignKeyName: "user_consulting_histories_consulting_product_id_fkey"
            columns: ["consulting_product_id"]
            isOneToOne: false
            referencedRelation: "consulting_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_consulting_histories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_financial_diagnosis: {
        Row: {
          created_at: string
          financial_goal: Json
          id: number
          main_financial_issues: string[]
          main_investment_strategies: string[]
          user_id: string
        }
        Insert: {
          created_at?: string
          financial_goal: Json
          id?: number
          main_financial_issues: string[]
          main_investment_strategies: string[]
          user_id: string
        }
        Update: {
          created_at?: string
          financial_goal?: Json
          id?: number
          main_financial_issues?: string[]
          main_investment_strategies?: string[]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_financial_diagnosis_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_financial_info: {
        Row: {
          created_at: string
          id: number
          monthly_expenses: number
          monthly_income: number
          monthly_investment: number
          monthly_savings: number
          net_worth: number
          total_debt: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          monthly_expenses?: number
          monthly_income?: number
          monthly_investment?: number
          monthly_savings?: number
          net_worth?: number
          total_debt?: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          monthly_expenses?: number
          monthly_income?: number
          monthly_investment?: number
          monthly_savings?: number
          net_worth?: number
          total_debt?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_financial_info_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_financial_prediction: {
        Row: {
          consulting_suggestion: Json
          created_at: string
          future_financial_prediction: Json
          goal_achievement_predictions: Json
          id: number
          user_id: string
        }
        Insert: {
          consulting_suggestion: Json
          created_at?: string
          future_financial_prediction: Json
          goal_achievement_predictions: Json
          id?: number
          user_id: string
        }
        Update: {
          consulting_suggestion?: Json
          created_at?: string
          future_financial_prediction?: Json
          goal_achievement_predictions?: Json
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_financial_prediction_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          birth_year: number | null
          created_at: string
          email: string | null
          has_children: boolean | null
          id: string
          is_married: boolean | null
          provider: string
          provider_id: string
        }
        Insert: {
          birth_year?: number | null
          created_at?: string
          email?: string | null
          has_children?: boolean | null
          id?: string
          is_married?: boolean | null
          provider: string
          provider_id: string
        }
        Update: {
          birth_year?: number | null
          created_at?: string
          email?: string | null
          has_children?: boolean | null
          id?: string
          is_married?: boolean | null
          provider?: string
          provider_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
