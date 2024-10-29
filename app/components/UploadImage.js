"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setError("");
    } else {
      setError("Please upload a valid image file.");
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("No file selected.");
      console.error("No file selected");
      return;
    }

    try {
      // Convert the image file to base64
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = async () => {
        const base64Image = reader.result.split(",")[1]; // Remove data:image/jpeg;base64, part

        // Send the image data to the backend API
        const response = await fetch("/api/recognize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ imageUrl: base64Image }),
        });

        const data = await response.json();
        console.log("Detected Ingredients:", data);

        if (data && data.data) {
          // Store data in localStorage
          localStorage.setItem("detectedItems", JSON.stringify(data.data));
          router.push("/results"); // Navigate to results page
        } else {
          console.error("No data received from API");
          setError("No data found. Please try again.");
        }
      };
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Error detecting ingredients. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 mb-4 border rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        {preview && (
          <img
            src={preview}
            alt="Image Preview"
            className="w-full h-auto mt-4 rounded-lg"
          />
        )}
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Detect Ingredients
        </button>
      </form>
    </div>
  );
};

export default UploadImage;
