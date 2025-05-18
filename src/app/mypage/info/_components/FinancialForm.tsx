'use client';

import { useState } from 'react';
import { Button, ButtonGroup, Stack, Steps, Text } from '@chakra-ui/react';
import { FormProvider } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import CautionSVG from '@/src/client/assets/caution.svg';

import postUserFinancialInfo, {
  UserFinancialInfo,
} from '@/src/client/lib/api/postUserFinancialInfo';
import { useAuthStore } from '@/src/client/store/authStore';

import { useSuspenseQuery } from '@tanstack/react-query';
import getUserFinancialInfo from '@/src/client/lib/api/getUserFinancialInfo';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';
import Step5 from './Step5';
import FinancialFormSubmitted from './FinancialFormSubmitted';
import useFinancialInfoForm from '../_hooks/useFinancialInfoForm';
import WebDialog from '@/src/app/components/Dialog/WebDialog';

const steps = [
  {
    title: 'Step 1',
    description: <Step1 />,
  },
  {
    title: 'Step 2',
    description: <Step2 />,
  },
  {
    title: 'Step 3',
    description: <Step3 />,
  },
  {
    title: 'Step 4',
    description: <Step4 />,
  },
  {
    title: 'Step 5',
    description: <Step5 />,
  },
];

function FinancialForm() {
  const { user } = useAuthStore();
  const methods = useFinancialInfoForm({});
  const [currentStep, setCurrentStep] = useState(0);
  const { isSuccess } = useSuspenseQuery({
    queryKey: ['financialInfo', user?.id],
    queryFn: () => getUserFinancialInfo(user?.id ?? ''),
  });

  const handleSubmit = () => {
    if (!user) return;
    const values = methods.getValues();

    const FINANCIAL_GOALS_KEY = ['short_term', 'mid_term', 'long_term'];

    postUserFinancialInfo(user.id, {
      ...values,
      financial_goals: values.financial_goals.map((goal, idx) => ({
        ...goal,
        goal_type: FINANCIAL_GOALS_KEY[idx],
      })) as UserFinancialInfo['financial_goals'],
    });
  };

  return (
    <>
      {!isSuccess ? (
        <FinancialFormSubmitted />
      ) : (
        <FormProvider {...methods}>
          <form style={{ width: '100%' }}>
            <Steps.Root
              defaultStep={0}
              count={steps.length}
              onStepChange={(index) => setCurrentStep(index.step)}
            >
              <Steps.List width="640px" alignSelf="center" mb="50px">
                {steps.map((step, index) => (
                  <Steps.Item key={index} index={index}>
                    <Steps.Indicator
                      borderWidth="1px"
                      bgColor="transparent"
                      borderColor="#d9d9d9"
                      color="main.black_3"
                      _current={{
                        borderColor: 'primary',
                        bgColor: 'primary',
                        color: 'main.white_1',
                      }}
                      _complete={{
                        borderColor: 'primary',
                        bgColor: 'primary',
                        color: 'main.white_1',
                      }}
                    >
                      <Steps.Status
                        incomplete={index + 1}
                        complete={index + 1}
                      />
                    </Steps.Indicator>
                    <Steps.Separator
                      marginInline="0px"
                      height="6px"
                      borderBlock="1px solid"
                      borderColor="#d9d9d9"
                      bgColor="transparent"
                      _complete={{
                        borderColor: 'primary',
                        bgColor: 'primary',
                      }}
                    />
                  </Steps.Item>
                ))}
              </Steps.List>

              {steps.map((step, index) => (
                <Steps.Content key={index} index={index}>
                  {step.description}
                </Steps.Content>
              ))}

              <ButtonGroup alignSelf="center" gap="20px">
                {currentStep >= 1 ? (
                  <Steps.PrevTrigger asChild>
                    <Button
                      variant="solid"
                      textStyle="xs"
                      bgColor="#A9ABBC"
                      mt="72px"
                      w="112px"
                      h="49px"
                      borderRadius="16px"
                    >
                      이전으로
                    </Button>
                  </Steps.PrevTrigger>
                ) : null}
                {currentStep === steps.length - 1 ? (
                  <WebDialog
                    icon={<CautionSVG width="87px" height="87px" />}
                    title={
                      <Stack dir="column" gap="10px">
                        <Text>제출하면 수정 할 수 없어요</Text>
                        <Text>제출할까요?</Text>
                      </Stack>
                    }
                  >
                    <Button
                      variant="solid"
                      textStyle="xs"
                      bgColor="primary"
                      mt="72px"
                      w="112px"
                      h="49px"
                      borderRadius="16px"
                      onClick={handleSubmit}
                    >
                      완료하기
                    </Button>
                  </WebDialog>
                ) : (
                  <Steps.NextTrigger asChild>
                    <Button
                      variant="solid"
                      textStyle="xs"
                      bgColor="primary"
                      mt="72px"
                      w="112px"
                      h="49px"
                      borderRadius="16px"
                    >
                      다음으로
                    </Button>
                  </Steps.NextTrigger>
                )}
              </ButtonGroup>
            </Steps.Root>

            <DevTool control={methods.control} />
          </form>
        </FormProvider>
      )}
    </>
  );
}

export default FinancialForm;
