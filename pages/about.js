import { Layout } from "@/components/Layout";
import React from "react";
import Image from 'next/image';
import Cover from '../assets/Bannière Secret-Aria.jpg'
import Jess from '../assets/jess.jpg'

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen ">
        <div className="flex justify-center pt-8 mx-6">
          <Image
            className='shadow-xl rounded-xl shadow-gray-800/50 hover:shadow-purple-900/40'
            src={Cover}
            alt="Couverture site"
            width={1292}
            height={652}
            sizes="(max-width: 800px) 800px, (max-width: 1200px) 1200px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 2400px) 2400px, 1200px"
            priority="true"
          />
        </div>
        <div className="flex flex-col lg:flex-row 2xl:ml-56 xl:ml-34">
          <div className="flex justify-center lg:my-10">
            <Image
              className="mt-10 shadow-xl top-100 md:w-96 md:h-96 lg:ml-24 rounded-xl shadow-purple-800/50 xl:ml-24"
              src={Jess}
              alt="Image d'une personne"
              width={240}
              height={252}
              sizes="(max-width: 640px) 390px, (max-width: 800px) 390px,(max-width: 1200px) 390px," />
          </div>
          <div className="flex flex-col flex-wrap content-center mx-4 lg:w-2/4 lg:mb-6 md:mx-4 lg:mr-6 md:mb-8">
            <h1 className="mt-10 mb-3 text-xl text-center underline font-DancingS text-fuchsia-500 underline-offset-8 lg:text-3xl">A propos</h1>
            <p className="mx-3 mb-5 text-base font-semibold text-justify font-DancingS lg:text-2xl lg:text-justify lg:mx-5 md:text-2xl md:mx-6 xl:text-justify xl:mx-10 md:mb-8">Secret'Aria est le spécialiste de la gestion administrative.
              Je propose une large gamme de services : Rédaction, mise en page, présentations, saisie et vérification des données, gestion de documents, factures, devis, prise de rendez-vous, accueil téléphonique, gestion de planning et bien plus encore pour votre
              entreprise.
              Toujours prête à vous offrir une assistance spécialisée et à résoudre les problèmes. Faites moi confiance pour vos besoins administratifs et financiers !
              Dynamique, sérieuse, organisée, je serai à l'écoute de vos besoins.
              Je travaille seule depuis mon domicile.</p>
          </div>
        </div>

      </div>
    </Layout>
  );
}
