import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one Punch"]);

  const onAddCategory = (newCategory = "") => {
    if (categories.includes(newCategory.toLowerCase())) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      <button onClick={onAddCategory}>Agregar</button>
     
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      
    </>
  );
};
