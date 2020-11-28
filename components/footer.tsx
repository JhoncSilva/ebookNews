// import Image from 'next/image'

import Link from "next/link";

// const creators = [
//   { creator: "Davi Lima", src: "/insta.png", href: "https://www.instagram.com/davilima_designer/", alt: "Logo Insta"},
//   { creator: "Jhonatan Costa", src: "/github.png", href:"https://github.com/JhoncSilva", alt: "Logo Github" }
// ]

// export default function Footer() {
//   return (
//     <footer className="flex flex-col">
//       <h5 className="text-center mt-8 mb-4">Criado Por</h5>
//       <section className="flex justify-evenly md:justify-center">
//         {creators.map(({ creator, src, href, alt }) => (
//           <div className="flex flex-col md:px-20">
//             <h6>{creator}</h6>
//             <a target="_blank" href={href} className="self-center">
//               <Image
//                 key={`${src}${alt}`} 
//                 src={src}
//                 alt={alt}
//                 width={20}
//                 height={20}
//               />
//             </a>
//           </div>
//         ))}
//       </section>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="flex">
      <section className="w-2/4 text-sm p-2 md:text-center md:w-full">
      <h3>
          Não encontrou o livro que queria? {' '}
          <Link href="/newsletter"><a className="font-bold text-green-500 hover:underline">Assine</a></Link>
          {' '}a nossa newsletter para saber quando novos ebooks forem lançados!
      </h3>
      </section>
      
    </footer>
  );
}