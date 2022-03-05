import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  background: url(assets/images/Home-bg-3.png) no-repeat;
  width: 100vw;
  background-position-x: center;
  height: auto;
`;

export const MetaverseImg = styled.img`
  width: 586px;
  height: 460px;
  margin-top: 244.87px;
`;

export const Shape = styled.div`
  width: 1028px;
  height: 310px;
  background: url(assets/images/Shape.png) no-repeat;
  background-size: 100% 310px;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 34.03px 30.5px 0 30.5px;
    font-weight: 700;
    font-size: 80px;
    color: black;
    line-height: 78px;
  }

  h3 {
    margin: 9px 0 29.97px 30.5px;
    font-weight: 400;
    font-size: 28px;
    color: black;
  }

  @media screen and (max-width: 1100px) {
    width: 90vw;
    h1 {
      font-size: 70px;
    }
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 60px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 95vw;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 60px;
      line-height: 48px;
      margin-top: 54.03px;
    }
  }
  @media screen and (max-width: 750px) {
    h1 {
      font-size: 60px;
      line-height: 48px;
      margin-top: 30.03px;
    }
  }
  @media screen and (max-width: 700px) {
    h1 {
      width: 85vw;
      margin: 34.03px 0 0 30.5px;
    }
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 50px;
    }
    h3 {
      font-size: 25px;
    }
  }
`;
