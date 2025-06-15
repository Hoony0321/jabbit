import { Portal, Select as ChakraSelect } from '@chakra-ui/react';

interface SelectProps extends ChakraSelect.RootProps {
  placeholder: string;
}

const Select = ({ placeholder, ...props }: SelectProps) => {
  return (
    <ChakraSelect.Root width="100%" {...props}>
      <ChakraSelect.HiddenSelect />
      <ChakraSelect.Control>
        <ChakraSelect.Trigger
          borderRadius="12px"
          height="50px"
          bgColor="blue.100"
          borderColor="font.400"
          _placeholderShown={{
            color: 'font.600',
          }}
          color="font.900"
        >
          <ChakraSelect.ValueText
            placeholder={placeholder}
            textStyle="mobile_b2"
          />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup>
          <ChakraSelect.Indicator />
        </ChakraSelect.IndicatorGroup>
      </ChakraSelect.Control>
      <Portal>
        <ChakraSelect.Positioner>
          <ChakraSelect.Content
            p="0"
            w="100%"
            borderRadius="12px"
            bgColor="blue.100"
            maxHeight="250px"
          >
            {props.collection.items.map((option) => (
              <ChakraSelect.Item
                item={option}
                key={option.value}
                textStyle="mobile_b2"
                color="font.900"
                bgColor="blue.100"
                px="16px"
                py="14px"
                _notLast={{
                  borderBottom: '1px solid',
                  borderColor: 'font.400',
                }}
                borderRadius="0"
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
