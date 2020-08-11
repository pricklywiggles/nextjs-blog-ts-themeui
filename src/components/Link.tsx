/** @jsx jsx */
import Link, { LinkProps } from "next/link";
import { jsx, Styled } from "theme-ui";

type StyledLinkProps = LinkProps & { sx?: Record<string, unknown> };

const StyledLink: React.FC<StyledLinkProps> = ({ children, ...props }) => (
  <Link {...props} passHref>
    <Styled.a>{children}</Styled.a>
  </Link>
);

export default StyledLink;
