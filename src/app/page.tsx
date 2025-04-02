import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen gap-4 row-start-2 items-center justify-center">
      <Image
        src="/insaf.jpg"
        alt="Insaf"
        width={256}
        height={256}
        className="rounded-2xl"
      />
      <h1 className="flex gap-3 items-center text-6xl">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <span>Developer</span>
      </h1>
    </main>
  );
}
