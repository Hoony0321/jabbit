import { Link } from '@chakra-ui/react';

const BaseLink = ({
  href,
  children,
  isExternal = true,
}: {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}) => {
  return (
    <Link
      href={href}
      textDecoration="underline"
      _focus={{ outline: 'none' }}
      target={isExternal ? '_blank' : '_self'}
    >
      {children}
    </Link>
  );
};

export default BaseLink;
