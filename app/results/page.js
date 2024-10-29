"use client";
import { useEffect, useState } from "react";

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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Detected Ingredients</h1>
      {items.length > 0 ? (
        <ul className="list-disc pl-6">
          {items.map((item, index) => (
            <li key={index}>
              {item.Name}: {Math.round(item.Confidence)}%
            </li>
          ))}
        </ul>
      ) : (
        <p>No ingredients detected.</p>
      )}
      <button
        onClick={() => (window.location.href = "/upload")}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload Another Image
      </button>
    </main>
  );
}
