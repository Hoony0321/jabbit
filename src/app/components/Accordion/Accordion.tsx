import { Flex, Text } from '@chakra-ui/react';
import AccordionItemType from '../../../types/accordionItem';
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from '@/src/components/ui/accordion';

interface AccordionProps {
  title?: string;
  content: Array<AccordionItemType>;
}

const Accordion = ({ title, content }: AccordionProps) => {
  if (title) {
    return (
      <Flex flexDirection="column" width="1280px" marginTop="60px">
        <Text textStyle="xxl">{title}</Text>
        <AccordionRoot multiple>
          {content.map((item, index) => (
            <AccordionItem key={index} value={item.value}>
              <AccordionItemTrigger textStyle="xl" padding="44px 0">
                {item.title}
              </AccordionItemTrigger>
              <AccordionItemContent
                textStyle="lg"
                color="main.black_2"
                paddingLeft="32px"
              >
                {item.text}
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Flex>
    );
  }

  return (
    <AccordionRoot collapsible>
      {content.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
          <AccordionItemContent>{item.text}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

export default Accordion;
