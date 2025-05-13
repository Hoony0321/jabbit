import { useForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(1),
  birth_year: z.number().min(1900).max(2099),
  gender: z.enum(['male', 'female']),
  email: z.string().email(),
  phone_number: z.string(),
  terms_of_service_agreed: z.boolean().refine((val) => val),
  privacy_policy_agreed: z.boolean().refine((val) => val),
  provider: z.string().optional(),
  provider_id: z.string().optional(),
});

export type SignUpFormSchema = z.infer<typeof signUpSchema>;

export const useSignUpForm = ({ ...props }: UseFormProps<SignUpFormSchema>) => {
  return useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
    ...props,
  });
};
