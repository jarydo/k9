import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="mx-16 my-6">
      <Header />
      <Image
        src="/hero.png"
        alt="hero"
        width={1000}
        height={1000}
        className="w-full h-auto"
        sizes="100vw"
        priority
      />
      <Image
        src="/body1.png"
        alt="body1"
        width={1000}
        height={1000}
        className="w-full h-auto"
        sizes="100vw"
      />
      <Image
        src="/body2.png"
        alt="body2"
        width={1000}
        height={1000}
        className="w-full h-auto"
        sizes="100vw"
      />
      <Image
        src="/body3.png"
        alt="body3"
        width={1000}
        height={1000}
        className="w-full h-auto"
        sizes="100vw"
      />
    </div>
  );
}
