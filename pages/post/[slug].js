import { useRouter } from "next/router";
import ArticleInfo from "../../components/ArticleInfo/ArticleInfo";
import Skeleton from "../../components/Skeleton/Skeleton";
import SocialShare from "../../components/SocialShare/SocialShare";
import Image from "next/image";
import Tag from "../../components/Navigation/Tag/Tag";
import client from "../../client";

const Post = (props) => {
  // const { title = "Missing title", name = "Missing name" } = props.post;

  return (
    <>
      <Skeleton
        title={`Post`}
        content={
          <>
            <div className="m-auto mt-8 mb-8 flex flex-col space-y-6 w-5/6 lg:w-4/5">
              <h1 className="heading__main">{props.post?.title}</h1>
              <ArticleInfo />
              <div className="image__container">
                <Image
                  priority
                  className="image"
                  src={"/images/article.webp"}
                  alt={"Article Image"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h2 className="heading__2">This is a H2 heading</h2>
              <p className="p__post">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, ipsum eu consectetur consectetur, nisi
              </p>
              <div className="flex justify-between items-center">
                <Tag text={"Python"} special={"yes"} />
                <p className="text__author">Author: {props.post?.name}</p>
              </div>
            </div>
            <SocialShare />
          </>
        }
      />
    </>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{title, "name": author->name}
  `,
    { slug }
  );
  return {
    props: {
      post,
    },
  };
}

export default Post;
