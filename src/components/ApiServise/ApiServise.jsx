import axios from 'axios';

const KEY = '29683186-89d5b8f18ccbe7d45b5194d45';
// https://pixabay.com/api/?key=29683186-89d5b8f18ccbe7d45b5194d45&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (query, Page) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${Page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};

export default fetchImages;
