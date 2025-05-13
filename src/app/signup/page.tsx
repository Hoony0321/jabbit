'use client';

import { Flex, Text, Button, Link, Box } from '@chakra-ui/react';
import Input from '@/src/app/components/Input/Input';
import Field from '@/src/app/components/Field/Field';
import RadioGroup from '@/src/app/components/RadioGroup/RadioGroup';
import Checkbox from '@/src/app/components/Checkbox/Checkbox';
import { Controller, FormProvider } from 'react-hook-form';
import postUser from '@/src/client/lib/api/postUser';
import { DevTool } from '@hookform/devtools';
import { useSignUpForm } from './_hooks/useSignUpForm';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { AuthUser, useAuthStore } from '@/src/client/store/authStore';
import { createJwtToken } from '@/src/client/lib/api/createJwt';
import { useErrorToast } from '@/src/client/errors/useErrorToast';
import {
  PRIVACY_POLICY_URL,
  TERMS_OF_SERVICE_URL,
} from '@/src/client/constants/URL';
import Logo from '../common/Logo/Logo';

const GENDER_OPTIONS = [
  { value: 'male', label: '남성' },
  { value: 'female', label: '여성' },
];

const SignUp = () => {
  const router = useRouter();
  const { setUser: setUser } = useAuthStore();
  const { showErrorToast } = useErrorToast();
  const searchParams = useSearchParams();
  const provider = searchParams.get('provider');
  const providerId = searchParams.get('providerId');
  const methods = useSignUpForm({
    mode: 'onChange',
  });
  const { register, control, formState } = methods;
  const { isValid } = formState;

  const handleSubmit = async () => {
    const values = methods.getValues();
    try {
      if (!provider || !providerId) {
        showErrorToast(new Error('Provider or providerId is required'));
        router.replace('/login');
        return;
      }
      const data = await postUser({
        ...values,
        provider,
        provider_id: providerId,
      });

      const user: AuthUser = {
        id: data.id,
        name: data.name,
        email: data.email,
      };
      const token = await createJwtToken(user);
      setUser(user, token);
      router.replace('/');
    } catch (error) {
      router.replace('/login');
      showErrorToast(error as Error);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box width="100%" padding="38px 320px">
        <Logo />
      </Box>
      <Flex
        as="form"
        onSubmit={methods.handleSubmit(handleSubmit)}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Flex
          flexDirection="column"
          width="400px"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="36px" fontWeight="semibold" mb="40px">
            회원가입
          </Text>

          <Field label="이름" required maxW="100%" gap="9px" mb="24px">
            <Input placeholder="이름을 입력하세요" {...register('name')} />
          </Field>

          <Flex gap="40px" mb="24px">
            <Field label="출생연도" required maxW="50%" gap="9px">
              <Input
                placeholder="출생연도를 입력하세요"
                {...register('birth_year', {
                  valueAsNumber: true,
                })}
                type="number"
              />
            </Field>
            <Field label="성별" required maxW="160px" gap="22px">
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    options={GENDER_OPTIONS}
                    color="main.black_2"
                    flexDir="row"
                    gap="40px"
                    {...field}
                  />
                )}
              />
            </Field>
          </Flex>

          <Field label="이메일" required maxW="100%" gap="9px" mb="24px">
            <Input placeholder="이메일을 입력하세요" {...register('email')} />
          </Field>

          <Field label="전화번호" required maxW="100%" gap="9px" mb="40px">
            <Input
              placeholder="전화번호를 입력하세요"
              {...register('phone_number')}
            />
          </Field>

          <Flex flexDirection="column" gap="12px" mb="32px" width="100%">
            <Flex justifyContent="space-between" width="100%">
              <Controller
                name="terms_of_service_agreed"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    label="(필수) 서비스 이용약관 동의"
                    checked={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <Link
                href={TERMS_OF_SERVICE_URL}
                color="main.black_1"
                fontSize="12px"
                fontWeight="semibold"
                target="_blank"
              >
                내용보기
              </Link>
            </Flex>
            <Flex justifyContent="space-between">
              <Controller
                name="privacy_policy_agreed"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    label="(필수) 개인정보 수집/이용 동의"
                    checked={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <Link
                href={PRIVACY_POLICY_URL}
                color="main.black_1"
                fontSize="12px"
                fontWeight="semibold"
                target="_blank"
              >
                내용보기
              </Link>
            </Flex>
          </Flex>

          <Button
            type="submit"
            bgColor={isValid ? 'primary' : '#A9ABBC'}
            size="lg"
            mt="16px"
            w="100%"
            h="57px"
            color="main.white"
            borderRadius="10px"
          >
            가입신청
          </Button>
        </Flex>

        <Text
          fontSize="14px"
          color="main.black_4"
          mt="100px"
          fontWeight="medium"
        >
          © Jabbit, ALL RIGHTS RESERVED.
        </Text>
        <DevTool control={methods.control} />
      </Flex>
    </FormProvider>
  );
};

export default SignUp;
