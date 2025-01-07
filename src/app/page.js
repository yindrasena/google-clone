import Image from "next/image";
import SearchBar from '../components/searchbar'


export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Image src='/download1.png' alt='Google Logo' width={300} height={300}
      ></Image>
      <SearchBar/>
    </div>
  );
}
