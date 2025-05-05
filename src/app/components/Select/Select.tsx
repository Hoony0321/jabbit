import { Portal, Select as ChakraSelect } from '@chakra-ui/react';

interface SelectProps extends ChakraSelect.RootProps {
  placeholder: string;
}

const Select = ({ placeholder, ...props }: SelectProps) => {
  return (
    <ChakraSelect.Root width="100%" {...props}>
      <ChakraSelect.HiddenSelect />
      <ChakraSelect.Control>
        <ChakraSelect.Trigger borderRadius="12px" height="50px">
          <ChakraSelect.ValueText
            placeholder={placeholder}
            textStyle="xs"
            fontWeight={600}
            color="main.black_2"
          />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup>
          <ChakraSelect.Indicator />
        </ChakraSelect.IndicatorGroup>
      </ChakraSelect.Control>
      <Portal>
        <ChakraSelect.Positioner>
          <ChakraSelect.Content w="190px" borderRadius="12px">
            {props.collection.items.map((option) => (
              <ChakraSelect.Item
                item={option}
                key={option.value}
                textStyle="xs"
                fontWeight={600}
                color="main.black_2"
              >
                {option.label}
                <ChakraSelect.ItemIndicator />
              </ChakraSelect.Item>
            ))}
          </ChakraSelect.Content>
        </ChakraSelect.Positioner>
      </Portal>
    </ChakraSelect.Root>
  );
};

export default Select;
