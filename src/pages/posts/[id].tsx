/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import { PostData } from "../../lib/interfaces";

interface PostProps {
  postData: PostData;
}

export const Post: React.FC<PostProps> = ({ postData }) => (
  <Layout home={false}>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 sx={{ mb: 0, variant: "text.heading" }}>{postData.title}</h1>
      <div sx={{ variant: "text.date" }}>
        <Date dateString={postData.date} />
      </div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) throw new Error("Params expected");
  const postData = await getPostData(params.id as string);
  return { props: { postData } };
};

export default Post;
