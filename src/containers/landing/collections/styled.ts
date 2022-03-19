import styled from 'styled-components';
import Home_bg_2_Img from 'assets/images/Home-bg-2.png';
import Home_bg_3_Img from 'assets/images/Home-bg-3.png';

export const StyledContainer = styled.div`
  margin-top: 900px;
  max-width: 1600px;
  width: 100%;
  align-self: center;
  padding: 0 30px;
  z-index: 1;
  .absolute_img {
    width: 90vw;
    position: absolute;
    left: 0;
  }
  .home-bg-3 {
    position: absolute;
    left: 0;
    top: -70vh;
    transform: translateX(-304px) rotate(90deg);
    background: url(${Home_bg_3_Img}) no-repeat;
    background-size: 100% 100%;
    width: 1080px;
    height: 608px;
    z-index: -1;

    @media screen and (max-width: 550px) {
      display: none;
    }
  }

  h1 {
    color: white;
    font-weight: 700;
    font-size: 68px;
    line-height: 78px;
    text-align: center;
    z-index: 2;
    @media screen and (max-width: 600px) {
      font-size: 60px;
    }

    @media screen and (max-width: 520px) {
      font-size: 45px;
    }

    @media screen and (max-width: 424px) {
      font-size: 40px;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    cursor: pointer;
  }

  @media screen and (max-width: 1300px) {
    margin-top: 150px;
  }
`;

export const SwiperOut = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

export const NavigationPrev = styled.span`
  margin-top: 255.39px;
  color: white;
  font-size: 50px;
  font-weight: 700;
  cursor: pointer;
  z-index: 3;
  @media screen and (max-width: 530px) {
    display: none;
  }
`;

export const NavigationNext = styled.span`
  margin-top: 255.39px;
  color: white;
  font-size: 50px;
  font-weight: 700;
  cursor: pointer;
  z-index: 3;
  @media screen and (max-width: 530px) {
    display: none;
  }
`;

export const Card = styled.div`
  margin: 255.39px auto 0;
  display: flex;
  flex-direction: column;
  width: 344px;
  height: 504px;
  border-radius: 15.4px;
  border: 1px solid #292929;
  position: relative;
  @media screen and (max-width: 399px) {
    width: 300px;
  }
`;

export const CardHeading = styled.div`
  width: 344px;
  height: 230px;
  border-radius: 15.4px;
  background: #292929;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 2;
  @media screen and (max-width: 399px) {
    width: 300px;
  }
`;

interface PersonImgProps {
  left: number;
}

export const PersonImg = styled.img<PersonImgProps>`
  position: absolute;
  bottom: 0;
  left: ${(props: PersonImgProps) => `${props.left}px`};
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 344px;
  height: 441px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15.4px;

  h2 {
    margin-top: 14.65px;
    font-weight: 700;
    font-size: 32.46px;
    letter-spacing: 0.74;
    color: white;
  }

  z-index: 1;

  @media screen and (max-width: 399px) {
    width: 300px;
  }
`;

export const CardContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 441px;
  background: black;
  opacity: 0.68;
  backdrop-filter: blur(17px);
  z-index: -1;
  border-radius: 15.4px;
`;

export const ContractInfo = styled.div`
  margin-top: 181px;
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16.75px 0 21.86px;
  width: 200px;
  height: 45px;
  background: RGB(174, 174, 174, 0.06);

  svg {
    color: white;
    font-size: 21px;
  }

  span {
    color: RGBA(255, 255, 255, 0.65);
    font-size: 18px;
  }
`;

export const ProfileInfo = styled.div`
  margin-top: 12.73px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 14.85px;
  grid-row-gap: 10px;
  width: 287.85px;
  span {
    text-align: right;
    font-size: 20px;
    color: white;
  }

  p {
    text-align: left;
    font-weight: 700;
    font-size: 20px;
    color: white;
  }
`;

export const HomeBack2 = styled.div`
  margin-top: -161.35px;
  width: 100vw;
  height: 903px;
  background: url(${Home_bg_2_Img}) no-repeat;
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1600px) {
    background-size: cover;
    background-position: center;
  }
`;

export const Content = styled.div`
  margin-top: 500px;
  width: 700px;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  color: white;

  h1 {
    font-weight: 700;
    font-size: 68px;
    line-height: 78px;
  }

  h2 {
    font-weight: 700;
    font-size: 32.46px;
    letter-spacing: 0.74;
  }

  span {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 58px;
    }
    h2 {
      font-size: 30px;
    }
    span {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 55px;
    }
    h2 {
      font-size: 28px;
    }
  }
`;

export const Divider = styled.div`
  align-self: center;
  background: #292929;
  width: 1120px;
  height: 3px;
  margin-top: 80px;

  @media screen and (max-width: 1200px) {
    width: 80vw;
  }
`;
