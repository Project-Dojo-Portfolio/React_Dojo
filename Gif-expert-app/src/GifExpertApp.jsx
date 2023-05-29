import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory = "") => {
    if (categories.includes(newCategory.toLowerCase())) return;
    setCategories([newCategory,...categories]);
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
