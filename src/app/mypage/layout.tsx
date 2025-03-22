import { Flex } from '@chakra-ui/react';
import Navigation from '../components/Navigation/Naviagtion';
import SideBar from './components/SideBar';
import Footer from '../components/Footer/Footer';
import MypageAuthWrapper from './components/MypageAuthWrapper';

const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MypageAuthWrapper>
      <Flex
        flexDirection="column"
        width="100%"
        maxWidth="1280px"
        minHeight="80vh"
        paddingTop="35px"
        margin="0 auto"
        alignItems="center"
        gap="94px"
      >
        <Navigation />
        <Flex w="100%" justifyContent="space-between" gap="160px">
          <SideBar />
          {children}
        </Flex>
      </Flex>
      <Footer />
    </MypageAuthWrapper>
  );
};

export default MypageLayout;
