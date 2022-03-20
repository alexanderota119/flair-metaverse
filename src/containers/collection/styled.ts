import styled from 'styled-components';

import AdidasLifestyleCollection from 'assets/images/Adidas-lifestyle-collection.png';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  align-items: center;
  position: relative;
  padding-bottom: 150px;
`;

export const IntroductionBackground = styled.div`
  width: 100%;
  height: 458px;
  background: url(${AdidasLifestyleCollection}) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;

  @media screen and (max-width: 1600px) {
    background-size: cover;
    background-position: center;
  }
`;

export const WindowIcon = styled.div`
  margin-top: 356px;
  width: 64.3px;
  height: 64.3px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const TitleSection = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 89px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
      font-size: 75px;
    }

    @media screen and (max-width: 600px) {
      font-size: 60px;
    }

    @media screen and (max-width: 500px) {
      font-size: 55px;
    }

    @media screen and (max-width: 424px) {
      font-size: 50px;
    }
  }

  h4 {
    color: RGB(74, 144, 226);
    font-weight: normal;
    font-size: 20px;
  }
`;

export const Brand = styled.div`
  display: flex;
  grid-gap: 5px;
  align-items: center;
`;

export const CollectionInfo = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 1px solid RGB(216, 216, 216);
  border-radius: 10px;
  width: 674px;
  height: 110px;

  > *:not(:last-child) {
    border-right: 1px solid RGB(216, 216, 216);
  }

  @media screen and (max-width: 768px) {
    width: 550px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    width: 350px;
    height: 220px;

    > :nth-child(even) {
      border-right: 0px;
    }

    > :nth-of-type(3) {
      border-bottom: 0px;
    }

    > :nth-of-type(4) {
      border-bottom: 0px;
    }
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 5px;

  .item-amount {
    display: flex;
    grid-gap: 5px;
    align-items: center;
    margin-top: 20px;
    font-size: 28px;
    font-weight: 800;

    svg {
      color: RGB(171, 130, 239);
    }
  }

  .item-label {
    font-size: 18px;
    color: RGB(142, 142, 147);
  }

  @media screen and (max-width: 600px) {
    border-right: 1px solid RGB(221, 221, 221);
    border-bottom: 1px solid RGB(221, 221, 221);
  }
`;

export const TabContent = styled.div`
  max-width: 1600px;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 41.5px;
  padding: 23.5px 50px 0 50px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 50px;
  }
`;

export const FilterSection = styled.div`
  width: 414px;
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  border: 1px solid RGB(216, 216, 216);
  overflow-y: auto;

  @media screen and (max-width: 424px) {
    width: 360px;
  }
`;

export const Collapse = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollapseHeading = styled.div`
  border-bottom: 1px solid RGB(216, 216, 216);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  svg {
    color: RGB(142, 142, 147);
    font-size: 25px;
  }
`;

interface CollapseBodyProps {
  isOpen?: boolean;
}

export const CollapseBody = styled.div<CollapseBodyProps>`
  display: ${(props: CollapseBodyProps) => (props.isOpen ? 'flex' : 'none')};
  width: 100%;
  height: auto;
  justify-content: center;
  padding: 25px 0;
  font-size: 18px;
  font-weight: 600;
  min-height: 100px;
  transition: all 0.3s ease-in-out;
`;

export const StatusSection = styled.div`
  width: 350px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 15px;
`;

export const StatusButton = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 10px;
  border: 1px solid RGB(216, 216, 216);
  border-radius: 10px;
  cursor: pointer;
`;

export const PriceSection = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  grid-gap: 20px;

  .price-amount {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .css-1s2u09g-control {
    height: 50px;
    border-color: RGB(216, 216, 216);
    border-radius: 10px;
  }

  .css-1pahdxg-control {
    height: 50px;
    border-color: RGB(216, 216, 216) !important;
    border-radius: 10px;
    box-shadow: none;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 25px;

  @media screen and (max-width: 1599px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemCard = styled.div`
  width: 335px;
  height: 234px;
  border: 1px solid RGB(151, 151, 151);
  border-radius: 15px;
  margin: 0 auto;
  cursor: pointer;
`;

export const ItemCardHeading = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 163px;
  background: RGB(235, 238, 240);
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    bottom: 0;
  }
`;

export const ItemCardBody = styled.div`
  width: 100%;
  display: flex;
  padding: 13px 15px 0 15px;
  justify-content: center;
  align-items: center;
`;

export const DescriptionSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 17px;
    line-height: 26px;
    letter-spacing: 0.29;
  }

  p {
    font-size: 15px;
    line-height: 26px;
    color: RGB(142, 142, 147);
  }
`;
