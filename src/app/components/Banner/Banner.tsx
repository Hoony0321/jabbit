import { Flex, Text } from '@chakra-ui/react';

interface BannerProps {
  image: React.ReactNode;
  type?: 'main' | 'sub';
}

interface MainBannerProps extends BannerProps {
  type: 'main';
  mainText: string;
}

interface SubBannerProps extends BannerProps {
  type: 'sub';
  title: string;
  mainText: string;
  subText: string;
}

type BannerComponentProps = MainBannerProps | SubBannerProps;

const Banner = (props: BannerComponentProps) => {
  if (props.type === 'main') {
    const { mainText, image } = props;
    return (
      <Flex
        bg="#fafbff"
        height="600px"
        width="1280px"
        borderRadius="35px"
        justifyContent="space-between"
        alignItems="center"
        padding="0 100px"
      >
        <Text
          color="primary"
          fontSize="50px"
          fontWeight={600}
          dangerouslySetInnerHTML={{ __html: mainText }}
        />
        {image}
      </Flex>
    );
  }

  if (props.type === 'sub') {
    const { title, mainText, subText, image } = props;
    return (
      <Flex
        bg="#fafbff"
        height="200px"
        width="1280px"
        borderRadius="35px"
        justifyContent="space-between"
        alignItems="center"
        padding="0 80px"
      >
        <Flex flexDirection="column" gap="14px">
          <Text
            color="#primary_3"
            textStyle="md"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Text
            color="primary"
            fontSize="32px"
            dangerouslySetInnerHTML={{ __html: mainText }}
          />
          <Text
            color="#primary_2"
            textStyle="lg"
            dangerouslySetInnerHTML={{ __html: subText }}
          />
        </Flex>
        {image}
      </Flex>
    );
  }
};

export default Banner;
