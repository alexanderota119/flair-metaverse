import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  align-items: center;
  @media screen and (max-width: 1024px) {
    min-height: 200vh;
  }

  h2 {
    margin-top: 107.5px;
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
`;

export const AvatarSection = styled.div`
  margin-top: 78.5px;
  display: flex;
  grid-gap: 31px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 84.5px;
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
  z-index: 5;
  overflow: hidden;

  @media screen and (max-width: 1080px) {
    width: 300.46px;
    height: 300.46px;
  }

  @media screen and (max-width: 1024px) {
    width: 333.46px;
    height: 333.46px;
  }
`;
