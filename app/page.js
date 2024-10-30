import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center">
        <Image
          src="/fridge-ai.png"
          alt="Fridge Ingredient Detection Logo"
          width={700}
          height={500}
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold mb-4">Fridge Ingredient Detection</h1>
        <p className="mb-6">
          Upload a picture of your fridge, and we’ll detect the ingredients for
          you!
        </p>
        <Link
          href="/upload"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
