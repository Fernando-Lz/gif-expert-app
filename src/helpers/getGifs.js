const API_KEY = 'uOhJSrv0EGG6gVdyP2arNuSU6fJYwBA7';

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((img) => (
    {
      id: img.id,
      title: img.title,
      url: img.images.fixed_height.url,
    }
  ));

  return gifs;
};

export default getGifs;
