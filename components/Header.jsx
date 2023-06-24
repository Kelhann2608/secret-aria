import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const currentRoute = usePathname();
  const activeLink = "text-white";
  const normalLink = "";
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-10 w-full bg-fuchsia-300">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:flex">
              {/* Logo */}
              <Link href="/" className="pb-5">
                <h2 className="text-3xl font-bold list-none text-fuchsia-500 font-DancingS lg:text-4xl 2xl:text-5xl md:text-3xl md:hover:text-fuchsia-600">
                  Secret'Aria
                </h2>
              </Link>
              {/* Hamburger button for Mobile */}
              <div className="pb-3 md:hidden">
                <button
                  className="p-2 rounded-md outline-none text-fuchsia-500 focus:border-fuchsia-900 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/close.svg"
                      width={30}
                      height={30}
                      alt="Close"
                    />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="hamburger"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center h-screen md:h-auto md:flex ">
                <li className="py-3 pb-6 text-2xl text-center border-b-2 border-fuchsia-900 text-fuchsia-500 font-DancingS md:px-6 md:border-b-0 hover:bg-fuchsia-900 md:hover:text-fuchsia-600 md:hover:bg-transparent lg:text-4xl 2xl:text-4xl md:text-2xl">
                  <Link
                    href="/"
                    onClick={() => setNavbar(!navbar)}
                    className={currentRoute === "/" ? activeLink : normalLink}
                  >
                    Accueil
                  </Link>
                </li>
                <li className="px-6 py-3 pb-6 text-2xl text-center border-b-2 border-fuchsia-900 text-fuchsia-500 font-DancingS md:border-b-0 hover:bg-fuchsia-900 md:hover:text-fuchsia-600 md:hover:bg-transparent lg:text-4xl 2xl:text-4xl md:text-2xl">
                  <Link
                    href="/about"
                    onClick={() => setNavbar(!navbar)}
                    className={
                      currentRoute === "/about" ? activeLink : normalLink
                    }
                  >
                    A propos
                  </Link>
                </li>
                <li className="px-6 py-3 pb-6 text-2xl text-center border-b-2 border-fuchsia-900 text-fuchsia-500 font-DancingS md:border-b-0 hover:bg-fuchsia-900 md:hover:text-fuchsia-600 md:hover:bg-transparent lg:text-4xl 2xl:text-4xl md:text-2xl">
                  <Link
                    href="/services"
                    onClick={() => setNavbar(!navbar)}
                    className={
                      currentRoute === "/services" ? activeLink : normalLink
                    }
                  >
                    Services
                  </Link>
                </li>
                <li className="px-6 py-3 pb-6 text-2xl text-center border-b-2 border-fuchsia-900 text-fuchsia-500 font-DancingS md:border-b-0 hover:bg-fuchsia-900 md:hover:text-fuchsia-600 md:hover:bg-transparent lg:text-4xl 2xl:text-4xl md:text-2xl">
                  <Link
                    href="/tarifs"
                    onClick={() => setNavbar(!navbar)}
                    className={
                      currentRoute === "/tarifs" ? activeLink : normalLink
                    }
                  >
                    Tarifs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
