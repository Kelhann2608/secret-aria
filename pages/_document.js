
import { Html, Head, Main, NextScript } from 'next/document'

 export const metadata = {
  title: "Secret'Aria",
  description: "Site de secretariat à domicile",
};

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="relative flex flex-col min-h-screen">        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
