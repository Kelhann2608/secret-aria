import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <nav className="flex flex-wrap items-center justify-around w-full h-20 px-5 py-4 bg-fuchsia-300 2xl:py-2">
      <li className="text-lg font-bold list-none text-fuchsia-500 font-DancingS lg:text-4xl 2xl:text-5xl md:text-3xl ">
        <Link href="/">Secret'Aria</Link>
      </li>
      <li className="text-base font-normal list-none text-fuchsia-500 lg:text-3xl font-DancingS md:text-2xl 2xl:text-4xl ">
        <Link href="/">Accueil</Link>
      </li>
      <li className="text-base font-normal list-none text-fuchsia-500 lg:text-3xl font-DancingS md:text-2xl 2xl:text-4xl">
        <Link href="/about">A propos</Link>
      </li>
      <li className="text-base font-normal list-none text-fuchsia-500 lg:text-3xl font-DancingS md:text-2xl 2xl:text-4xl">
        <Link href="/services">Services</Link>
      </li>
      <li className="text-base font-normal list-none text-fuchsia-500 lg:text-3xl font-DancingS md:text-2xl 2xl:text-4xl">
        <Link href="/tarifs">Tarifs</Link>
      </li>
    </nav>
  );
};
