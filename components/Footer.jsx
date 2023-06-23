import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full p-3 mt-auto text-xl text-center bg-fuchsia-300">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="pb-3">
          <p className="text-lg font-semibold text-fuchsia font-DancingS md:text-2xl">
            <span className="text-xl underline ">Disponibilités:</span> Lundi,
            Mardi,
            <br />
            Jeudi de 10h à 12h30 et <br /> de 14h à 18h
            <br />
            Fermé le Samedi, Dimanche et jours fériés.
          </p>
        </div>
        <div className="pb-3">
          <p className="text-xl md:text-2xl font-DancingS">
            {" "}
            <span className=" md:text-2xl">©️ {currentYear} </span>
            <span className="font-semibold text-fuchsia-500">Secret'Aria </span>
            <br />- Tous droits réservés
          </p>
        </div>

        <div className="pb-3">
          <Link
            href="/mentionslegales"
            className="items-center pb-3 font-semibold underline font-DancingS md:text-2xl"
          >
            Mentions légales et politique de confidentialité
          </Link>
          <p className="pb-3 font-DancingS md:text-xl">
            <span className="font-medium underline">Adresse:</span> 3 Rue de
            Portet,
            <br />
            Appt 202
            <br />
            64000 Pau
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
