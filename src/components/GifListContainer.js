import React, { Component } from 'react';
import GifSearch from './GifSearch';
import { getGifs } from './api'; // Updated import for getGifs

class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
  }

  async componentDidMount() {
    this.performSearch();
  }

  handleSearch = async (searchQuery) => {
    this.performSearch(searchQuery);
  };

  performSearch = async (searchQuery = 'dolphin') => {
    try {
      const gifData = await getGifs(searchQuery); 
      const firstThreeGifs = gifData.slice(0, 3);
      this.setState({ gifs: firstThreeGifs });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
   <div>
    <GifSearch onSearch={this.handleSearch} searchTerm="dolphin" />
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

