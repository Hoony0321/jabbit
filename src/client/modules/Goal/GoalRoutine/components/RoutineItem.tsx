import { useState } from 'react';
import { Flex, Checkbox } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';

import Modal from '@/src/app/common/Modal/Modal';
import { GOAL_QUERY_KEY, usePatchRoutineItem } from '../../hooks/goal.query';

interface RoutineItemProps extends Checkbox.RootProps {
  title: string;
  id: string;
}

const CHECKBOX_STYLE = {
  completed: {
    box: {
      bgColor: 'blue_gray.100',
      color: 'blue_gray.400',
    },
    checkbox: {
      _checked: {
        bgColor: 'blue_gray.400',
        borderColor: 'blue_gray.400',
      },
    },
  },
  uncompleted: {
    box: {
      bgColor: 'app_background',
    },
    checkbox: {
      _checked: {
        bgColor: 'brand.blue',
        borderColor: 'brand.blue',
      },
    },
  },
};

function RoutineItem({ title, id, ...props }: RoutineItemProps) {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: patchRoutineItem } = usePatchRoutineItem({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: GOAL_QUERY_KEY.GET_ROUTINE,
      });
      setIsModalOpen(false);
    },
  });

  const handleChange = () => {
    patchRoutineItem(id);
  };

  const checkboxStyle =
    CHECKBOX_STYLE[props.checked ? 'completed' : 'uncompleted'];

  return (
    <>
      <Flex borderRadius="10px" px="16px" py="12px" {...checkboxStyle.box}>
        <Checkbox.Root
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="12px"
          variant="solid"
          onChange={() => !props.checked && setIsModalOpen(true)}
          {...props}
        >
          <Checkbox.Label textStyle="mobile_b1_med">{title}</Checkbox.Label>
          <Checkbox.HiddenInput />
          <Checkbox.Control
            cursor="pointer"
            bgColor="brand.white"
            border="1.5px solid"
            borderColor="#C9CBCE"
            {...checkboxStyle.checkbox}
          />
        </Checkbox.Root>
      </Flex>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleChange}
        content={`루틴 실천 성공!\n재무 목표 달성 확률이 높아졌어요`}
        hasCancelButton={false}
      />
    </>
  );
}

export default RoutineItem;
