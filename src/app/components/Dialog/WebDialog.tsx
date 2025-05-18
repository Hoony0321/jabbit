import { Button, Dialog, Portal } from '@chakra-ui/react';

interface WebDialogProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string | React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}

function WebDialog({
  children,
  icon,
  title,
  onConfirm,
  onCancel,
}: WebDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop bgColor="rgba(0, 0, 0, 0.40)" />
        <Dialog.Positioner>
          <Dialog.Content
            borderRadius="12px"
            bgColor="brand.white"
            p="30px"
            alignItems="center"
            maxW="455px"
            w="100%"
          >
            <Dialog.Header p="0px">{icon && icon}</Dialog.Header>
            <Dialog.Body
              p="0px"
              mt="30px"
              mb="36px"
              textStyle="web_b4_med"
              textAlign="center"
            >
              {title}
            </Dialog.Body>
            <Dialog.Footer p="0px" gap="20px">
              <Dialog.ActionTrigger asChild>
                <Button
                  variant="outline"
                  borderRadius="16px"
                  w="110px"
                  h="49px"
                  bgColor="blue_gray.300"
                  color="brand.white"
                  onClick={onCancel}
                >
                  취소
                </Button>
              </Dialog.ActionTrigger>
              <Button
                onClick={onConfirm}
                borderRadius="16px"
                w="110px"
                h="49px"
                bgColor="brand.blue"
                color="brand.white"
              >
                제출
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default WebDialog;
