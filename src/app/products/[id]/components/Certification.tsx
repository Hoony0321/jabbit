'use client';

import { EXPERT_CERTIFICATIONS } from '@/src/constants/EXPERT';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface CertificationProps {
  certificationName: string;
}

const Certification = ({ certificationName }: CertificationProps) => {
  const [isHover, setIsHover] = useState(false);

  const certification = EXPERT_CERTIFICATIONS.find(
    (certification) => certificationName === certification.originalName,
  );

  const isVerified = certification?.isOfficialCertification;
  const displayName = certification?.displayName;
  const hoverName = certification?.hoverName;

  if (isVerified) {
    return (
      <Box
        padding="8px 10px"
        bg="#d1ecc5"
        borderRadius="7px"
        position="relative"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Text fontSize="16px" color="#798c71" fontWeight={500}>
          {displayName}
        </Text>
        {isHover && (
          <Flex
            zIndex="10"
            position="absolute"
            borderRadius="10px"
            left="60%"
            transform="translateX(-50%)"
            justifyContent="center"
            alignItems="center"
            height="36px"
            top="48px"
            bg="#676767"
            _after={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: '50%',
              width: '0',
              height: '0',
              border: '7px solid transparent',
              borderBottomColor: '#676767',
              borderTop: '0',
              marginLeft: '-16px',
              marginTop: '-7px',
            }}
          >
            <Text
              fontSize="16px"
              fontWeight={500}
              color="main.white_1"
              padding="10px 8px"
              whiteSpace="nowrap"
            >
              {hoverName}
            </Text>
          </Flex>
        )}
      </Box>
    );
  }

  return (
    <Box
      padding="8px 10px"
      bg="#e3e3e3"
      borderRadius="7px"
      position="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Text fontSize="16px" color="#7d7d7d" fontWeight={500}>
        {displayName}
      </Text>
      {isHover && (
        <Flex
          zIndex="10"
          position="absolute"
          left="60%"
          transform="translateX(-50%)"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          height="36px"
          top="48px"
          bg="#676767"
          _after={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '0',
            height: '0',
            border: '7px solid transparent',
            borderBottomColor: '#676767',
            borderTop: '0',
            marginLeft: '-16px',
            marginTop: '-7px',
          }}
        >
          <Text
            fontSize="16px"
            fontWeight={500}
            color="main.white_1"
            padding="10px 8px"
            whiteSpace="nowrap"
          >
            {hoverName}
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Certification;
