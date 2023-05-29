import React from 'react';
import { Layout } from "@/components/Layout";
import Image from 'next/image';
import Cover from '../assets/Bannière Secret-Aria.jpg'

const tarifs = () => {
  return (
    <Layout>
      <div className="min-h-screen">
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
        <div className="flex flex-col xl:ml-20">
          <div className="flex flex-col flex-wrap content-center mx-4 lg:mb-6 lg:mr-12 md:mb-8 2xl:text-center">
            <h1 className="my-10 text-xl text-center underline font-DancingS text-fuchsia-500 underline-offset-8 lg:text-3xl">Tarifs</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default tarifs;