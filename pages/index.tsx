import Head from 'next/head';
import Link from 'next/link';

import Books from "../components/books";
import Footer from '../components/footer';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Ebooks</title>
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon"/>
      </Head>

      <main className="p-10 max-w-full max-h-full bg-gray-50">
        <h1 className="text-4xl text-center mb-8 font-sans font-extrabold">
          Confira nossos Ebooks!
        </h1>
        <Books />

        <h3 className="text-center mt-4">
          <Link href="/newsletter"><a className="font-bold">Assine</a></Link>
          {' '}a nossa newsletter <br /> para saber quando novos ebooks forem lançados!
        </h3>
      </main>

      <Footer />
    </>
  );
}