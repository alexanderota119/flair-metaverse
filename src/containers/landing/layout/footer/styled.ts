import styled from 'styled-components';

export const StyledContainer = styled.div`
  align-self: center;
  max-width: 1120px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.div`
  background: #292929;
  width: 100%;
  height: 3px;

  @media screen and (max-width: 1200px) {
    width: 90vw;
  }
`;

export const Title = styled.h2`
  margin-top: 80px;
  font-weight: 700;
  font-size: 32.46px;
  letter-spacing: 0.74;
  color: white;
`;

export const MoreInfo = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 1120px;
  margin-left: 5vw;

  @media screen and (max-width: 1200px) {
    width: 90vw;
    margin-left: 10vw;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 50px;
    margin-left: 25vw;
  }
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  font-size: 18px;

  span {
    text-transform: uppercase;
    color: RGBA(255, 255, 255, 0.65);
    margin-bottom: 10px;
  }

  p {
    color: white;
  }
`;

export const FooterSection = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 120px;
  background: url(assets/images/footer.png);
  background-size: 100% 100%;
  padding: 30px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10vh;

  div {
    display: flex;
    grid-gap: 15px;
    font-size: 20px;
    align-items: center;
    span {
      display: flex;
      align-items: center;
    }
    svg {
      width: 22px !important;
      height: 22px !important;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 90vw;
  }
`;
