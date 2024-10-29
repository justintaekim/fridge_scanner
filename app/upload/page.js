import UploadImage from "../components/UploadImage";

export default function UploadPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Upload an Image to Detect Ingredients
      </h1>
      <p className="mb-4 text-gray-700">
        Choose a picture of your fridge, and our AI will detect the ingredients
        for you.
      </p>
      <UploadImage />
    </div>
  );
}
