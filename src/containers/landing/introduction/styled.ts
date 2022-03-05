import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(assets/images/Home-bg-1.png) no-repeat;
  background-size: 100% 100%;
  width: 100vw;
  height: auto;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    cursor: pointer;
  }

  h1 {
    width: 945px;
    margin-top: 141px;
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
      font-size: 65px;
      width: 380px;
    }
  }

  @media screen and (max-width: 1600px) {
    background-size: cover;
    background-position: center;
  }
`;

export const SwiperOut = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 0 16.25px 0 16.25px;
  display: flex;
  align-items: center;
  grid-gap: 22px;
  margin-bottom: -100.88px;
`;

export const NavigationPrev = styled.span`
  margin-top: 222.44px;
  color: white;
  font-size: 44.21px;
  font-weight: 700;
  cursor: pointer;
  transform: rotate(180deg);
  z-index: 3;
  @media screen and (max-width: 510px) {
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
  @media screen and (max-width: 510px) {
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
