import React from "react";
import Search from "../Search/Search";
import MenuButton from "./Buttons/MenuButton";
import SearchButton from "./Buttons/SearchButton";
import CloseButton from "./Buttons/CloseButton";
import Tag from "./Tag/Tag";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const toogleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <nav className="bg-primary text-white sticky top-0 z-20">
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            <a className="font-semibold text-xl">KV.blog</a>
          </Link>
          <div className="hidden space-x-6 md:flex">
            <SearchButton onclick={toogleSearch} />
            <Link href="/">
              <a className="font-semibold text-xl link">Home</a>
            </Link>
            <Link href="/">
              <a className="font-semibold text-xl link">Categories</a>
            </Link>
            <Link href="/">
              <a className="font-semibold text-xl link">Contact me</a>
            </Link>
          </div>

          <div className="flex space-x-4 md:hidden">
            <SearchButton onclick={toogleSearch} />
            <MenuButton onclick={toogleMenu} />
          </div>
        </div>
        {/* Menu */}
        {isMenuOpen && (
          <div className="flex-none bg-primary p-6">
            <ul className="text-center flex flex-col space-y-2 text-xl">
              <li>
                <Link href="/">
                  <a className="link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link">Frontend</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link">Backend</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* Search */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 right-0 bg-primary p-6 z-30 flex flex-col space-y-4">
          <div className="flex justify-between items-center space-x-4">
            <input
              type="text"
              className="p-2 bg-transparent text-white border-b-2 border-white focus:outline-none placeholder-white flex-grow"
              placeholder="Type to search blog..."
            />
            <CloseButton onclick={toogleSearch} />
          </div>
          <p className="p__default">See posts by tags</p>
          <div className="flex space-x-2">
            <Tag text={`Python`} />
            <Tag text={`HTML`} />
          </div>
          <p className="p__default">See posts by categories</p>
          <div className="flex space-x-2">
            <Tag text={`Frontend`} />
            <Tag text={`Backend`} />
          </div>
        </div>
      )}
    </>
  );
}
