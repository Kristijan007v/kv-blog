import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import FacebookIconDefault from "../Icons/FacebookIconDefault";
import InstagramIconDefault from "../Icons/InstagramIconDefault";
import RedditIconDefault from "../Icons/RedditIconDefault";
import WhatsappIconDefault from "../Icons/WhatsappIconDefault";

export default function SocialShare() {
  return (
    <div className="bg-primary p-4 text-white flex justify-between items-center sm:w-full md:w-5/6 lg:w-4/5 m-auto md:rounded-md">
      <p className="font-semibold text-lg">Share article</p>
      <div className="flex space-x-4">
        <RedditShareButton
          quote="20.456 People have brought the light to UA. Join them."
          hashtag="#ukraine"
          url="https://bringthelightua.web.app"
        >
          <RedditIconDefault />
        </RedditShareButton>
        <FacebookShareButton
          quote="20.456 People have brought the light to UA. Join them."
          hashtag="#ukraine"
          url="https://bringthelightua.web.app"
        >
          <FacebookIconDefault />
        </FacebookShareButton>
        <WhatsappShareButton
          quote="20.456 People have brought the light to UA. Join them."
          hashtag="#ukraine"
          url="https://bringthelightua.web.app"
        >
          <WhatsappIconDefault />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
