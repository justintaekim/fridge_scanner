import UploadImage from "../components/UploadImage";
import Image from "next/image";

export default function UploadPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <Image
          src="/fridge-ai.png"
          alt="Fridge Ingredient Detection Logo"
          width={700}
          height={500}
          className="mx-auto"
        />
        <h1 className="text-2xl font-bold mb-6">
          Upload an Image to Detect Ingredients
        </h1>
        <p className="mb-4 text-gray-700">
          Choose a picture of your fridge, and our AI will detect the
          ingredients for you.
        </p>
        <div className="my-10">
          <UploadImage />
        </div>
      </div>
    </div>
  );
}
