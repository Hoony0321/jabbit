import { Box, Button, Text, Flex, ButtonProps } from '@chakra-ui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  content: string;
  title?: string;
  confirmText?: string;
  cancelText?: string;
  hasCancelButton?: boolean;
  customStyle?: {
    confirmButton?: ButtonProps;
    cancelButton?: ButtonProps;
  };
}

function Modal({
  isOpen,
  onClose,
  onConfirm,
  content,
  title = '',
  hasCancelButton = true,
  confirmText = '확인',
  cancelText = '취소',
  customStyle,
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
          whiteSpace="pre-wrap"
          textAlign="center"
        >
          {content}
        </Text>

        <Flex gap="2" justifyContent="flex-end" paddingTop="27px" w="100%">
          {hasCancelButton && (
            <Button
              variant="outline"
              onClick={onClose}
              backgroundColor="font.700"
              color="white"
              flex={1}
              height="44px"
              borderRadius="10px"
              {...customStyle?.cancelButton}
            >
              {cancelText}
            </Button>
          )}
          <Button
            colorScheme="blue"
            onClick={onConfirm}
            backgroundColor="brand.blue"
            color="white"
            flex={1}
            height="44px"
            borderRadius="10px"
            {...customStyle?.confirmButton}
          >
            {confirmText}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Modal;
