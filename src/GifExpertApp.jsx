import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Naruto']);

  const onAddCategory = () => {
    const newCategories = ['Apex Legends', ...categories];
    setCategories(newCategories);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory />
      <button type="button" onClick={onAddCategory}>Agregar</button>

      {/* Listado de gifs */}
      <ol>
        {categories.map((category) => <li key={category}>{category}</li>)}
      </ol>
    </>
  );
};

export default GifExpertApp;
