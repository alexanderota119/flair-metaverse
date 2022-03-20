import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
  background: white;
  min-height: 100vh;
  padding-bottom: 100px;
`;

export const Wrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const TitleSection = styled.div`
  width: 100%;
  padding-left: 271px;
  margin-top: 122px;

  h1 {
    font-size: 58px;
    font-weight: 700;

    @media screen and (max-width: 500px) {
      font-size: 50px;
    }
  }

  @media screen and (max-width: 1023px) {
    padding-left: 0;
    text-align: center;
  }
`;

export const Contents = styled.div`
  margin-top: 48.5px;
  display: flex;
  align-self: center;
  /* border: 1px solid blue; */
`;

export const SubTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  grid-gap: 491.5px;
  /* border: 1px solid blue; */

  @media screen and (max-width: 1023px) {
    grid-gap: 800px;
  }
`;

export const Divider = styled.div`
  margin-left: 21px;
  width: 1px;
  height: 1241px;
  background: RGB(216, 216, 216);
`;

export const MainSection = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;

  .floor-plan {
    margin-top: 138px;
    width: 736px;
    height: 599px;

    @media screen and (max-width: 1023px) {
      width: 400px;
      height: auto;
    }
  }
`;

export const StorePhotos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 21px;
  grid-row-gap: 19px;
  margin-top: 12.5px;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    width: 400px;
  }

  @media screen and (max-width: 639px) {
    margin-top: 15px;
  }

  @media screen and (max-width: 500px) {
    width: 341px;
  }

  img {
    width: 188px;
    height: 141px;
    margin: 0 auto;

    @media screen and (max-width: 500px) {
      width: 160px;
      height: auto;
    }
  }
`;

export const TabletContents = styled.div`
  margin-top: 48.5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 20px;
    font-weight: 700;
  }

  .tablet-floor-plan {
    margin-top: 100px;
  }

  .floor-plan {
    margin-top: 15px;
    width: 450px;

    @media screen and (max-width: 500px) {
      width: 350px;
    }
  }
`;
