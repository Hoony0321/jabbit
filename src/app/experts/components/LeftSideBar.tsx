import { EXPERT_SPECIALTIES } from '@/src/client/constants/EXPERT';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';

const LeftSideBar = ({
  selectedSpecialty,
  setSelectedSpecialty,
}: {
  selectedSpecialty: string;
  setSelectedSpecialty: (specialty: string) => void;
}) => {
  return (
    <Flex
      maxWidth="1280px"
      w="100%"
      position="sticky"
      top="35px"
      h="fit-content"
    >
      <Box w="320px">
        <VStack align="stretch" gap="20px">
          {EXPERT_SPECIALTIES.map((item) => (
            <Box
              key={item}
              cursor="pointer"
              p="20px"
              borderRadius="10px"
              bgColor={selectedSpecialty === item ? '#F3F5FF' : 'main.white_1'}
              onClick={() => setSelectedSpecialty(item)}
            >
              <Text
                fontSize="md"
                fontWeight="600"
                color={
                  selectedSpecialty === item ? 'main.black_1' : 'main.black_4'
                }
              >
                {item}
              </Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default LeftSideBar;
