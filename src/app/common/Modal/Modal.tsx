import { Box, Button, Text, Flex } from '@chakra-ui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  content: string;
  confirmText?: string;
  cancelText?: string;
}

function Modal({
  isOpen,
  onClose,
  onConfirm,
  title = '',
  content,
  confirmText = '확인',
  cancelText = '취소',
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(0, 0, 0, 0.5)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="1000"
    >
      <Box
        bg="white"
        borderRadius="14px"
        p="20px"
        maxW="500px"
        minW="270px"
        position="relative"
        boxShadow="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {title && (
          <Text fontSize="xl" fontWeight="bold" mb="4">
            {title}
          </Text>
        )}
        <Text
          textStyle="mobile_b1_semi"
          color="font.900"
          height="44px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {content}
        </Text>

        <Flex gap="2" justifyContent="flex-end" paddingTop="27px">
          <Button
            variant="outline"
            onClick={onClose}
            backgroundColor="font.700"
            color="white"
            width="115px"
            height="44px"
            borderRadius="10px"
          >
            {cancelText}
          </Button>
          <Button
            colorScheme="blue"
            onClick={onConfirm}
            backgroundColor="black"
            color="white"
            width="115px"
            height="44px"
            borderRadius="10px"
          >
            {confirmText}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Modal;
