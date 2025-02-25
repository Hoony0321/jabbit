import { Box, Text } from '@chakra-ui/react';

const SpecialtyDetailBadge = ({
  specialtyDetail,
}: {
  specialtyDetail: string;
}) => {
  return (
    <Box bg="#fff3c7" borderRadius="7px" padding="8px 10px">
      <Text fontSize="16px" fontWeight={500} color="#93844f">
        #{specialtyDetail}
      </Text>
    </Box>
  );
};

export default SpecialtyDetailBadge;
