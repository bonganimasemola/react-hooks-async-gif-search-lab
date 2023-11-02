import React, { Component } from 'react';
import { getDolphinGifs } from './api'; // Import the getDolphinGifs function from your API file

class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [], // Initialize the state to store the gifs
    };
  }

  async componentDidMount() {
    try {
      const gifData = await getDolphinGifs(); // Fetch data from the Giphy API
      const firstThreeGifs = gifData.slice(0, 3); // Get the first 3 gifs from the response

      this.setState({ gifs: firstThreeGifs }); // Update the state with the gifs
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        {/* Pass the gifs data as a prop to the GifList component */}
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

// Create a GifList component that will display the gifs
function GifList({ gifs }) {
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

export default GifListContainer;
