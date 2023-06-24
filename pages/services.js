import { Layout } from "@/components/Layout";
import React from "react";
import Image from 'next/image';
import Cover from '../assets/Bannière Secret-Aria.jpg'
import Bureau from '../assets/woman-work.jpg'

export default function Services() {
  return (
    <Layout>
      <div className="min-h-screen ">
        <div className="flex justify-center pt-24 mx-6 md:pt-32">
          <Image
            className='shadow-xl rounded-xl shadow-gray-800/50 hover:shadow-purple-900/40'
            src={Cover}
            alt="Couverture site"
            width={1292}
            height={652}
            sizes="(max-width: 768) 768px,(max-width: 800px) 800px, (max-width: 1200px) 1200px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 2400px) 2400px, 1200px"
            priority="true"
          />
        </div>
        <div className="flex flex-col lg:flex-row 2xl:ml-56 xl:ml-34 ">
          <div className="flex justify-center lg:my-10">
            <Image
              className="mt-10 shadow-xl top-100 md:w-96 md:h-96 lg:ml-24 rounded-xl shadow-purple-800/50 xl:ml-24"
              src={Bureau}
              alt="Image d'une personne"
              width={240}
              height={252}
              sizes="(max-width: 640px) 390px, (max-width: 800px) 390px,(max-width: 1200px) 390px," />
          </div>
          <div className="flex flex-col flex-wrap content-center mx-4 lg:w-2/4 lg:mb-6 md:mx-4 lg:mr-6">
            <h1 className="mt-10 mb-3 text-xl text-center underline font-DancingS text-fuchsia-500 underline-offset-8 lg:text-3xl">Tâches Administratives</h1>
            <p className="mx-3 mb-5 text-base font-semibold text-center font-DancingS lg:text-2xl md:text-justify lg:mx-5 md:text-2xl md:mx-4 xl:text-justify xl:mx-10 md:mb-8">Mon entreprise est là pour vous aider dans vos tâches administratives diverses allant des réponses téléphoniques à vos clients (infos, rendez-vous, commandes, ...), frappe de courriers divers, établissement de devis, factures, à la gestion de vos plannings ainsi que celui de vos clients, gestion de vos commandes fournisseurs... et bien d'autres services.

              Ceux-ci sont référencés dans les tarifs, mais si besoin d'autres services, nous pourrons en discuter ensemble et trouver des solutions adaptées à vos besoins.

              Je me tiens à votre disposition pour tous renseignements.</p>
          </div>
        </div>

      </div>
    </Layout>
  )
}