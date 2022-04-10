import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import InstagramIconDefault from "../Icons/InstagramIconDefault";
import LinkedInIcon from "../Icons/LinkedInIcon";
import IconLink from "../IconLink/IconLink";

export default function SocialLink() {
  return (
    <div className="flex justify-center items-center space-x-4">
      <IconLink
        link={"/post/firstpost"}
        iconComponent={<GithubIcon link={"yes"} />}
      />
      <IconLink
        link={"/post/firstpost"}
        iconComponent={<InstagramIconDefault link={"yes"} />}
      />
      <IconLink
        link={"/post/firstpost"}
        iconComponent={<LinkedInIcon link={"yes"} />}
      />
    </div>
  );
}
