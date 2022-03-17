import styled from 'styled-components';
import Virtualstore_bg_Img from 'assets/images/Virtualstore-bg.png';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  background: url(${Virtualstore_bg_Img}) no-repeat;
  background-position: bottom right;
  margin-top: -57px;
  width: 100%;
  height: 622px;

  h1 {
    width: 1204px;
    text-align: center;
    margin-top: 203px;
    font-size: 110px;
    font-weight: 700;
    color: white;
    line-height: 117px;

    @media screen and (max-width: 1300px) {
      font-size: 90px;
      width: 1000px;
    }

    @media screen and (max-width: 1000px) {
      font-size: 80px;
      width: 90vw;
    }

    @media screen and (max-width: 910px) {
      font-size: 70px;
    }

    @media screen and (max-width: 800px) {
      font-size: 60px;
    }

    @media screen and (max-width: 700px) {
      line-height: 87px;
    }

    @media screen and (max-width: 500px) {
      font-size: 50px;
    }
  }

  @media screen and (max-width: 1300px) {
    background-position: bottom center;
  }
`;

export const DigitizeProducts = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 0 118px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1550px) {
    padding: 0 58px;
  }

  @media screen and (max-width: 1450px) {
    padding: 0 38px;
  }
`;

export const ProductAssetsTitle = styled.div`
  margin-top: 50px;
  margin-left: 26px;
  color: white;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 68px;
    line-height: 78px;
    font-weight: 700;
  }

  span {
    margin-top: 5px;
    font-size: 32px;
  }

  @media screen and (max-width: 1200px) {
    h2 {
      font-size: 60px;
    }

    span {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 1100px) {
    align-self: center;
    span {
      text-align: center;
    }
    margin-left: 0;
  }

  @media screen and (max-width: 900px) {
    width: 90vw;
    h2 {
      font-size: 50px;
      text-align: center;
    }

    span {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 40px;
      line-height: 58px;
    }

    span {
      font-size: 25px;
    }
  }
`;

export const ProductViews = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  svg {
    margin-top: 275px;
    color: white;
    font-size: 80px;

    @media screen and (max-width: 1300px) {
      font-size: 70px;
      margin-top: 21.2vw;
    }

    @media screen and (max-width: 1200px) {
      font-size: 60px;
    }

    @media screen and (max-width: 1100px) {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    grid-gap: 50px;
  }
`;

export const ProductView = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 38px;
  align-items: center;

  span {
    font-size: 37px;
    line-height: 47px;
    color: white;
    text-align: center;
  }
`;

export const Card = styled.div`
  background: RGBA(255, 255, 255, 0.07);
  border-radius: 31.5px;
  width: 600px;
  height: 630px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1450px) {
    width: 550px;
    height: 580px;
  }

  @media screen and (max-width: 1300px) {
    width: 500px;
    height: 530px;
  }

  @media screen and (max-width: 1200px) {
    width: 450px;
    height: 480px;
  }

  @media screen and (max-width: 500px) {
    width: 400px;
    height: 430px;
  }

  @media screen and (max-width: 424px) {
    width: 350px;
    height: 380px;
  }

  .shoes {
    width: 428px;
    height: 568px;

    @media screen and (max-width: 1450px) {
      width: 408px;
      height: 528px;
    }

    @media screen and (max-width: 1300px) {
      width: 370px;
      height: 500px;
    }

    @media screen and (max-width: 1200px) {
      width: 340px;
      height: 440px;
    }

    @media screen and (max-width: 500px) {
      width: 350px;
      height: 400px;
    }

    @media screen and (max-width: 424px) {
      width: 320px;
      height: 350px;
    }
  }

  .shoes-3d {
    width: 545px;
    height: 545px;

    @media screen and (max-width: 1450px) {
      width: 515px;
      height: 515px;
    }

    @media screen and (max-width: 1300px) {
      width: 470px;
      height: 470px;
    }

    @media screen and (max-width: 1200px) {
      width: 420px;
      height: 420px;
    }

    @media screen and (max-width: 500px) {
      width: 370px;
      height: 370px;
    }

    @media screen and (max-width: 424px) {
      width: 320px;
      height: 320px;
    }
  }
`;
