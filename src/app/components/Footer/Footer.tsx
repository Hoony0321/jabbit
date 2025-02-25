import { Box, Flex, Text } from '@chakra-ui/react';
import FooterLogoSVG from '@/public/assets/logo_footer.svg';
const Footer = () => {
  return (
    <Box width="100%" borderTop="2px solid #f2f3f5">
      <Flex
        flexDirection="column"
        gap="20px"
        maxWidth="1280px"
        margin="52px auto"
      >
        <FooterLogoSVG />
        <Text textStyle="sm" color="main.black_4">
          대표자명: 한승호 | Contact: jabbitmy@gmail.com
        </Text>
        <Text textStyle="sm" color="main.black_4">
          서비스 이용 약관 개인정보 수집 동의
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
