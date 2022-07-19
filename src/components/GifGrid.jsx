import { useEffect, useState } from 'react';

import Giftem from './Giftem';
import getGifs from '../helpers/getGifs';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => { getImages(); }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {
          images.map((image) => (
            <Giftem
              key={image.id}
              title={image.title}
              url={image.url}
            />
          ))
        }
      </div>

    </>
  );
};

export default GifGrid;
