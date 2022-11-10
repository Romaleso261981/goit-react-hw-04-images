import { Gallery, ContactItem} from './ImageGalleryStyle.js';

const ArticleList = ({ articles, toggleLargeMode }) => (
  <Gallery>
    {articles.map(({ largeImageURL, id, tags, webformatURL}) => (
      <ContactItem
        key={id}
      >
        <img alt={tags} src={webformatURL} onClick={() => {
          toggleLargeMode()
        }}/>
      </ContactItem>
    ))}
  </Gallery>
);

export default ArticleList;
