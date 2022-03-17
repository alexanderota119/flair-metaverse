import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 30px 0px 37px;
  align-self: center;
  z-index: 7;

  h1 {
    font-weight: 700;
    font-size: 34px;
    letter-spacing: 0.41;
    line-height: 41px;
    color: #ffffff;
  }

  a {
    font-weight: 700;
    font-size: 21px;
    letter-spacing: 0.25;
    line-height: 41px;
    color: #ffffff;
    display: flex;
  }
`;

export const RightCorner = styled.div`
  display: flex;
  grid-gap: 30px;
  align-items: center;
  @media screen and (max-width: 425px) {
    grid-gap: 15px;
  }
`;
