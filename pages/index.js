import Article from "../components/Article/Article";
import DefaultButton from "../components/Navigation/Buttons/DefaultButton";
import Skeleton from "../components/Skeleton/Skeleton";
import groq from "groq";
import client from "../client";

export default function Home({ posts }) {
  return (
    <>
      <Skeleton
        title={"Homepage"}
        content={
          <>
            <div className="mt-8 mb-8">
              <h1 className="text-center text-black dark:text-white m-4 text-4xl font-semibold">
                Welcome to my blog!
              </h1>
              <p className="text-center m-6 text-gray-700 dark:text-graySpecial text-2xl font-semibold">
                I use this space to document my adventures in web development.
              </p>
            </div>
            <h2 className="text-center text-black dark:text-white font-semibold text-3xl">
              Recent posts
            </h2>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-8">
              {posts.length > 0 &&
                posts.map(
                  ({
                    _id,
                    title = "",
                    slug = "",
                    publishedAt = "",
                    name = "",
                  }) =>
                    slug && (
                      <Article
                        key={_id}
                        articleTitle={title}
                        href={`/post/${slug.current}`}
                        publishedAt={publishedAt}
                      />
                    )
                )}
            </section>
            <DefaultButton text={"Load more"} centerMode={"yes"} />
          </>
        }
      />
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
