import { Link } from '@chakra-ui/react';

const BaseLink = ({
  href,
  children,
  isExternal = true,
  style,
}: {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  style?: React.CSSProperties;
}) => {
  return (
    <Link
      href={href}
      textDecoration="underline"
      _focus={{ outline: 'none' }}
      target={isExternal ? '_blank' : '_self'}
      style={style}
    >
      {children}
    </Link>
  );
};

export default BaseLink;
