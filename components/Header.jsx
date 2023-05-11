import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
      <nav className="flex flex-wrap items-center justify-around w-full h-16 px-4 py-4 bg-fuchsia-300">
        <li className="text-4xl font-semibold list-none text-fuchsia-500 font-DancingS">
          <Link href="/">Secret'Aria</Link>
        </li>
        <li className="text-2xl font-normal list-none text-fuchsia-500">
          <Link href="/">Accueil</Link>
        </li>
        <li className="text-2xl font-normal list-none text-fuchsia-500">
          <Link href="/about">A propos</Link>
        </li>
        <li className="text-2xl font-normal list-none text-fuchsia-500">
          <Link href="/services">Services</Link>
        </li>
        <li className="text-2xl font-normal list-none text-fuchsia-500">
          <Link href="/tarifs">Tarifs</Link>
        </li>
      </nav>
    
  );
};
