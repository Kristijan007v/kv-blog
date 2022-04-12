import React from "react";
import Calendar from "../Calendar/Calendar";
import Tag from "../Navigation/Tag/Tag";
import Time from "../Time/Time";
import Image from "next/image";
import Link from "next/link";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import client from "../../client";

export default function Article({ key, articleTitle, href, publishedAt }) {
  return (
    <ErrorBoundary moduleName={"Article"}>
      <article className="m-6 flex flex-col space-y-4" key={key}>
        <div className="relative w-full h-72">
          <Image
            priority
            className="rounded-md"
            alt={"Article Image"}
            src={"/images/article.webp"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex justify-between">
          <Calendar date={publishedAt} />
          <Time />
        </div>
        <Link href={href}>
          <a className="heading__post">{articleTitle}</a>
        </Link>
        <p className="p__post">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, ipsum eu consectetur consectetur, nisi
        </p>
        <div className="flex justify-between items-center">
          <Tag text={"Python"} special={"yes"} />
          <p className="text__author">Author: Kristijan Vidović</p>
        </div>
      </article>
    </ErrorBoundary>
  );
}
