import styled from 'styled-components';

import AdidasStore from 'assets/images/Adidas-store.png';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
  background: white;
  min-height: 100vh;
  padding-bottom: 100px;
`;

export const TitleSection = styled.div`
  width: 100%;
  max-width: 1600px;
  margin-top: 26px;
  padding-left: 110px;
  display: flex;
  align-items: center;

  h2 {
    margin-left: 36px;
    margin-right: 13px;
    font-size: 89px;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 640px) {
      font-size: 60px;
      margin-left: 13px;
    }
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    padding-left: 0;
  }
`;

export const IntroductionBackground = styled.div`
  margin-top: 15px;
  margin-bottom: 31px;
  width: 100%;
  height: 458px;
  background: url(${AdidasStore}) no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 1600px) {
    background-size: cover;
    background-position: center;
  }
`;

export const TabContent = styled.div`
  margin-top: 30px;
  max-width: 1600px;
  width: 100%;
  display: grid;
  padding: 0 25px;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 71.5px;
  grid-column-gap: 50px;

  @media screen and (max-width: 1599px) {
    grid-column-gap: 0px;
  }

  @media screen and (max-width: 1200px) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    grid-gap: 80px;
    padding: 0;
    align-items: center;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 28.2px;
  width: 750px;
  height: auto;
  align-items: center;

  span {
    font-size: 20px;
    line-height: 33px;
    width: 100%;
  }

  @media screen and (max-width: 1599px) {
    width: 700px;
    margin: 0 auto;
  }

  @media screen and (max-width: 1500px) {
    width: 640px;
  }

  @media screen and (max-width: 1365px) {
    width: 580px;
  }

  @media screen and (max-width: 1279px) {
    width: 550px;
  }

  @media screen and (max-width: 1200px) {
    width: 750px;
  }

  @media screen and (max-width: 800px) {
    width: 95vw;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 16.2px;
  align-items: center;

  h3 {
    font-size: 48px;
    font-weight: 700;

    @media screen and (max-width: 424px) {
      font-size: 40px;
    }
  }

  img {
    cursor: pointer;
    width: 100%;
    height: 320px;

    @media screen and (max-width: 1279px) {
      height: 290px;
    }

    @media screen and (max-width: 1200px) {
      height: 320px;
    }

    @media screen and (max-width: 800px) {
      height: auto;
    }
    transition: all 0.3s ease-in-out;

    :hover {
      transform: scale(1.05);
    }
  }
`;

export const SubCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 640px;
  height: 102px;
  border: 1px solid RGB(216, 216, 216);

  > *:not(:last-child) {
    border-right: 1px solid RGB(216, 216, 216);
  }

  @media screen and (max-width: 1365px) {
    width: 550px;
  }

  @media screen and (max-width: 1279px) {
    width: 520px;
  }

  @media screen and (max-width: 1200px) {
    width: 640px;
  }

  @media screen and (max-width: 800px) {
    width: 90vw;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    width: 60vw;
    height: 204px;

    > :nth-child(even) {
      border-right: 0px;
    }

    > :nth-of-type(3) {
      border-bottom: 0px;
    }

    > :nth-of-type(4) {
      border-bottom: 0px;
    }
  }
`;

export const SubItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .item-count {
    margin-top: 19px;
    font-size: 29px;
    font-weight: 700;
    text-align: center;
  }

  .item-label {
    color: RGB(136, 136, 136);
    font-size: 18px;
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    border-right: 1px solid RGB(221, 221, 221);
    border-bottom: 1px solid RGB(221, 221, 221);
  }
`;
