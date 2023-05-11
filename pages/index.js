import { Layout } from './../components/Layout';
import Image from 'next/image';
import Cover from '../assets/Bannière Secret-Aria.jpg'





export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center pt-8 mx-6">
        <Image
          className='shadow-xl rounded-xl shadow-gray-800/50 hover:shadow-purple-900/40'
          src={Cover}
          alt="Couverture site"
          width={1292}
          height={652}
          sizes="(max-width: 800px) 800px, (max-width: 1200px) 1200px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 2400px) 2400px, 1200px"
        />
      </div>
      <div className='flex flex-row justify-center pt-12'>
        <p className="text-3xl text-justify text-fuchsia-500 font-DancingS">Bienvenue sur mon site.Pour toutes demandes, merci de me contacter à l’adresse mail ci-dessus.</p>
        </div>
      

    </Layout>
  )
}
