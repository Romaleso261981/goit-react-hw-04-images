import { useEffect } from 'react';
import { Gallery, Overlay, Img } from './ModalStyle.js';

const Modal = (articles, toggle) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);
 
 
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggle();
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
