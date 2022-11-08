import { Component } from 'react';
import { Gallery, Overlay, Img } from './ModalStyle.js';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.toggleLargeMode();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleLargeMode();
    }
  };

  render() {
    const { articles } = this.props;
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <Gallery >
          <Img src={articles}></Img>
        </Gallery>
      </Overlay>
    );
  }
}

export default Modal;
