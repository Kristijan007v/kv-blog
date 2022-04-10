import Head from "next/head";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import { motion } from "framer-motion";

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

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navigation />
      </ErrorBoundary>

      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        onExitComplete={() => window.scrollTo(0, 0)}
        exit="exit"
        transition={{ type: "linear" }} // Set the transition to linear
        className="w-full md:w-6/7 m-auto lg:w-5/6 xl:w-4/5"
      >
        {content}
      </motion.main>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Footer />
      </ErrorBoundary>

      {/* Popups */}
    </div>
  );
}
