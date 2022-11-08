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
  const [picData, setPicData] = useState({});
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [error, setError] = useState(false);

  
  useEffect(() => {
    (
      async function () {
        try {
        const { hits, totalHits } = await fetchImages(query, page);
        const normalHits = hits.map(
          ({ id, largeImageURL, webformatURL, tags }) => ({
            id,
            largeImageURL,
            webformatURL,
            tags,
          })
        );
        setTotalHits(totalHits)
        setArticles([...normalHits])
        setShowBtn(page <Math.floor(totalHits / 12))
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }}
    )()
    
  }, [page, query])
 
  // async componentDidUpdate(_, prevState) {
  //   const { query, page } = this.state;
  //   const { query: prevQuery, page: prevPage } = prevState;

  //   if (query !== prevQuery || page !== prevPage) {
  //     try {
  //       this.setState({
  //         isLoading: true,
  //       });
  //       const { hits, totalHits } = await fetchImages(query, page);
  //       if (!hits.length) {
  //         this.setState({
  //           isLoading: false,
  //           articles: [],
  //           error: true
  //         });
  //         return
  //       }
  //       const normalHits = hits.map(
  //         ({ id, largeImageURL, webformatURL, tags }) => ({
  //           id,
  //           largeImageURL,
  //           webformatURL,
  //           tags,
  //         })
  //       );
  //     this.setState({
  //       totalHits: totalHits,
  //       showBtn: page < Math.floor(totalHits / 12),
  //       isLoading: false,
  //     });
  //       if (query === prevQuery) {
  //         this.setState({
  //           articles: [...prevState.articles, ...normalHits],
  //         });
  //       } else {
  //         this.setState({
  //           articles: [...hits],
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       this.setState({
  //         isLoading: false
  //       });
  //     }
  //   }
  // }

  const setQuerys = value => {
    setQuery(value);
    setShowBtn(false);
    setPage(1);
  };

  const toggleLargeMode = picData => {
    setShowLargePic(!showLargePic)
    setPicData(picData)
  };

  const handleLoadMore = () => {
    setPage(p => ({ page: p.page + 1 }));
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
        <Modal articles={picData} toggleLargeMode={toggleLargeMode} />
      )}
    </AppStyled>
  );
};

export default App;
