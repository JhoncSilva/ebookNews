import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b w-full border-white p-2 flex justify-around">
        <a href=""><Image src="/insta.png" height={30} width={30}/></a>
        <a href=""><Image src="/github.png" height={30} width={30}/></a>
    </header>
  );
}