import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one Punch"]);

  const onAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)}/>
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
