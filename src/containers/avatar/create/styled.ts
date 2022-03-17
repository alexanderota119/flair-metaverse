import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  align-items: center;
  @media screen and (max-width: 1024px) {
    min-height: 210vh;
  }

  h2 {
    margin-top: 88.5px;
    font-weight: 700;
    font-size: 89px;
    text-align: center;

    @media screen and (max-width: 900px) {
      font-size: 70px;
    }

    @media screen and (max-width: 650px) {
      font-size: 60px;
      width: 95vw;
    }
  }

  h3 {
    margin-top: 15px;
    font-size: 28px;

    @media screen and (max-width: 900px) {
      width: 95vw;
      text-align: center;
    }
  }
`;

export const AvatarSection = styled.div`
  margin-top: 84.5px;
  display: flex;
  grid-gap: 31px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 84.5px;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 0px;
  }
`;

export const AvatarOut = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 21px;
  align-items: center;

  span {
    font-size: 28px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #f7f7f7;
  border-radius: 50%;
  width: 333.46px;
  height: 333.46px;

  @media screen and (max-width: 1080px) {
    width: 300.46px;
    height: 300.46px;
  }

  @media screen and (max-width: 1024px) {
    width: 333.46px;
    height: 333.46px;
  }
`;
