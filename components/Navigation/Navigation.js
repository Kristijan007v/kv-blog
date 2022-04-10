import React from "react";
import Search from "../Search/Search";
import MenuButton from "./Buttons/MenuButton";
import SearchButton from "./Buttons/SearchButton";
import CloseButton from "./Buttons/CloseButton";
import Tag from "./Tag/Tag";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const toogleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [isCategoriesOpen, setIsCategoriesOpen] = React.useState(false);

  const toogleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

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
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        <nav className="bg-primary text-white sticky top-0 z-20">
          <div className="flex justify-between items-center p-4">
            <Link href="/">
              <a className="font-semibold text-xl">KV.blog</a>
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
            <div className="flex-none md:hidden bg-primary p-6">
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
      </AnimatePresence>
    </>
  );
}
