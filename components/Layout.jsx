import React from "react";
import { Header } from "@/components/Header";
import Head from "next/head";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Secret'Aria</title>
        <meta
          name="description"
          content="Secrétariat à domicile, toutes tâches administratives"
        />
      </Head>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
