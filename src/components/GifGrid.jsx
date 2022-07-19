import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => { getGifs(category); }, []);

  return (
    <>
      <h3>{category}</h3>

      <ol>
        <li>titulo</li>
        <li>titulo</li>
        <li>titulo</li>
        <li>titulo</li>
      </ol>

    </>
  );
};

export default GifGrid;
