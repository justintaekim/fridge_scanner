"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Results() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Retrieve items from localStorage
    const storedItems = localStorage.getItem("detectedItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center">
        <Image
          src="/fridge-ai.png" // Replace with your image path
          alt="Fridge Ingredient Detection Logo"
          width={700} // Adjust width as needed
          height={500} // Adjust height as needed
          className="mx-auto"
        />
        <h1 className="text-2xl font-bold mb-4">Detected Ingredients</h1>
        {items.length > 0 ? (
          <ul className="list-none px-6 pb-6">
            {items.map((item, index) => (
              <li key={index}>{item.Name}</li>
            ))}
          </ul>
        ) : (
          <p>No ingredients detected.</p>
        )}
        <button
          onClick={() => (window.location.href = "/upload")}
          className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload Another Image
        </button>
      </div>
    </main>
  );
}
