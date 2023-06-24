import React from "react";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import Cover from "../assets/Bannière Secret-Aria.jpg";

const tarifs = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="flex justify-center pt-24 mx-6 md:pt-32">
          <Image
            className="shadow-xl rounded-xl shadow-gray-800/50 hover:shadow-purple-900/40"
            src={Cover}
            alt="Couverture site"
            width={1292}
            height={652}
            sizes="(max-width: 800px) 800px, (max-width: 1200px) 1200px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 2400px) 2400px, 1200px"
            priority="true"
          />
        </div>
        <div className="flex flex-col mx-4 mb-8 xl:ml-14">
          <div className="flex flex-col flex-wrap content-center mx-4 lg:mb-6 lg:mr-12 md:mb-8 2xl:text-center">
            <h1 className="my-10 text-xl text-center underline font-DancingS text-fuchsia-500 underline-offset-8 lg:text-3xl">
              Tarifs
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:ml-2 ">
              <div className="mb-8 text-center border-4 shadow-xl md:mr-8 border-fuchsia-500 rounded-xl shadow-gray-800/50 hover:shadow-purple-900/50">
                <h2 className="mt-2 mb-2 text-xl text-center underline font-DancingS md:mb-2 md:mt-2 lg:text-3xl md:text-2xl">Services basiques</h2>
                <p className="text-xl text-center font-DancingS xl:text-2xl">20 euros/heure</p>
                <div className="mx-8 my-6 text-center md:text-justify lg:text-justify xl:text-justify">
                  <p className="text-lg lg:text-xl font-DancingS xl:text-2xl">- Rédaction de lettres, devis, factures...</p>
                  <p className="text-lg lg:text-xl font-DancingS xl:text-2xl">- Prise d'appels clients</p>
                  <p className="text-lg lg:text-xl font-DancingS xl:text-2xl">- Gestion de votre planning et de vos rendez-vous</p>
                  <p className="text-lg lg:text-xl font-DancingS xl:text-2xl">- Gestion planning clients (rendez-vous).</p>
                </div>
              </div>
              <div className="text-center border-4 shadow-xl border-fuchsia-500 rounded-xl md:ml-2 shadow-gray-800/50 hover:shadow-purple-900/50 md:mr-6">
                <h2 className="mt-2 mb-2 text-xl text-center underline font-DancingS md:mb-2 md:mt-2 lg:text-3xl md:text-2xl">Services avancés</h2>
                <p className="text-xl text-center font-DancingS xl:text-2xl">25 euros/heure</p>
                <div className="mx-8 my-6 text-center md:text-justify lg:text-justify xl:text-justify">
                  <p className="text-lg xl:text-2xl font-DancingS lg:text-xl">- Tous services administratifs confondus.</p>
                  <p className="text-lg xl:text-2xl font-DancingS lg:text-xl">
                    - Accueil téléphonique de vos clients (informations, prise
                    de rendez-vous, commandes, ...)
                  </p>
                  <p className="text-lg xl:text-2xl font-DancingS lg:text-xl">
                    - Gestion de votre emploi du temps (plannings, rendez-vous,
                    réservations d'hôtels, transports...)
                  </p>
                  <p className="text-lg xl:text-2xl font-DancingS lg:text-xl">
                    - Gestion planning rendez-vous clients, factures, devis,
                    prise d'appel, lettres aux clients <br /> (relances, ...)
                  </p>
                  <p className="text-lg xl:text-2xl font-DancingS lg:text-xl">
                    - Gestion de vos commandes auprès des fournisseurs si
                    besoin...
                  </p>
                  <p className="text-lg xl:text-2xl font-DancingS lg:text-xl">
                    - Demandez moi pour d'autres prestations, si besoin, nous
                    verrons ensemble si je peux les prendre en charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default tarifs;
