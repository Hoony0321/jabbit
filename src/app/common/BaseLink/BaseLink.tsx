import { Link } from '@chakra-ui/react';

const BaseLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} textDecoration="underline" _focus={{ outline: 'none' }}>
      {children}
    </Link>
  );
};

export default BaseLink;
