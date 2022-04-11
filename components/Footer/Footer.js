import React from "react";
import SocialLink from "../SocialLink/SocialLink";

export default function Footer() {
  return (
    <div className="mt-8 mb-8 flex flex-col justify-center space-y-4 w-5/6 md:w-3/4 m-auto lg:w-2/4 xl:w-2/5">
      <p className="text-center text-black dark:text-white font-semibold text-2xl">
        Get the latest posts delivered right to your inbox.
      </p>
      <input
        className="bg-transparent p-2 border-2 placeholder:font-semibold border-grayInfo rounded-md placeholder-grayInfo w-full text-white focus:outline-none focus:border-white"
        type="email"
        placeholder="Email address"
      />
      <button className="bg-primary text-white font-bold py-2 px-4 rounded-md">
        Subscribe
      </button>
      <p className="text-md md:text-md text-center text-gray-700 dark:text-grayInfo font-semibold">
        Designed and built by Kristijan Vidović
      </p>
      <SocialLink />
    </div>
  );
}
