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
`;

export const AvatarContainer = styled.div`
  margin-top: 137px;
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
    left: 96.03px;
    margin-bottom: 43px;
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
    margin-top: 9.5px;
    font-size: 89px;
    font-weight: 700;

    @media screen and (max-width: 1024px) {
      font-size: 80px;
    }

    @media screen and (max-width: 600px) {
      text-align: center;
      font-size: 70px;
    }
  }

  h3 {
    margin-top: 306.5px;
    font-weight: 700;
    font-size: 20px;
    color: #c3c3c3;
    align-self: center;
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

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 6px;
  background: #4a90e2;
`;
