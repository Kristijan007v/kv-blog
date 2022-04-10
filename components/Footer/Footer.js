import React from "react";

export default function Footer() {
  return (
    <div className="m-8 flex flex-col justify-center space-y-6">
      <p className="text-center text-white font-semibold text-2xl">
        Get the latest posts delivered right to your inbox.
      </p>
      <input
        className="bg-transparent p-2 border-2 border-gray-700 rounded-md placeholder-gray-500 w-full text-white focus:outline-none focus:border-white"
        type="email"
        placeholder="Email address"
      />
      <button className="bg-primary text-white font-bold py-2 px-4 rounded-md">
        Subscribe
      </button>
      <p className="text-sm text-center text-gray-600 font-medium">
        Designed and built by Kristijan Vidović
      </p>
    </div>
  );
}
