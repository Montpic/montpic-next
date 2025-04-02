import Image from "next/image";

export default function Home() {
  const APP_NAME = "Montpic";
  const APP_SLOGAN = "Découvre les activités de toutes tes montagnes !";

  return (
    <>
      <div className="flex flex-col items-center justify-start text-center min-h-screen p-2 pt-10 gap-4">
        <h1 className="text-6xl lg:text-9xl font-bold">{ APP_NAME }</h1>
        <p className="text-2xl">{ APP_SLOGAN }</p>
      </div>
      <Image
        src="/mountain.webp"
        className="fixed w-screen -z-50 align-middle -bottom-1/12 sm:-bottom-1/5 md:-bottom-1/4 lg:-bottom-1/3 xl:-bottom-2/5 blur-sm brightness-75 dark:brightness-100"
        alt={"Image of a mountain blurred in the background"}
        width={1301} height={980} />
    </>
  );
}
