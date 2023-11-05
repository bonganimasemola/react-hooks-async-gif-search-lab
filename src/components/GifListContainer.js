import React, { Component } from 'react';
import { getDolphinGifs } from './api'; 

class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [], 
    };
  }

  async componentDidMount() {
    try {
      const gifData = await getDolphinGifs();
      const firstThreeGifs = gifData.slice(0, 3); 

      this.setState({ gifs: firstThreeGifs }); 
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}


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
