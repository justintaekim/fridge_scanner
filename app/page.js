import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Fridge Ingredient Detection</h1>
      <p className="mb-6">
        Upload a picture of your fridge, and we’ll detect the ingredients!
      </p>
      <Link
        href="/upload"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Started
      </Link>
    </main>
  );
}
