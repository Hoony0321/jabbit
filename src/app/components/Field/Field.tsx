import { Field as ChakraField } from '@chakra-ui/react';

function Field({
  label,
  children,
  ...props
}: {
  label: string;
  children: React.ReactNode;
} & ChakraField.RootProps) {
  return (
    <ChakraField.Root {...props}>
      <ChakraField.Label
        fontWeight={props.fontWeight || 600}
        fontSize={props.fontSize || '16px'}
        textStyle={props.textStyle || 'sm'}
      >
        {label}
        {props.required && <ChakraField.RequiredIndicator />}
      </ChakraField.Label>
      {children}
    </ChakraField.Root>
  );
}

export default Field;
