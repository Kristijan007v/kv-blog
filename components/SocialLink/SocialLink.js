import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import InstagramIconDefault from "../Icons/InstagramIconDefault";
import LinkedInIcon from "../Icons/LinkedInIcon";

export default function SocialLink() {
  return (
    <div className="flex justify-center items-center space-x-4">
      <GithubIcon />
      <InstagramIconDefault />
      <LinkedInIcon />
    </div>
  );
}
