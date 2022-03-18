import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 97px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: white;
  padding-bottom: 138px;
  position: relative;

  h2 {
    margin-top: 85px;
    font-size: 68px;
    font-weight: 700;
    line-height: 78px;
    text-align: center;

    @media screen and (max-width: 900px) {
      font-size: 50px;
      width: 90vw;
    }

    @media screen and (max-width: 550px) {
      line-height: 58px;
    }
  }

  h3 {
    font-weight: normal;
    font-size: 32px;
    margin-top: 10px;
    text-align: center;

    @media screen and (max-width: 900px) {
      font-size: 28px;
      width: 90vw;
    }
  }
`;

export const Rooms = styled.div`
  margin-top: 78px;
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .bitmap4 {
    z-index: 5;
  }

  .bitmap2 {
    position: absolute;
    left: -200px;
    z-index: 3;
  }

  .bitmap3 {
    position: absolute;
    right: -200px;
    z-index: 3;
  }
`;

export const Card = styled.div`
  position: absolute;
  top: 710px;
  left: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 14px 14px 14px;
  background: white;
  border-radius: 19px;
  z-index: 7;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media screen and (max-width: 1300px) {
    position: static;
    margin-top: 50px;
  }

  @media screen and (max-width: 424px) {
    img {
      width: 320px;
      height: auto;
    }
  }
`;
