import { Flex } from '@chakra-ui/react';
import Navigation from './components/Navigation/Naviagtion';
import BannerSVG from '@/public/assets/banner_image.svg';
import CertificationSVG from '@/public/assets/certification.svg';
import Banner from './components/Banner/Banner';
import Accordion from './components/Accordion/Accordion';
import FAQ_CONTENT from '../constants/FAQ';
import Footer from './components/Footer/Footer';
import CategoryStack from './components/CategoryStack/CategoryStack';

const Home = () => {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="100%"
      paddingTop="35px"
      alignItems="center"
      gap="157px"
    >
      <Navigation />
      <Banner
        type="main"
        image={<BannerSVG />}
        mainText="영업없는 재무상담,<br />검증된 전문가와 만나 보세요."
      />
      <CategoryStack />
      <Banner
        type="sub"
        title="국제(CFP), 국가(AFPK)"
        mainText="공인 자격을 취득한 재무전문가만 활동 중이에요."
        subText="재무 고민을 전문가와 해결해 보세요."
        image={<CertificationSVG />}
      />
      <Accordion title="[FAQ] 안심하고 상담 받으세요" content={FAQ_CONTENT} />
      <Footer />
    </Flex>
  );
};

export default Home;
