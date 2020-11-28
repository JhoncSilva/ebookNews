const books = [
  { src: "/images/placeholder.png", alt: "placeholder" },
  { src: "/images/placeholder2.png", alt:"placeholder" },
  { src: "/images/placeholder3.png", alt:"placeholder" }
]

export default function Books() {
  return (
    <section className="flex flex-col w-full md:grid md:grid-cols-2 lg:grid-cols-3">
      {books.map(({ src, alt }) => (
        <img key={`${src}${alt}`} src={src} alt={alt} className="w-52 my-7 mx-auto cursor-pointer transition duration-150 hover:opacity-50"/>
      ))}
    </section>
  );
}