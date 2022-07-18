import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Naruto']);

  const onAddCategory = (newCategory) => {
    const newCategories = [newCategory, ...categories];
    setCategories(newCategories);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* Se crea una nueva propiedad llamada onNewCategory la cual llama a la funcion
      onAddCategory cuando el componente llama a esta propiedad */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {/* Listado de gifs */}
      <ol>
        {categories.map((category) => <li key={category}>{category}</li>)}
      </ol>
    </>
  );
};

export default GifExpertApp;
