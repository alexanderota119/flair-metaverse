import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  align-items: center;

  h2 {
    margin-top: 83px;
    font-size: 89px;
    font-weight: 700;

    @media screen and (max-width: 1200px) {
      font-size: 80px;
    }
    @media screen and (max-width: 1000px) {
      font-size: 75px;
    }

    @media screen and (max-width: 650px) {
      font-size: 65px;
    }

    @media screen and (max-width: 500px) {
      font-size: 55px;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 124px;
  grid-row-gap: 30px;
  margin-top: 41px;

  @media screen and (max-width: 1500px) {
    grid-column-gap: 50px;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    grid-gap: 30px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  width: 650px;

  h3 {
    font-size: 54px;
    font-weight: 700;

    @media screen and (max-width: 1200px) {
      font-size: 45px;
    }

    @media screen and (max-width: 1000px) {
      font-size: 40px;
    }

    @media screen and (max-width: 500px) {
      font-size: 30px;
    }
  }

  img {
    width: 100%;
    height: auto;
    align-self: center;
  }

  @media screen and (max-width: 1500px) {
    width: 45.24vw;
  }

  @media screen and (max-width: 1000px) {
    width: 600px;
  }

  @media screen and (max-width: 650px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
  }
`;

export const Divider = styled.div`
  border-top: 1px solid #cccccc;
  width: 100%;
  height: 32px;
`;
