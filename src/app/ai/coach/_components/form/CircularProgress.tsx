'use client';
import { Box, Text } from '@chakra-ui/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressProps {
  height?: number;
  width?: number;
  percentage?: number;
}

export default function CircularProgress({
  height = 175,
  width = 175,
  percentage = 0,
}: CircularProgressProps) {
  return (
    <Box position="relative" width={width} height={height}>
      <CircularProgressbar
        value={percentage}
        text={''}
        strokeWidth={8}
        styles={buildStyles({
          pathColor: '#334195',
          trailColor: '#F2F3F5',
          pathTransitionDuration: 0.3,
          strokeLinecap: 'round',
        })}
      />
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textStyle="mobile_h1"
        color="font.900"
      >
        {percentage}%
      </Text>
    </Box>
  );
}
