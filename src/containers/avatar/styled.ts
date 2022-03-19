import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  align-items: center;
  padding-bottom: 100px;

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

  h3 {
    margin-top: 15px;
    font-size: 28px;

    @media screen and (max-width: 900px) {
      width: 95vw;
      text-align: center;
    }
  }
`;

export const Avatar = styled.div`
  margin-top: 53.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #f7f7f7;
  border-radius: 50%;
  width: 401px;
  height: 401px;
  overflow: hidden;

  @media screen and (max-width: 425px) {
    width: 331px;
    height: 331px;
  }
`;
