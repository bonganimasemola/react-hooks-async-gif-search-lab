import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
// import { getDolphinGifs } from "./api";

function App() {
  const [dolphinGifs, setDolphinGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the Giphy API when the component mounts
    getDolphinGifs()
      .then((data) => {
        setDolphinGifs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Giphy data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />

      <div className="gif-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
        <div>
        {dolphinGifs.map((gif) => (
        <div key={gif.id} className="gif-item">
        <img src={gif.images.original.url} alt={gif.title} />
        </div>
        ))}
        </div>
        )}
      </div>
    </div>
  );
}

export default App;

