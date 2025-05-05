import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react';

interface RadioGroupProps extends ChakraRadioGroup.RootProps {
  options: { value: string; label: string }[];
}

/**
 * 라디오 그룹 컴포넌트
 * @param options 라디오 그룹 옵션
 * @param props 라디오 그룹 컴포넌트 속성
 * @returns 라디오 그룹 컴포넌트
 */

function RadioGroup({ options, ...props }: RadioGroupProps) {
  return (
    <ChakraRadioGroup.Root
      colorPalette="primary"
      display="flex"
      flexDir="column"
      gap="14px"
      {...props}
    >
      {options.map((item) => (
        <ChakraRadioGroup.Item key={item.value} value={item.value}>
          <ChakraRadioGroup.ItemHiddenInput />
          <ChakraRadioGroup.ItemIndicator width="23px" height="23px" />
          <ChakraRadioGroup.ItemText
            textStyle={props.textStyle || 'xs'}
            fontWeight={600}
            color={props.color}
          >
            {item.label}
          </ChakraRadioGroup.ItemText>
        </ChakraRadioGroup.Item>
      ))}
    </ChakraRadioGroup.Root>
  );
}

export default RadioGroup;
