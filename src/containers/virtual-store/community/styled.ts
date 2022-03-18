import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: RGB(83, 83, 83);
  color: white;

  h2 {
    margin-top: 59px;
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

  img {
    margin-top: 5px;
    margin-left: 100px;
  }
`;
