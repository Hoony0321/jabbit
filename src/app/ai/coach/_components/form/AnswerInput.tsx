import { Input } from '@chakra-ui/react';
interface AnswerInputProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: () => void;
}

function AnswerInput({ value, onChange, onEnter }: AnswerInputProps) {
  const handleBlur = () => {
    if (value) onEnter();
  };

  return (
    <Input
      type="text"
      inputMode="numeric"
      placeholder="0"
      size="lg"
      textAlign="right"
      height="60px"
      display="inline-block"
      minWidth="200px"
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
      onBlur={handleBlur}
    />
  );
}

export default AnswerInput;
