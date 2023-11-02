
const API_KEY = '868iD7A2j8sc91qbovB3oszzwfPp6YYj'; 

export async function getDolphinGifs() {
  const searchTerm = 'dolphin';
  const endpoint = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&rating=g`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from Giphy API: ${response.status}`);
    }

    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error(error);
    return [];
  }
}
