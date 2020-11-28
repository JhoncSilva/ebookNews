import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/header';
import Books from "../components/books";
import Footer from '../components/footer';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Ebooks</title>
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon"/>
      </Head>

      <Header />

      <main className="p-10 flex flex-col max-w-full max-h-full">
        <h1 className="text-4xl text-center mb-8 font-sans font-extrabold">
          Estes ebooks são <p className="bg-gradient-to-r from-green-200 to-blue-500 w-min p-1 rounded mgauto">ideais</p> para iniciantes em programação
        </h1>
        <Books />

        <button className="my-10 mx-auto p-4 text-xl font-bold rounded text-black bg-gradient-to-r from-green-200 to-blue-500">
          Quero aproveitar essa oportunidade!
        </button>
      </main>

      <Footer />
    </>
  );
}