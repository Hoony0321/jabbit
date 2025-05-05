import { Textarea as ChakraTextarea, TextareaProps } from '@chakra-ui/react';

function Textarea({ ...props }: TextareaProps) {
  return (
    <ChakraTextarea
      bgColor="main.line"
      padding="16px"
      paddingBottom="24px"
      borderRadius="12px"
      borderColor="#d8d8d8"
      _placeholder={{
        color: 'main.black_2',
        textStyle: 'xs',
        fontWeight: '600',
      }}
      {...props}
    />
  );
}

export default Textarea;
