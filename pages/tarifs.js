import React from "react";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import Cover from "../assets/Bannière Secret-Aria.jpg";

const tarifs = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="flex justify-center pt-8 mx-6">
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
        <div className="flex flex-col mb-8 xl:ml-20 mx-7">
          <div className="flex flex-col flex-wrap content-center mx-4 lg:mb-6 lg:mr-12 md:mb-8 2xl:text-center">
            <h1 className="my-10 text-xl text-center underline font-DancingS text-fuchsia-500 underline-offset-8 lg:text-3xl">
              Tarifs
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:ml-5 ">
              <div className="mb-8 text-center border-4 shadow-xl md:mr-8 border-fuchsia-500 rounded-xl shadow-gray-800/50 hover:shadow-purple-900/50">
                <h2 className="mt-2 mb-2 text-xl text-center underline font-DancingS md:mb-2 md:mt-2">Services basiques</h2>
                <p className="text-center ">20 euros/heure</p>
                <div className="mx-8 my-6 md:text-justify">
                  <p>- Rédaction de lettres, devis, factures... ;</p>
                  <p>- Prise d'appels clients ;</p>
                  <p>- Gestion de votre planning et de vos rendez-vous ;</p>
                  <p>- Gestion planning clients (rendez-vous).</p>
                </div>
              </div>
              <div className="text-center border-4 shadow-xl border-fuchsia-500 rounded-xl md:ml-2 shadow-gray-800/50 hover:shadow-purple-900/50">
                <h2 className="mt-2 mb-2 text-xl text-center underline font-DancingS md:mb-2 md:mt-2">Services avancés</h2>
                <p className="text-center ">25 euros/heure</p>
                <div className="mx-8 my-6 md:text-justify">
                  <p>-Tous services administratifs confondus.</p>
                  <p className="">
                    - Accueil téléphonique de vos clients (informations, prise
                    de rendez-vous, commandes, ...)
                  </p>
                  <p>
                    - Gestion de votre emploi du temps (plannings, rendez-vous,
                    réservations d'hôtels, transports...) ;
                  </p>
                  <p>
                    - Gestion planning rendez-vous clients, factures, devis,
                    prise d'appel, lettres aux clients (relances, ...) ;
                  </p>
                  <p>
                    - Gestion de vos commandes auprès des fournisseurs si
                    besoin...
                  </p>
                  <p>
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
