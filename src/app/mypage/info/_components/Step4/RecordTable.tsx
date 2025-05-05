import { Fragment } from 'react';
import { Button, Flex, Grid, ListCollection } from '@chakra-ui/react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

import Input from '@/src/app/components/Input/Input';
import Select from '@/src/app/components/Select/Select';
import { Field } from '@/src/client/components/ui/field';
import { UserFinancialInfo } from '@/src/client/lib/api/postUserFinancialInfo';

function RecordTable({
  options,
  fieldName,
  subFields,
}: {
  options: ListCollection<{ label: string; value: string }>;
  fieldName: 'debts' | 'assets' | 'expenses';
  subFields: {
    label: string;
    placeholder: string;
  }[];
}) {
  const { control, register } = useFormContext<UserFinancialInfo>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldName,
  });

  return (
    <Flex flexDirection="column" gap="40px">
      <Grid templateColumns="1fr 1fr 2fr" columnGap="20px" rowGap="24px">
        <Field label={subFields[0].label} gap="9px">
          <Controller
            name={`${fieldName}.0.category`}
            control={control}
            render={({ field }) => (
              <Select
                collection={options}
                placeholder={subFields[0].placeholder}
                name={field.name}
                onValueChange={({ value }) => field.onChange(value[0])}
                onInteractOutside={() => field.onBlur()}
              />
            )}
          />
        </Field>
        <Field label={subFields[1].label} gap="9px">
          <Input
            type="number"
            placeholder={subFields[1].placeholder}
            {...register(`${fieldName}.0.amount`, {
              valueAsNumber: true,
            })}
          />
        </Field>
        <Field label={subFields[2].label} gap="9px">
          <Input
            placeholder={subFields[2].placeholder}
            {...register(`${fieldName}.0.memo`)}
          />
        </Field>

        {fields.slice(1).map((field, index) => (
          <Fragment key={field.id}>
            <Controller
              name={`${fieldName}.${index + 1}.category`}
              control={control}
              render={({ field }) => (
                <Select
                  collection={options}
                  placeholder={subFields[0].placeholder}
                  name={field.name}
                  onValueChange={({ value }) => field.onChange(value[0])}
                  onInteractOutside={() => field.onBlur()}
                />
              )}
            />

            <Input
              type="number"
              placeholder={subFields[1].placeholder}
              {...register(`${fieldName}.${index + 1}.amount`, {
                valueAsNumber: true,
              })}
            />
            <Input
              placeholder={subFields[2].placeholder}
              {...register(`${fieldName}.${index + 1}.memo`)}
            />
          </Fragment>
        ))}
      </Grid>

      <Flex alignItems="center" gap="20px" justifyContent="center">
        <Button
          borderRadius="10px"
          bgColor="#E8EBFF"
          color="primary"
          w="108px"
          h="45px"
          onClick={() => append({ category: '', amount: 0, memo: '' })}
        >
          항목 추가
        </Button>
        <Button
          borderRadius="10px"
          bgColor="#fafafa"
          color="main.black_3"
          w="108px"
          h="45px"
          onClick={() => remove(fields.length - 1)}
          disabled={fields.length === 1}
        >
          삭제
        </Button>
      </Flex>
    </Flex>
  );
}

export default RecordTable;
