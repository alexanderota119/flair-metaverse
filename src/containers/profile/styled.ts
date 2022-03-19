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

export const Content = styled.div`
  padding: 0 30px 0 37px;
  width: 100%;
  max-width: 1600px;
  display: flex;
  grid-gap: 28px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    padding: 0 10px 0 17px;
  }
`;

export const AvatarContainer = styled.div`
  margin-top: 157px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 335px;
  height: 551px;
  border-radius: 15px;
  box-shadow: 1px 5px 5px 5px RGBA(0, 0, 0, 0.1);
  border: 1px solid RGB(151, 151, 151);

  img {
    position: absolute;
    bottom: 0;
    left: 63.63px;
    margin-bottom: 83px;
  }
`;

export const AvatarCardWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: RGB(216, 216, 216);
  opacity: 0.68;
  backdrop-filter: blur(14px);
  border-radius: 15px;
`;

export const AvatarCardWrapper1 = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 197px;
  background: linear-gradient(RGB(216, 216, 216, 0.01), RGBA(0, 0, 0, 0.56));
  opacity: 0.68;
  border-radius: 15px;
`;

export const Description = styled.div`
  margin-top: 27.5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 21.85px;

  span {
    text-align: right;
    font-size: 20px;
  }

  p {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ClosetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 89px;
    font-weight: 700;

    @media screen and (max-width: 1220px) {
      font-size: 70px;
    }

    @media screen and (max-width: 1052px) {
      font-size: 60px;
    }

    @media screen and (max-width: 610px) {
      font-size: 40px;
    }
    @media screen and (max-width: 425px) {
      font-size: 35px;
    }
  }
`;

export const DisplayName = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 22.22px;
  margin-top: 10px;

  img {
    width: 65.26px;
    height: 64px;

    @media screen and (max-width: 1220px) {
      width: 60px;
      height: 60px;
    }
    @media screen and (max-width: 1052px) {
      width: 50px;
      height: 50px;
    }
    @media screen and (max-width: 610px) {
      width: 40px;
      height: 40px;
    }
    @media screen and (max-width: 425px) {
      width: 30px;
      height: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 610px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ContractCard = styled.div`
  margin-top: 43px;
  background: RGB(249, 249, 249);
  display: flex;
  align-items: center;
  padding: 0 15.75px 0 21.86px;
  border-radius: 23px;
  justify-content: space-between;
  width: 199px;
  height: 45px;
  color: RGB(80, 80, 80);
  span {
    font-size: 18px;
  }

  svg {
    font-size: 20px;
  }

  @media screen and (max-width: 1024px) {
    align-self: center;
  }
`;

export const TabHeadingContainer = styled.div`
  margin-top: 14px;
  width: 100%;
  height: 40.5px;
  border-bottom: 1px solid RGB(151, 151, 151, 0.68);
  display: flex;
  grid-gap: 32.25px;
  padding-left: 22px;

  @media screen and (max-width: 1024px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 600px) {
    padding-left: 0px;
  }
`;

interface TabHeadingProps {
  checked?: boolean;
}

export const TabHeading = styled.div<TabHeadingProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props: TabHeadingProps) => (props.checked ? 'space-between' : 'flex-start')};
  align-items: center;
  width: 128.5px;
  height: 100%;
  cursor: pointer;
`;

interface TabHeadingTitleProps {
  checked?: boolean;
}

export const TabHeadingTitle = styled.span<TabHeadingTitleProps>`
  color: ${(props: TabHeadingTitleProps) => (props.checked ? 'black' : '#888888')};
  font-size: 18px;
  font-weight: ${(props: TabHeadingTitleProps) => (props.checked ? 700 : 400)};

  @media screen and (max-width: 610px) {
    font-size: 15px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 6px;
  background: #4a90e2;
`;

export const TabContent = styled.div`
  margin-top: 41px;
  padding-left: 46px;
  padding-right: 66px;
  display: flex;

  @media screen and (max-width: 500px) {
    padding-left: 16px;
    padding-right: 26px;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 31px;

  @media screen and (max-width: 1599px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1220px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 830px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  margin: auto;
  width: 335px;
  height: 234px;
  border: 1px solid RGB(151, 151, 151);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 425px) {
    width: 300px;
  }
`;

interface CardImgProps {
  background: string;
  bottom: number;
}

export const CardImg = styled.div<CardImgProps>`
  width: 333px;
  height: 163px;
  border-radius: 15px;
  background: ${(props: CardImgProps) => props.background};
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  img {
    position: absolute;
    bottom: ${(props: CardImgProps) => `${props.bottom}px`};
  }

  @media screen and (max-width: 425px) {
    width: 298px;
  }
`;

export const CardDescription = styled.div`
  padding-top: 10px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 17px;
    letter-spacing: 0.29;
    line-height: 26px;
  }

  p {
    font-size: 15px;
    line-height: 26px;
    color: RGB(142, 142, 147);
  }
`;
