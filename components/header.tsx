import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b w-full border-white p-2 flex justify-around">
        <a target="_blank" href="https://www.instagram.com/davilima_designer/"><Image src="/insta.png" height={30} width={30}/></a>
        <a target="_blank" href="https://github.com/JhoncSilva"><Image src="/github.png" height={30} width={30}/></a>
    </header>
  );
}