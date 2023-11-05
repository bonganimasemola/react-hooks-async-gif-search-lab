import React from 'react';


export default function GifList({ gifs }) {
  return (
    <div>
      <h2>Dolphin Gifs</h2>
      <ul>
        {gifs.map((gif) => (
        <li key={gif.id}>
        <img src={gif.images.fixed_height.url} alt={gif.title} />
        </li>
        ))}
      </ul>
    </div>
  );
}




