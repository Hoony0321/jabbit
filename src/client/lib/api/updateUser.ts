import { BASE_URL } from '@/src/server/constants/API';
import { SignUpFormSchema } from '@/src/app/signup/_hooks/useSignUpForm';

const updateUser = async (
  userId: string,
  data: Omit<
    SignUpFormSchema,
    | 'terms_of_service_agreed'
    | 'privacy_policy_agreed'
    | 'provider'
    | 'provider_id'
  >,
) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });

  return await response.json();
};

export default updateUser;
