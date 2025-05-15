import { Input } from '@chakra-ui/react';

interface AnswerInputProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function AnswerInput({ value, onChange }: AnswerInputProps) {
  return (
    <Input
      type="number"
      placeholder="0"
      size="lg"
      textAlign="right"
      height="60px"
      display="inline-block"
      width="full"
      minWidth="223px"
      maxWidth="280px"
      borderRadius="10px"
      padding="0 16px"
      backgroundColor="white"
      borderWidth="2px"
      borderColor="gray.100"
      pl="8px"
      value={value}
      onChange={onChange}
      _focus={{
        backgroundColor: 'blue.300',
        color: 'brand.blue',
        borderWidth: '2px',
        borderColor: 'brand.blue',
      }}
    />
  );
}

export default AnswerInput;
