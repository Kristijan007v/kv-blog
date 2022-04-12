import React from "react";
import Calendar from "../Calendar/Calendar";
import Tag from "../Navigation/Tag/Tag";
import Time from "../Time/Time";
import Image from "next/image";
import Link from "next/link";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default function Article() {
  return (
    <ErrorBoundary moduleName={"Article"}>
      <article className="m-6 flex flex-col space-y-4">
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
          <Calendar />
          <Time />
        </div>
        <Link href="/post/firstpost">
          <a className="heading__post">First post</a>
        </Link>
        <p className="p__post">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, ipsum eu consectetur consectetur, nisi
        </p>
        <div className="flex justify-between items-center">
          <Tag text={"Python"} special={"yes"} />
          <p className="text__author">Author: Kristijan</p>
        </div>
      </article>
    </ErrorBoundary>
  );
}
