import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { React, useState, useEffect } from "react";
import SkipContentLink from "../SkipContentLink/SkipContentLink";
import SkipToMain from "../SkipToMain/SkipToMain";
import CloseButton from "./Buttons/CloseButton";
import MenuButton from "./Buttons/MenuButton";
import SearchButton from "./Buttons/SearchButton";
import Tag from "./Tag/Tag";
import { useHotkeys } from "react-hotkeys-hook";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toogleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useHotkeys("ctrl+k", () => setIsSearchOpen(true));

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toogleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  /* Hide navigation on scroll */

  //Animations
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };
  return (
    <>
      <SkipContentLink />
      <nav className="bg-primary text-white sticky top-0 z-10">
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            <a className="font-semibold text-xl">DevClub</a>
          </Link>
          <div className="hidden space-x-6 md:flex items-center">
            <SearchButton onclick={toogleSearch} />
            <Link href="/">
              <a className="font-semibold text-xl link">Home</a>
            </Link>
            <button
              className="font-semibold text-xl link"
              onClick={toogleCategories}
            >
              Categories
            </button>
            <Link href="/">
              <a className="font-semibold text-xl link">Contact me</a>
            </Link>
          </div>

          <div className="flex space-x-4 md:hidden">
            <SearchButton onclick={toogleSearch} />
            <MenuButton onclick={toogleMenu} />
          </div>
        </div>
        {/* Categories menu - DESKTOP ONLY */}
        {isCategoriesOpen && (
          <div className="hidden md:block bg-special p-4">
            <ul className="text-center flex space-x-4 text-xl">
              <li>
                <Link href="/">
                  <a className="link">Web development</a>
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
        {/* Menu  - MOBILE ONLY */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-none md:hidden bg-primary p-6"
          >
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
          </motion.div>
        )}
      </nav>

      {/* Search */}
      {isSearchOpen && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-0 left-0 right-0 bg-primary p-6 z-30 flex flex-col space-y-4"
        >
          <div className="flex justify-between items-center space-x-4 w-full lg:w-4/5 m-auto">
            <input
              type="text"
              className="p-2 bg-transparent text-white border-b-2 border-white focus:outline-none placeholder-white flex-grow"
              placeholder="Type to search blog..."
            />
            <CloseButton onclick={toogleSearch} />
          </div>
          <div className=" w-full lg:w-4/5 m-auto flex flex-col space-y-4">
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
        </motion.div>
      )}
      <SkipToMain />
    </>
  );
}
