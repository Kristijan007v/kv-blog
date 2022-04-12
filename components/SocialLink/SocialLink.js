import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import InstagramIconDefault from "../Icons/InstagramIconDefault";
import LinkedInIcon from "../Icons/LinkedInIcon";
import IconLink from "../IconLink/IconLink";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default function SocialLink() {
  return (
    <ErrorBoundary>
      <div className="flex justify-center items-center space-x-4">
        <GithubIcon link={"yes"} href={"https://github.com/kristijan007v"} />
        <InstagramIconDefault link={"yes"} />
        <LinkedInIcon link={"yes"} />
      </div>
    </ErrorBoundary>
  );
}
