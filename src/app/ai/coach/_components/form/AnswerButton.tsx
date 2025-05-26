import { Button } from '@chakra-ui/react';

function AnswerButton({
  isSelected,
  children,
  onClick,
}: {
  isSelected: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Button
      borderRadius="10px"
      height="60px"
      color="gray.700"
      borderWidth="2px"
      backgroundColor="white"
      borderColor="gray.100"
      _hover={{
        backgroundColor: 'blue.300',
        color: 'brand.blue',
        borderWidth: '2px',
        borderColor: 'brand.blue',
      }}
      _selected={{
        backgroundColor: 'blue.300',
        color: 'brand.blue',
        borderWidth: '2px',
        borderColor: 'brand.blue',
      }}
      aria-selected={isSelected}
      width="full"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default AnswerButton;
