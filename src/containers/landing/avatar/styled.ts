import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 168px;
  max-width: 1600px;
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;

  @media screen and (max-width: 1300px) {
    grid-gap: 50px;
  }

  span {
    text-align: center;
  }

  .faces {
    position: absolute;
    top: 78px;
    left: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 18px;

    span {
      font-weight: 700;
      font-size: 37px;
      line-height: 78px;
      color: white;
    }

    @media screen and (max-width: 1600px) {
      left: 3.5vw;
    }

    @media screen and (max-width: 1300px) {
      position: static;
      margin-top: 100px;
    }
  }

  .screenshot {
    position: absolute;
    top: 238px;
    left: 489.6px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      /* width: 312px; */
      font-weight: 700;
      font-size: 37px;
      line-height: 47px;
      color: white;
    }

    @media screen and (max-width: 1600px) {
      left: 30.6vw;
    }

    @media screen and (max-width: 1500px) {
      top: 278px;
      left: 28vw;
    }

    @media screen and (max-width: 1400px) {
      left: 25vw;
    }

    @media screen and (max-width: 1300px) {
      position: static;
    }
  }

  .person {
    position: absolute;
    top: 390px;
    left: 1029px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      /* width: 345px; */
      font-weight: 700;
      font-size: 37px;
      line-height: 47px;
      color: white;
    }

    @media screen and (max-width: 1600px) {
      left: 64.3vw;
    }

    @media screen and (max-width: 1500px) {
      top: 500px;
      left: 62vw;
    }

    @media screen and (max-width: 1400px) {
      left: 58vw;
    }

    @media screen and (max-width: 1300px) {
      position: static;
    }
  }
`;

export const TitleSection = styled.div`
  width: 1310px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: white;
  z-index: 1;

  h2 {
    font-size: 68px;
    line-height: 78px;
    font-weight: 700;
    text-align: center;
  }

  span {
    margin-top: 22px;
    width: 680px;
    text-align: right;
    font-size: 32px;
  }

  @media screen and (max-width: 1400px) {
    width: 1250px;
  }

  @media screen and (max-width: 1300px) {
    align-items: center;

    span {
      text-align: center;
      width: 1100px;
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 1100px) {
    span {
      width: 900px;
    }
  }

  @media screen and (max-width: 900px) {
    h2 {
      font-size: 65px;
    }

    span {
      width: 800px;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 60px;
    }

    span {
      width: 90vw;
    }
  }

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 55px;
      width: 90vw;
    }

    span {
      font-size: 28px;
    }
  }

  @media screen and (max-width: 550px) {
    h2 {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 425px) {
    h2 {
      font-size: 40px;
    }
  }
`;
