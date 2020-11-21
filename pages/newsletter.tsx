import { useState } from 'react'
import Head from "next/head";
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Newsletter() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  function signUpToNewsletter(event) {
    event.preventDefault();

    axios.post('/api/subscribe', { 
      email, nome 
    })
    .then( 
      (response) => { alert("Usuário registrado com sucesso!"), console.log(response), router.replace('/')},
      (error) => { alert("Tivemos algum problema com o cadastro, por favor, tente novamente!"), console.log(error), router.replace('/newsletter')},
    );
  }

  return (
    <>
      <Head>
        <title>Assinar</title>
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
      </Head>

      <main className="py-28 w-full min-h-screen bg-blue-50">
        <div className="max-w-sm mgauto p-4 md:max-w-lg">
          <h1 className="text-center font-bold text-2xl mb-4">Inscreva-se!</h1>

          <form className="flex flex-col borderform p-4 text-base" action="" method="get" onSubmit={signUpToNewsletter}>

            <input 
              className="mb-4 p-2 borderform focus:font-bold" 
              type="text" 
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <input 
              className="mb-4 p-2 borderform focus:font-bold" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@dominio.com" 
              required
            />
            <button className="self-end p-2 borderform bg-black text-white transition duration-300 hover:bg-gray-100 hover:text-black">Enviar</button>
          </form>
        </div>
      </main>
    </>
  );
}