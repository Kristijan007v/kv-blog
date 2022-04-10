import { useRouter } from "next/router";
import ArticleInfo from "../../components/ArticleInfo/ArticleInfo";
import Skeleton from "../../components/Skeleton/Skeleton";
import SocialShare from "../../components/SocialShare/SocialShare";
import Image from "next/image";
import Tag from "../../components/Navigation/Tag/Tag";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Skeleton
        title={`Post - ${pid}`}
        content={
          <>
            <div className="m-6 flex flex-col space-y-6">
              <h1 className="heading__main">{pid}</h1>
              <ArticleInfo />
              <Image
                className="rounded-md mt-6"
                src={"/images/article.jpg"}
                width="100%"
                height={"100%"}
                alt={"Article Image"}
                layout={"responsive"}
              />
              <h2 className="heading__2">This is a H2 heading</h2>
              <p className="p__post">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, ipsum eu consectetur consectetur, nisi
              </p>
              <div className="flex justify-between items-center">
                <Tag text={"Python"} special={"yes"} />
                <p className="text__author">Author: Kristijan</p>
              </div>
            </div>
            <SocialShare />
          </>
        }
      />
    </>
  );
};

export default Post;
