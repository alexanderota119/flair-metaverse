import styled from 'styled-components';

import Back3D from 'assets/images/Back3D.png';

export const StyledContainer = styled.div`
  width: 100vw;
  height: auto;
  background: white;
  min-height: 100vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 58px;
    font-weight: 700;
    margin-top: 73.5px;
    margin-left: 271px;

    @media screen and (max-width: 1151px) {
      align-self: center;
      margin-left: 0;
    }

    @media screen and (max-width: 550px) {
      font-size: 45px;
    }

    @media screen and (max-width: 424px) {
      font-size: 40px;
    }
  }
`;

export const ItemForm = styled.div`
  align-self: center;
  margin-top: 31.5px;
  display: flex;
  margin-bottom: 10px;
`;

export const Labels = styled.div`
  margin-right: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* border: 1px solid blue; */

  span {
    font-size: 20px;
    font-weight: 700;
  }

  .select-type {
    margin-top: 10px;
  }

  .generate-3d-objects {
    margin-top: 176px;
  }

  .metadata {
    margin-top: 748px;
  }

  .item-link {
    margin-top: 337px;
  }

  .collection {
    margin-top: 96px;
  }

  .number-of-items {
    margin-top: 93px;
  }
`;

interface DividerProps {
  width: string;
  height: string;
}

export const Divider = styled.div<DividerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: RGB(216, 216, 216);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 26.5px;
  margin-left: 26.5px;
  /* border: 1px solid blue; */

  @media screen and (max-width: 800px) {
    margin-left: 0;
    padding: 0;
  }

  .form-label {
    margin-top: 18px;
    font-size: 20px;
  }

  input {
    margin-top: 8px;

    @media screen and (max-width: 1100px) {
      width: 500px !important;
    }

    @media screen and (max-width: 550px) {
      width: 400px !important;
    }

    @media screen and (max-width: 424px) {
      width: 350px !important;
    }
  }

  .completed-obj {
    background: url(${Back3D}) no-repeat;
    background-size: 100% 100%;
    margin-top: 17.5px;
    width: 794px;
    height: 336px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1100px) {
      width: 500px;
      img {
        width: 400px;
        height: auto;
      }
    }

    @media screen and (max-width: 550px) {
      width: 400px;
    }

    @media screen and (max-width: 424px) {
      width: 350px;
      align-self: center;

      img {
        width: 350px;
        height: auto;
      }
    }
  }
`;

export const SelectType = styled.div`
  display: flex;
  grid-gap: 21.5px;
  @media screen and (max-width: 550px) {
    align-self: center;
  }
`;

interface SelectTypeCardProps {
  isClicked?: boolean;
}

export const SelectTypeCard = styled.div<SelectTypeCardProps>`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid ${({ isClicked }) => (isClicked ? 'RGB(74, 144, 226)' : 'RGB(197, 197, 197)')};
  background: RGBA(214, 214, 214, 0.07);
  font-size: 60px;
  cursor: pointer;
  color: ${({ isClicked }) => (isClicked ? 'RGB(74, 144, 226)' : 'black')};

  @media screen and (max-width: 550px) {
    width: 100px;
    height: 100px;
  }
`;

export const Generate3DObjects = styled.div`
  margin-top: 35px;
  width: 794px;
  height: 336px;
  border-radius: 15px;
  border: 1px solid RGB(175, 175, 175);

  @media screen and (max-width: 1100px) {
    width: 500px;
  }

  @media screen and (max-width: 550px) {
    width: 400px;
  }

  @media screen and (max-width: 424px) {
    width: 350px;
    align-self: center;
  }

  .card-heading {
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px 0 26px;
    border-bottom: 1px solid RGB(175, 175, 175);

    .add-more {
      display: flex;
      align-items: center;
      grid-gap: 7px;
      color: rgb(74, 144, 226);
      cursor: pointer;
      font-weight: 700;

      .label {
        font-size: 14px;
      }

      .plus {
        font-size: 22px;
      }

      :hover {
        .label {
          border-bottom: 1px solid rgb(74, 144, 226);
        }
      }
    }

    .description {
      font-size: 16px;
      color: RGB(118, 118, 118);
    }
  }

  .card-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 14.1px 21.3px;
    overflow: auto;
  }
`;
