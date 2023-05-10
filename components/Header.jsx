import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
      <nav className="flex flex-row justify-around w-full h-16 bg-fuchsia-300">
        <li className="py-3 ml-8 text-2xl font-semibold list-none text-fuchsia-500">
          <Link href="/">Secret'Aria</Link>
        </li>
        <li className="py-3 text-2xl font-normal list-none text-fuchsia-500">
          <Link href="/">Accueil</Link>
        </li>
        <li className="py-3 text-2xl font-normal list-none text-fuchsia-500 ">
          <Link href="/about">A propos</Link>
        </li>
        <li className="py-3 text-2xl font-normal list-none text-fuchsia-500 ">
          <Link href="/services">Services</Link>
        </li>
        <li className="py-3 mr-8 text-2xl font-normal list-none text-fuchsia-500">
          <Link href="/tarifs">Tarifs</Link>
        </li>
      </nav>
    
  );
};
