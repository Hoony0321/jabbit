import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

interface CheckboxProps extends ChakraCheckbox.RootProps {
  label: string;
}

function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <ChakraCheckbox.Root {...props}>
      <ChakraCheckbox.HiddenInput />
      <ChakraCheckbox.Control
        borderRadius="4px"
        border="2px solid #C9CBCE"
        _checked={{
          bgColor: 'primary',
          border: 'none',
        }}
      >
        <ChakraCheckbox.Indicator />
      </ChakraCheckbox.Control>
      <ChakraCheckbox.Label color="main.black_2">{label}</ChakraCheckbox.Label>
    </ChakraCheckbox.Root>
  );
}

export default Checkbox;
