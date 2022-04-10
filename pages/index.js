import Article from "../components/Article/Article";
import DefaultButton from "../components/Navigation/Buttons/DefaultButton";
import Skeleton from "../components/Skeleton/Skeleton";

export default function Home() {
  return (
    <>
      <Skeleton
        title={"Homepage"}
        content={
          <>
            <div className="mt-8 mb-8">
              <h1 className="text-center text-white m-4 text-4xl font-semibold">
                Welcome to my blog!
              </h1>
              <p className="text-center m-6 text-gray-400 text-2xl font-semibold">
                I use this space to document my adventures in web development.
              </p>
            </div>
            <h2 className="text-center text-white font-semibold text-3xl">
              Recent posts
            </h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
              <Article />
              <Article />
              <Article />
            </section>
            <DefaultButton text={"Load more"} centerMode={"yes"} />
          </>
        }
      />
    </>
  );
}
