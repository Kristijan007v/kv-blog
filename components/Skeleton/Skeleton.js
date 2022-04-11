import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import UpButton from "../Navigation/Buttons/UpButton";
import { useEffect } from "react";

export default function Skeleton({ title, content }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ErrorBoundary moduleName={"Navigation"}>
        <Navigation />
      </ErrorBoundary>

      <ErrorBoundary moduleName={"Main content"}>
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit"
            transition={{ type: "linear" }} // Set the transition to linear
            className="w-full md:w-6/7 m-auto lg:w-5/6 xl:w-4/5"
          >
            {content}
          </motion.main>
        </AnimatePresence>
      </ErrorBoundary>

      <ErrorBoundary moduleName={"Footer"}>
        <Footer />
      </ErrorBoundary>

      {/* Arrow up */}
      <ErrorBoundary moduleName={"Arrow up"}>
        <UpButton />
      </ErrorBoundary>

      {/* Popups */}
    </div>
  );
}
