import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
      <nav className="flex flex-wrap items-center justify-around w-full h-16 px-4 py-4 bg-fuchsia-300">
        <li className="text-lg font-bold list-none text-fuchsia-500 font-DancingS lg:text-4xl">
          <Link href="/">Secret'Aria</Link>
        </li>
        <li className="text-sm font-normal list-none text-fuchsia-500 lg:text-3xl font-DancingS ">
          <Link href="/">Accueil</Link>
        </li>
        <li className="text-sm font-normal list-none text-fuchsia-500 lg:text-3xl font-DancingS">
          <Link href="/about">A propos</Link>
        </li>
        <li className="text-sm font-normal list-none text-fuchsia-500 lg:text-3xl font-DancingS">
          <Link href="/services">Services</Link>
        </li>
        <li className="text-sm font-normal list-none text-fuchsia-500 lg:text-3xl font-DancingS">
          <Link href="/tarifs">Tarifs</Link>
        </li>
      </nav>
    
  );
};
