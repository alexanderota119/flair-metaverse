import styled from 'styled-components';

export const HeaderContainerOut = styled.div`
  display: flex;
  width: 100vw;
  background: RGBA(248, 248, 248, 0.77);
  height: auto;
  justify-content: center;
  border: 1px solid RGBA(0, 0, 0, 0.05);
  z-index: 9;
  backdrop-filter: blur(10px);
`;

export const HeaderContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 69px;
  padding-left: 37px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 34px;
    letter-spacing: 0.41;
    line-height: 41px;
    color: #000000;
  }

  a {
    font-weight: 700;
    font-size: 21px;
    letter-spacing: 0.25;
    line-height: 41px;
    color: #000000;
    display: flex;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;

  input {
    width: 319px;
    height: 21px;
    font-size: 18px;
    border: none;
    outline: none;
    ::placeholder {
      color: #c9c9c9;
    }
    background: transparent;
  }

  svg {
    opacity: 0.62;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const RightCorner = styled.div`
  display: flex;
  grid-gap: 30px;
  align-items: center;
  @media screen and (max-width: 425px) {
    grid-gap: 15px;
  }
`;
