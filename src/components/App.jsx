import { useEffect, useState } from 'react';
import Notification from './Loader/Loader';
import Button from './Button/Button';
import ArticleList from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';
import fetchImages from './ApiServise/ApiServise';
import Modal from './Modal/Modal';
import AppStyled from './AppStyle';
import Notiflix from 'notiflix';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [showLargePic, setShowLargePic] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [picData, setPicData] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function (prevQuery) {
      try {
        setShowBtn(false);
        setIsLoading(true);
        setError(false);
        const { hits } = await fetchImages(query, page);
        if (!hits.length) {
          setArticles([]);
          setError(true);
          return;
        }
        const normalHits = hits.map(
          ({ id, largeImageURL, webformatURL, tags }) => ({
            id,
            largeImageURL,
            webformatURL,
            tags,
          })
        );
        setIsLoading(false);
        if (query === prevQuery) {
          console.log('query === prevQuery');
          setArticles(prevArticles => [...prevArticles, ...normalHits]);
          setShowBtn(true);
        } else {
          setArticles([...hits]);
          setShowBtn(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, query]);

  const setQuerys = value => {
    setQuery(value);
    setShowBtn(false);
    setPage(1);
  };

  const toggleLargeMode = () => {
    setShowLargePic(false)
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppStyled>
      <SearchBar onSubmit={setQuerys} />
      {error &&
        !isLoading &&
        Notiflix.Notify.failure('Нажаль по вашому запиту нічого незнайденно')}
      {isLoading && <Notification />}
      <ArticleList articles={articles} toggleLargeMode={toggleLargeMode} />
      {showBtn && (
        <Button
          onClick={e => {
            handleLoadMore();
          }}
        />
      )}
      {showLargePic && (
        <Modal articles={picData} toggle={toggleLargeMode} />
      )}
    </AppStyled>
  );
};

export default App;
