import { Flex, List, Text } from '@chakra-ui/react';
import { GuideContent } from '../_constants/guide';

interface GuidePageProps {
  content: GuideContent;
}

function GuidePage({ content }: GuidePageProps) {
  return (
    <Flex flexDir="column" p="20px" gap="32px">
      <Flex flexDir="column" gap="12px">
        <Text textStyle="mobile_h2" color="brand.blue">
          {content.title}
        </Text>
        <Text textStyle="mobile_b1_semi" color="font.900" whiteSpace="pre-wrap">
          {content.description}
        </Text>
      </Flex>

      <Flex flexDir="column" gap="16px">
        {content.questions.map(({ title, description, list }) => (
          <Flex
            flexDir="column"
            gap="12px"
            key={title}
            bgColor="app_background"
            p="16px"
            borderRadius="16px"
          >
            <Text textStyle="mobile_h3" color="brand.blue">
              {title}
            </Text>
            {description && (
              <Text textStyle="mobile_b2" color="font.800">
                {description}
              </Text>
            )}
            {list && list.length > 0 && (
              <List.Root flexDir="column" listStylePos="inside">
                {list.map((item, index) => (
                  <List.Item
                    key={index}
                    textStyle="mobile_b2"
                    color="font.800"
                    _marker={{ margin: '0px', color: 'inherit' }}
                  >
                    {item}
                  </List.Item>
                ))}
              </List.Root>
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default GuidePage;
