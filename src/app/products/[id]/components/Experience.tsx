import { Flex, Text } from '@chakra-ui/react';
import CurrentExperienceSVG from '@/public/assets/current_experience_badge.svg';
import FormerExperienceSVG from '@/public/assets/former_experience_badge.svg';

interface ExperienceProps {
  type: '현' | '전';
  description: string;
}

const Experience = ({ type, description }: ExperienceProps) => {
  return (
    <Flex gap="10px" alignItems="center">
      {type === '현' ? <CurrentExperienceSVG /> : <FormerExperienceSVG />}
      <Text fontSize="16px" color="main.black_4">
        {type}
        {')'} {description}
      </Text>
    </Flex>
  );
};

export default Experience;
