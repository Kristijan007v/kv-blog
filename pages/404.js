import Footer from "../components/Footer/Footer";
import DefaultButton from "../components/Navigation/Buttons/DefaultButton";
import Navigation from "../components/Navigation/Navigation";
import Skeleton from "../components/Skeleton/Skeleton";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Navigation />
      <div className="text-center mt-12 mb-16 m-auto flex flex-col space-y-6 w-5/6 md:w-3/4 lg:w-2/4 xl:w-2/5">
        <p className="text-graySpecial font-extrabold text-8xl">404</p>
        <h1 className="heading__center">You have found a secret place.</h1>
        <p className="p__post">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </p>
        <Link href="/">
          <a className="btn">Go back</a>
        </Link>
      </div>

      <Footer />
    </>
  );
}
