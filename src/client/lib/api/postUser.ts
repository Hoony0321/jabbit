import { SignUpFormSchema } from '@/src/app/signup/_hooks/useSignUpForm';
import { BASE_URL } from '@/src/server/constants/API';

const postUser = async (
  user: Omit<
    SignUpFormSchema,
    'terms_of_service_agreed' | 'privacy_policy_agreed'
  >,
) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create user');
  }

  return (await response.json()).data;
};

export default postUser;
