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
            <div className="m-auto mt-8 mb-8 flex flex-col space-y-6 w-5/6 lg:w-4/5">
              <h1 className="heading__main">{pid}</h1>
              <ArticleInfo />
              <div className="image__container">
                <Image
                  priority
                  className="image"
                  src={"/images/article.jpg"}
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
