import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Gallery = styled.div`
  max-width: 100vw;
  max-height: auto;
`;
export const Img = styled.img`
 display: block;
 width: 100%;
 height: auto;
`;

