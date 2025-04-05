'use client';

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Flex } from '@chakra-ui/react';
import { GroupComparison } from '@/src/client/types/financial';
import CustomAngleTick from './custom/CustomAngleTick';
import CustomRadiusTick from './custom/CustomRadiustick';
import CustomDot from './custom/CustomDot';
import CustomLegend from './custom/CustomLegend';
import CustomTooltip from './custom/CustomTooltip';

const changeToRadarData = (data: GroupComparison) => {
  return data.map((item) => {
    return {
      category: item.category,
      user: item.user,
      average: item.average,
      userPercent: Math.min(100, (item.user / item.average) * 50),
      averagePercent: 50,
    };
  });
};

const GroupComparisonRadarChart = ({ data }: { data: GroupComparison }) => {
  const radarData = changeToRadarData(data);

  return (
    <Flex
      flexDirection="column"
      gap="16px"
      border="2px solid #F2F3F5"
      p="28px"
      w="100%"
    >
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="85%"
          data={radarData}
          margin={{ top: 120, right: 30, left: 30 }}
        >
          <PolarGrid stroke="#E6E6E6" />
          <PolarAngleAxis
            dataKey="category"
            tick={CustomAngleTick(radarData)}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            ticks={[50, 75, 100] as any}
            tick={CustomRadiusTick}
          />
          <Radar
            name="나"
            dataKey="userPercent"
            fill="#334195"
            fillOpacity={0.3}
            dot={CustomDot}
          />
          <Radar
            name="평균"
            dataKey="averagePercent"
            fill="#A3A3A3"
            fillOpacity={0.2}
          />
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="left"
            wrapperStyle={{ top: 0, left: 20 }}
            content={<CustomLegend />}
          />
          <Tooltip
            content={(props) => <CustomTooltip {...props} data={data} />}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default GroupComparisonRadarChart;
