import { Flex, Text } from '@chakra-ui/react';
import { parseActivity } from '@/src/client/utils/parser';
import { activity } from '@/src/client/types/activity';
import BaseLink from '@/src/app/common/BaseLink/BaseLink';
interface ActivityProps {
  activities: activity[];
}

const Activity = ({ activities }: ActivityProps) => {
  const parsedActivity = parseActivity(activities);

  return (
    <Flex flexDirection="column" gap="20px">
      {parsedActivity.education.length > 0 && (
        <Flex gap="23px">
          <Text fontSize="16px" fontWeight={600} color="main.black_2">
            교육/강연
          </Text>
          <Flex flexDirection="column">
            {parsedActivity.education.map((activity) => (
              <Text
                key={activity}
                fontSize="16px"
                fontWeight={500}
                color="main.black_4"
              >
                {activity}
              </Text>
            ))}
          </Flex>
        </Flex>
      )}
      {parsedActivity.press.length > 0 && (
        <Flex gap="23px">
          <Text fontSize="16px" fontWeight={600} color="main.black_2">
            보도/방송
          </Text>
          <Flex flexDirection="column">
            {parsedActivity.press.map((activity) => {
              return activity.url ? (
                <BaseLink key={activity.string} href={activity.url}>
                  <Text
                    fontSize="16px"
                    fontWeight={500}
                    color="main.black_4"
                    textDecoration="underline"
                  >
                    {activity.string}
                  </Text>
                </BaseLink>
              ) : (
                <Text
                  key={activity.string}
                  fontSize="16px"
                  fontWeight={500}
                  color="main.black_4"
                >
                  {activity.string}
                </Text>
              );
            })}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Activity;
