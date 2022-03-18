import styled from 'styled-components';
import Home_Bg_1_Img from 'assets/images/Home-bg-1.png';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  background: url(${Home_Bg_1_Img}) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 690px;

  h1 {
    width: 945px;
    margin-top: 203px;
    color: white;
    font-size: 110px;
    font-weight: 700;
    line-height: 117px;
    text-align: center;
    @media screen and (max-width: 1000px) {
      width: 800px;
      font-size: 90px;
      line-height: 97px;
    }
    @media screen and (max-width: 800px) {
      width: 600px;
      font-size: 85px;
      line-height: 90px;
    }
    @media screen and (max-width: 550px) {
      width: 450px;
      font-size: 70px;
    }
    @media screen and (max-width: 450px) {
      font-size: 60px;
      width: 380px;
    }
  }

  @media screen and (max-width: 1600px) {
    background-size: cover;
    background-position: center;
  }

  @media screen and (min-width: 1600px) {
    height: 43vw;

    h1 {
      margin-top: 12.68vw;
    }
  }
`;

export const SubTitleContainer = styled.div`
  align-self: center;
  width: 1200px;
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;

  h2 {
    color: white;
    font-size: 68px;
    font-weight: 700;
    line-height: 78px;
    text-align: center;

    @media screen and (max-width: 1300px) {
      font-size: 60px;
    }

    @media screen and (max-width: 1000px) {
      font-size: 55px;
    }

    @media screen and (max-width: 768px) {
      font-size: 50px;
    }

    @media screen and (max-width: 550px) {
      font-size: 40px;
      width: 90vw;
      line-height: 58px;
    }
  }

  @media screen and (max-width: 1300px) {
    width: 100vw;
    margin-left: 7vw;
  }

  @media screen and (max-width: 1255px) {
    margin-left: 0;
    justify-content: center;
  }
`;

export const ShopContainer = styled.div`
  margin-top: 45px;
  max-width: 1600px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .Bitmap1 {
    z-index: 5;
  }

  .Bitmap2 {
    position: absolute;
    left: -175px;
    z-index: 3;
  }

  .Bitmap3 {
    position: absolute;
    right: -175px;
    z-index: 3;
  }
`;

export const ShopDescription = styled.div`
  align-self: center;
  max-width: 1255px;
  width: 100%;
  height: 104px;
  display: flex;
  justify-content: flex-end;
  position: relative;

  span {
    text-align: right;
    margin-top: 18px;
    color: white;
    width: 750px;
    font-size: 32px;

    @media screen and (max-width: 950px) {
      margin-top: 70px;
      text-align: center;
    }

    @media screen and (max-width: 750px) {
      font-size: 30px;
      width: 650px;
    }

    @media screen and (max-width: 550px) {
      font-size: 25px;
      width: 450px;
    }

    @media screen and (max-width: 425px) {
      width: 350px;
    }
  }

  img {
    z-index: 7;
    position: absolute;
    bottom: 0;
    left: -78.16px;
  }

  @media screen and (max-width: 1300px) {
    margin-right: 30px;
  }

  @media screen and (max-width: 950px) {
    justify-content: center;
    margin-right: 0;
  }
`;

export const CollectNFTContainer = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    margin-top: 82px;
    font-size: 68px;
    line-height: 78px;
    font-weight: 700;
    color: white;
    text-align: center;

    @media screen and (max-width: 950px) {
      margin-top: 100px;
      font-size: 60px;
    }

    @media screen and (max-width: 800px) {
      font-size: 55px;
    }

    @media screen and (max-width: 720px) {
      margin-top: 150px;
      width: 650px;
      line-height: 58px;
    }

    @media screen and (max-width: 550px) {
      width: 450px;
      font-size: 45px;
    }

    @media screen and (max-width: 450px) {
      width: 400px;
      font-size: 40px;
    }

    @media screen and (max-width: 425px) {
      width: 400px;
      font-size: 35px;
    }
  }
`;

export const SwiperOut = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 0 30px 0 30px;
  display: flex;
  align-items: center;
  grid-gap: 22px;
  margin-bottom: -100.88px;
  @media screen and (max-width: 530px) {
    padding: 0 20px 0 20px;
  }
`;

export const NavigationPrev = styled.span`
  margin-top: 222.44px;
  color: white;
  font-size: 44.21px;
  font-weight: 700;
  cursor: pointer;
  transform: rotate(180deg);
  z-index: 3;
  @media screen and (max-width: 530px) {
    display: none;
  }
`;

export const NavigationNext = styled.span`
  margin-top: 222.44px;
  color: white;
  font-size: 44.21px;
  font-weight: 700;
  cursor: pointer;
  z-index: 3;
  @media screen and (max-width: 530px) {
    display: none;
  }
`;

export const Card = styled.div`
  margin: 222.44px auto 0;
  display: flex;
  flex-direction: column;
  border-radius: 15.4px;
  border: 1px solid #292929;
  width: 344px;
  height: 210.51px;
  position: relative;

  @media screen and (max-width: 399px) {
    width: 320px !important;
  }
`;

export const CardHeading = styled.div`
  border-radius: 15.4px;
  width: 100%;
  height: 138.63px;
  background: #292929;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 71.88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15.4px;
  color: white;
  position: relative;

  span {
    font-size: 17.46px;
    font-weight: 700;
    letter-spacing: 0.3;
    line-height: 26.7px;
  }

  p {
    font-size: 15.4px;
    font-weight: 400;
    line-height: 26.7px;
  }
`;

export const CardContentWrpper = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.68;
  border-radius: 15.4px;
  position: absolute;
  left: 0;
  z-index: -1;
  backdrop-filter: blur(17px);
`;

interface CardImgProps {
  left: number;
  marginBottom: number;
}

export const CardImg = styled.img<CardImgProps>`
  position: absolute;
  left: ${(props: CardImgProps) => `${props.left}px`} !important;
  bottom: 0 !important;
  margin-bottom: ${(props: CardImgProps) => `${props.marginBottom}px`} !important;
`;
