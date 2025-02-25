import { Box, Flex, Text } from '@chakra-ui/react';
import FooterLogoSVG from '@/public/assets/logo_footer.svg';
import BaseLink from '@/src/app/common/BaseLink/BaseLink';
import { PRIVACY_POLICY_URL } from '@/src/constants/URL';
import { TERMS_OF_SERVICE_URL } from '@/src/constants/URL';

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
          <BaseLink href={TERMS_OF_SERVICE_URL}>서비스 이용 약관</BaseLink> |{' '}
          <BaseLink href={PRIVACY_POLICY_URL}>개인정보 수집 동의</BaseLink>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
