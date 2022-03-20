import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  align-items: center;
  padding-bottom: 100px;
`;

export const IntroductionBackground = styled.div`
  width: 100%;
  height: 675px;
  background: RGB(235, 238, 240);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .common-shoe {
    position: absolute;
    bottom: 0;
    width: 1286px;
    height: 1286px;

    @media screen and (max-width: 1023px) {
      width: 100vw;
      height: auto;
      margin-bottom: 30px;
    }
  }

  .item-icon {
    position: absolute;
    bottom: -32px;
    margin: 0 auto;
    width: 64.3px;
    height: 64.3px;
    background: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 960px) {
    height: 70vw;
  }
`;

export const TitleSection = styled.div`
  margin-top: 43.3px;
  display: flex;
  flex-direction: column;
  grid-gap: 14.5px;
  align-items: center;

  h1 {
    font-size: 89px;
    font-weight: 700;

    @media screen and (max-width: 800px) {
      font-size: 75px;
    }

    @media screen and (max-width: 640px) {
      font-size: 65px;
    }

    @media screen and (max-width: 550px) {
      font-size: 50px;
    }

    @media screen and (max-width: 424px) {
      font-size: 45px;
    }
  }
`;

export const SubTitleSection = styled.div`
  display: flex;
  grid-gap: 28.6px;

  .sub-title {
    display: flex;
    grid-gap: 7.8px;
    align-items: center;

    span {
      color: RGB(74, 144, 226);
      font-size: 20px;
    }
  }
`;

export const ItemInfo = styled.div`
  margin-top: 64.7px;
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 300px;
`;

export const InfoSection = styled.div`
  display: flex;
  grid-gap: 36.5px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    grid-gap: 50px;
    align-items: center;
  }
`;

export const LeftSection = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 550px) {
    width: 400px;
  }

  @media screen and (max-width: 424px) {
    width: 350px;
  }

  h3 {
    font-size: 32px;
    font-weight: 700;
    line-height: 33px;
    @media screen and (max-width: 424px) {
      text-align: center;
      margin: 0 auto;
    }
  }

  h4 {
    margin-top: 40px;
    font-size: 20px;
    font-weight: 700;
    line-height: 33px;
  }

  p {
    margin-top: 6.5px;
    width: 100%;
    font-size: 20px;
    line-height: 33px;
  }

  .name {
    margin-top: 28.3px;
    align-self: center;
    font-size: 32px;
    line-height: 33px;
  }

  .see-all {
    align-self: center;
    margin-top: 15px;
    font-size: 20px;
    color: RGB(74, 144, 226);
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const OwnerCard = styled.div`
  margin-top: 14.5px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 180px;
  background: RGB(216, 216, 216);
  border: 1px solid RGB(151, 151, 151);
  border-radius: 15px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    position: absolute;
    bottom: 0;
  }

  @media screen and (max-width: 424px) {
    margin-top: 80px;
  }
`;

export const Divider = styled.div`
  margin-top: 29.7px;
  width: 100%;
  height: 1px;
  background: RGB(216, 216, 216);
`;

export const ContractInfo = styled.div`
  align-self: center;
  margin-top: 18.3px;
  display: grid;
  grid-template-columns: auto auto;
  font-size: 20px;
  line-height: 33px;
  grid-column-gap: 15px;

  .left {
    text-align: right;
  }

  .right {
    font-weight: 700;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 754px;

  @media screen and (max-width: 1330px) {
    width: 600px;
  }

  @media screen and (max-width: 1200px) {
    width: 500px;
  }

  @media screen and (max-width: 550px) {
    width: 400px;
  }

  @media screen and (max-width: 424px) {
    width: 350px;
  }
`;

export const TransactionInfo = styled.div`
  width: 100%;
  display: flex;
  grid-gap: 20px;

  @media screen and (max-width: 1330px) {
    flex-direction: column;
  }
`;

export const LastTransaction = styled.div`
  display: flex;
  flex-direction: column;
  width: 454px;
  height: 172px;
  border: 1px solid RGB(151, 151, 151, 0.22);

  @media screen and (max-width: 550px) {
    width: 400px;
  }

  @media screen and (max-width: 424px) {
    width: 350px;
  }

  h4 {
    margin-left: 23px;
    margin-top: 22px;
    font-weight: 700;
    font-size: 20px;
    line-height: 33px;
  }

  .info {
    width: 100%;
    padding: 0 18px 0 37px;
    margin-top: 8px;
    display: grid;
    grid-template-columns: auto auto;

    @media screen and (max-width: 424px) {
      padding: 0 5px;
    }

    .amount-eth {
      display: flex;
      align-items: center;
      grid-gap: 12px;
      font-size: 48px;
      /* border: 1px solid blue; */

      svg {
        color: RGB(97, 97, 97);
      }
    }

    .amount-usd {
      margin: auto 0;
      text-align: right;
      font-size: 20px;
      color: RGB(178, 178, 178);
      /* border: 1px solid blue; */
    }

    .send {
      color: RGB(74, 144, 226);
      font-size: 20px;
      /* border: 1px solid blue; */
    }
  }
`;

export const Circulation = styled.div`
  border: 1px solid RGB(151, 151, 151, 0.22);
  width: 280px;
  height: 172px;
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: 22px;
    margin-left: 30px;
    font-size: 20px;
    line-height: 33px;
    font-weight: 700;
  }

  span {
    margin-top: 18px;
    margin-left: 42px;
    font-size: 38px;
  }
`;

export const BuySection = styled.div`
  border: 1px solid RGB(151, 151, 151, 0.22);
  width: 100%;
  height: 350px;
  padding: 22px 20px 20px 23px;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 20px;
      line-height: 33px;
      font-weight: 700;
    }
  }

  .more {
    margin-top: 14px;
    align-self: center;
    font-size: 20px;
    color: RGB(74, 144, 226);
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const BuyListWrapper = styled.div`
  @media screen and (max-width: 1330px) {
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

export const BuyList = styled.div`
  margin-top: 28px;
  align-self: center;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const BuyItem = styled.div`
  width: 710px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px 10px 9px 14px;
  border-bottom: 1px solid RGB(151, 151, 151, 0.35);
  text-align: left;

  @media screen and (max-width: 1330px) {
    width: 550px;
  }

  .amount {
    display: flex;
    flex-direction: column;

    .eth {
      font-weight: 700;
    }

    .usd {
      color: RGB(178, 178, 178);
    }
  }

  .other {
    display: flex;
    grid-gap: 20px;
    justify-content: space-between;
    .userinfo {
      display: flex;
      grid-gap: 10px;
      .by {
        font-weight: 700;
      }

      .account {
        color: RGB(74, 144, 226);
      }
    }
  }
`;

export const Offers = styled.div`
  border: 1px solid RGB(151, 151, 151, 0.22);
  width: 100%;
  height: 350px;
  padding: 22px 20px 20px 23px;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 20px;
      line-height: 33px;
      font-weight: 700;
    }
  }

  .more {
    margin-top: 14px;
    align-self: center;
    font-size: 20px;
    color: RGB(74, 144, 226);
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const BidButton = styled.div`
  background: RGB(74, 144, 226);
  width: 142px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 31px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.05);
  }

  :active {
    transform: scale(0.95);
  }
`;

export const OfferList = styled.div`
  margin-top: 28px;
  align-self: center;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
`;

export const OfferItem = styled.div`
  width: 710px;
  height: 70px;
  display: flex;
  grid-gap: 329px;
  align-items: center;
  font-size: 20px;
  padding: 10px 0 9px 14px;
  border-bottom: 1px solid RGB(151, 151, 151, 0.35);

  @media screen and (max-width: 1330px) {
    width: 550px;
    grid-gap: 250px;
  }

  @media screen and (max-width: 1200px) {
    width: 450px;
    grid-gap: 130px;
  }

  @media screen and (max-width: 550px) {
    width: 350px;
    grid-gap: 50px;
  }

  @media screen and (max-width: 424px) {
    width: 330px;
    grid-gap: 30px;
  }

  .amount {
    display: flex;
    flex-direction: column;

    .eth {
      font-weight: 700;
    }

    .usd {
      color: RGB(178, 178, 178);
    }
  }

  .userinfo {
    display: flex;
    grid-gap: 6px;
    .by {
      font-weight: 700;
    }

    .account {
      color: RGB(74, 144, 226);
    }
  }
`;

export const PriceHistory = styled.div`
  border: 1px solid RGB(151, 151, 151, 0.22);
  width: 100%;
  height: 247px;
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: 22px;
    margin-left: 23px;
    font-size: 20px;
    line-height: 33px;
    font-weight: 700;
  }
`;

export const ItemActivity = styled.div`
  border: 1px solid RGB(151, 151, 151, 0.22);
  width: 100%;
  height: 247px;
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: 22px;
    margin-left: 23px;
    font-size: 20px;
    line-height: 33px;
    font-weight: 700;
  }
`;
