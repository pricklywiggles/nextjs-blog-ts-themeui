/** @jsx jsx */
import Head from "next/head";
import Link from "../components/Link";
import { jsx } from "theme-ui";
import { Image, Styled } from "theme-ui";

const name = "Filiberto Mascarpone";
export const siteTitle = "Next.js Sample Website";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => (
  <div sx={{ maxWidth: "36rem", padding: "0 1rem", margin: "3rem auto 6rem" }}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <header sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {home ? (
        <>
          <Image src="/images/profile.jpg" variant="avatar.large" alt={name} />
          <h1 sx={{ variant: "text.heading" }}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image src="/images/profile.jpg" variant="avatar.small" alt={name} />
            </a>
          </Link>
          <h2 sx={{ variant: "text.heading" }}>
            <Link href="/">{name}</Link>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home && (
      <div sx={{ margin: "3rem 0 0" }}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  </div>
);

export default Layout;
