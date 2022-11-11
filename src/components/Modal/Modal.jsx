import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Gallery, Overlay, Img } from './ModalStyle.js';

const Modal = ({articles, toggleLargeMode}) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleLargeMode();
      }
    };  
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleLargeMode]);
 
 
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleLargeMode();
    }
  };

 
  return (
    <Overlay onClick={handleBackdropClick}>
      <Gallery >
        <Img src={articles}></Img>
      </Gallery>
    </Overlay>
  );
}

export default Modal;

Modal.propTypes = {
  articles: PropTypes.string.isRequired,
  toggleLargeMode: PropTypes.func.isRequired,
};
