import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 0 20px;
  background: white;
  padding-bottom: 70px;

  h2 {
    margin-top: 72px;
    font-size: 68px;
    font-weight: 600;
    line-height: 78px;
    text-align: center;

    @media screen and (max-width: 900px) {
      font-size: 50px;
    }
  }

  span {
    margin-top: 16px;
    font-size: 32px;
    text-align: center;

    @media screen and (max-width: 600px) {
      font-size: 25px;
    }
  }
`;

export const DropNFT = styled.div`
  width: 100%;
  max-width: 1600px;
  margin-top: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .shoe4 {
    z-index: 3;

    @media screen and (max-width: 1200px) {
      width: 600px !important;
      height: auto;
    }

    @media screen and (max-width: 1024px) {
      width: 500px !important;
      height: auto;
    }

    @media screen and (max-width: 600px) {
      width: 100vw !important;
      height: auto;
    }
  }

  .shoe1 {
    position: absolute;
    left: 0;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .shoe2 {
    position: absolute;
    left: 89px;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .shoe3 {
    position: absolute;
    left: 229px;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  .shoe7 {
    position: absolute;
    right: 0;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .shoe6 {
    position: absolute;
    right: 89px;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .shoe5 {
    position: absolute;
    right: 229px;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;

export const Description = styled.div`
  margin-top: 24px;
  width: 704px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    font-size: 34px;
    letter-spacing: 0.58;
    line-height: 52px;
  }

  p {
    font-size: 30px;
    line-height: 52px;
    color: RGB(142, 142, 147);
  }

  @media screen and (max-width: 1200px) {
    width: 600px;
  }

  @media screen and (max-width: 1024px) {
    width: 500px;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;
