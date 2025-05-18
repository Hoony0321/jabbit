import { Tabs } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

interface TabProps {
  menuList: {
    label: string;
    value: string;
  }[];
  onClick: (value: string) => void;
}

function Tab({ menuList, onClick }: TabProps) {
  const pathname = usePathname();

  return (
    <Tabs.Root defaultValue="members" borderColor="line.gray">
      <Tabs.List>
        {menuList.map((item) => {
          const isActive = pathname.includes(item.value);

          return (
            <Tabs.Trigger
              value={item.value}
              key={item.value}
              aria-selected={isActive}
              onClick={() => onClick(item.value)}
              justifyContent="center"
              textStyle="mobile_b1_semi"
              pt="0px"
              pb="10px"
              flex={1}
              _selected={{
                color: 'brand.blue',
              }}
              _before={{
                backgroundColor: 'brand.blue',
              }}
            >
              {item.label}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
    </Tabs.Root>
  );
}

export default Tab;
