/** @jsx jsx */
import { jsx } from "theme-ui";
import Head from "next/head";
import Layout from "../components/layout";
import Link from "../components/Link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import { GetStaticProps } from "next";
import { PostMetaData } from "../lib/interfaces";

interface HomeProps {
  allPostsData: Array<PostMetaData>;
}

export const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>…</Head>
      <section>
        <h2>Blog</h2>
        <ul sx={{ listStyle: "none", padding: 0, margin: 0 }}>
          {allPostsData.map(({ id, date, title }) => (
            <li sx={{ margin: "0 0 1.25rem" }} key={id}>
              <Link href={"/posts/[id]"} as={`/posts/${id}`}>
                {title}
              </Link>
              <div sx={{ variant: "text.date" }}>
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};
