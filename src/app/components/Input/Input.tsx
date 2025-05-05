import React from 'react';
import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

function Input({ ...props }: InputProps) {
  return (
    <ChakraInput
      height="50px"
      bgColor="main.line"
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

export default Input;
