import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;

  h2 {
    margin-top: 68px;
    font-size: 68px;
    font-weight: 700;
    line-height: 78px;
    color: white;
    text-align: center;
  }

  h3 {
    font-weight: 400;
    font-size: 32px;
    color: white;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 60px;
      width: 90vw;
    }

    h3 {
      width: 90vw;
      font-size: 28px;
    }
  }

  @media screen and (max-width: 900px) {
    h2 {
      font-size: 50px;
    }

    h3 {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 500px) {
    h2 {
      line-height: 68px;
    }

    h3 {
      margin-top: 20px;
    }
  }
`;

export const ItemViews = styled.div`
  margin-top: 121px;
  max-width: 1600px;
  width: 100%;
  display: flex;
  grid-gap: 126px;
  justify-content: center;

  @media screen and (max-width: 1300px) {
    grid-gap: 50px;
  }

  @media screen and (max-width: 1150px) {
    grid-gap: 20px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    grid-gap: 80px;
  }
`;

export const ItemView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-top: 40px;
    font-size: 35px;
    font-weight: 700;
    color: white;
  }

  p {
    text-align: center;
    margin-top: 9px;
    font-size: 32px;
    color: white;
  }

  @media screen and (max-width: 500px) {
    span {
      font-size: 30px;
    }

    p {
      font-size: 28px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  border: 2px solid RGB(73, 73, 73);
  width: 517px;

  @media screen and (max-width: 1100px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 400px;
  }

  .card-header {
    border-radius: 25px 25px 0 0;
    background: #292929;
    height: 209px;
    width: 100%;
    position: relative;

    img {
      position: absolute;
      bottom: 0;
      left: 30px;
      margin-bottom: 25px;
    }

    .shoe1 {
      width: 433px;
      height: 240px;

      @media screen and (max-width: 1100px) {
        width: 400px;
        height: auto;
      }

      @media screen and (max-width: 500px) {
        width: 350px;
        height: auto;
      }
    }

    .shoe2 {
      width: 467px;
      height: 201px;

      @media screen and (max-width: 1100px) {
        width: 420px;
        height: auto;
        left: 10px !important;
      }

      @media screen and (max-width: 500px) {
        width: 380px;
        height: auto;
      }
    }
  }

  .card-content {
    background: transparent;
    backdrop-filter: blur(25.56px);
    border-top: 2px solid RGB(73, 73, 73);
    padding-left: 23px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 112px;

    span {
      margin-top: 19px;
      font-size: 26.25px;
      letter-spacing: 0.45;
      line-height: 40.14px;
      color: white;
      font-weight: 700;
    }

    p {
      color: white;
      font-size: 23.16px;
      line-height: 40.14px;
    }
  }

  .card-footer {
    border-top: 2px solid RGB(73, 73, 73);
    border-radius: 0 0 25px 25px;
    background: transparent;
    backdrop-filter: blur(25.56px);
    width: 100%;
    height: 164px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin-top: 29px;
      font-weight: 700;
      font-size: 26.25px;
      letter-spacing: 0.45;
      line-height: 40.14px;
      color: white;
    }

    p {
      font-weight: 300;
      font-size: 69px;
      color: white;
    }

    @media screen and (max-width: 500px) {
      p {
        font-size: 60px;
      }
    }
  }
`;
