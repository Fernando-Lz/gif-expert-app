import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    const newCategories = [newCategory, ...categories];
    setCategories(newCategories);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Se crea una nueva propiedad llamada onNewCategory la cual llama a la funcion
      onAddCategory cuando el componente llama a esta propiedad */}
      {/* Este componente solo emite el nuevo valor */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {
        categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))
      }

    </>
  );
};

export default GifExpertApp;
