import { Gallery, ContactItem } from './ImageGalleryStyle.js';
import PropTypes from 'prop-types';

const ArticleList = ({ articles, toggleLargeMode }) => (
  <Gallery>
    {articles.map(({ largeImageURL, id, tags, webformatURL}) => (
      <ContactItem
        key={id}
      >
        <img alt={tags} src={webformatURL} onClick={() => {
          toggleLargeMode(largeImageURL)
        }}/>
      </ContactItem>
    ))}
  </Gallery>
);

export default ArticleList;

ArticleList.propTypes = {
  articles: PropTypes.string.isRequired,
  toggleLargeMode: PropTypes.func.isRequired,
};