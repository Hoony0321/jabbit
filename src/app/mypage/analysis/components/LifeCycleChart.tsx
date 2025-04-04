import LifeCycleSVG20 from '@/public/assets/lifecycle_20.svg';
import LifeCycleSVG30 from '@/public/assets/lifecycle_30.svg';
import LifeCycleSVG40 from '@/public/assets/lifecycle_40.svg';
import LifeCycleSVG50 from '@/public/assets/lifecycle_50.svg';
import LifeCycleSVG60 from '@/public/assets/lifecycle_60.svg';
import LifeCycleSVG70 from '@/public/assets/lifecycle_70.svg';
import LifeCycleSVG80 from '@/public/assets/lifecycle_80.svg';
import { Flex, Text } from '@chakra-ui/react';
import ColorBox from './ColorBox';

interface LifeCycleChartProps {
  age: number;
}

const LifeCycleSVG = ({ age }: LifeCycleChartProps) => {
  if (age < 30) {
    return <LifeCycleSVG20 />;
  }
  if (age < 40) {
    return <LifeCycleSVG30 />;
  }
  if (age < 50) {
    return <LifeCycleSVG40 />;
  }
  if (age < 60) {
    return <LifeCycleSVG50 />;
  }
  if (age < 70) {
    return <LifeCycleSVG60 />;
  }
  if (age < 80) {
    return <LifeCycleSVG70 />;
  } else {
    return <LifeCycleSVG80 />;
  }
};

const LifeCycleChart = ({ age }: LifeCycleChartProps) => {
  return (
    <Flex flexDirection="column" gap="20px">
      <Flex gap="14px">
        <Flex gap="8px" alignItems="center">
          <ColorBox color="primary" />
          <Text fontSize="14px" fontWeight="500" color="main.black_1">
            수입곡선
          </Text>
        </Flex>
        <Flex gap="8px" alignItems="center">
          <ColorBox color="#ffc800" />
          <Text fontSize="14px" fontWeight="500" color="main.black_1">
            지출곡선
          </Text>
        </Flex>
      </Flex>
      <LifeCycleSVG age={age} />
    </Flex>
  );
};

export default LifeCycleChart;
