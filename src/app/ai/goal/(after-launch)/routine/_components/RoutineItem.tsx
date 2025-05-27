import { Flex, Checkbox } from '@chakra-ui/react';

interface RoutineItemProps extends Checkbox.RootProps {
  title: string;
}

function RoutineItem({ title, ...props }: RoutineItemProps) {
  return (
    <Flex borderRadius="10px" bgColor="app_background" p="12px">
      <Checkbox.Root
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="12px"
        variant="solid"
        {...props}
      >
        <Checkbox.Label textStyle="mobile_b1_med">{title}</Checkbox.Label>
        <Checkbox.HiddenInput />
        <Checkbox.Control
          _checked={{
            bgColor: 'brand.blue',
            borderColor: 'brand.blue',
          }}
        />
      </Checkbox.Root>
    </Flex>
  );
}

export default RoutineItem;
