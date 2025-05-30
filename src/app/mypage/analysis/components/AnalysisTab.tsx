'use client';
import { Flex } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';

interface AnalysisTabProps {
  availableTabs: string[];
}

const TabItem = ({
  tab,
  isSelected,
  onClick,
}: {
  tab: string;
  isSelected: boolean;
  onClick: (tab: string) => void;
}) => {
  return (
    <Flex
      w="70px"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      onClick={() => onClick(tab)}
      position="relative"
      pb="2px"
      fontSize="18px"
      fontWeight={isSelected ? '600' : '500'}
      color={isSelected ? 'primary' : 'main.black_4'}
    >
      {tab}
      {isSelected && (
        <Flex
          position="absolute"
          bottom="-2px"
          left="0"
          right="0"
          height="2px"
          bg="primary"
          zIndex="1"
        />
      )}
    </Flex>
  );
};

const AnalysisTab = ({ availableTabs }: AnalysisTabProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || availableTabs[0];

  const handleTab = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    router.push(`?${params.toString()}`);
  };

  return (
    <Flex
      width="100%"
      gap="40px"
      borderBottom="2px solid var(--chakra-colors-main-line)"
      position="relative"
      mb="64px"
    >
      {availableTabs.map((tab) => (
        <TabItem
          key={tab}
          tab={tab}
          isSelected={tab === activeTab}
          onClick={handleTab}
        />
      ))}
    </Flex>
  );
};

export default AnalysisTab;
