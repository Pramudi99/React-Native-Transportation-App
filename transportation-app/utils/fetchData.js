import axios from 'axios';

export default async function fetchData() {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image,
  }));
}
