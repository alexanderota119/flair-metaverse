import styled from 'styled-components';

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
    margin-top: 105px;
    margin-left: 271px;
    font-size: 58px;
    font-weight: 700;

    @media screen and (max-width: 1599px) {
      margin-left: 0;
    }

    @media screen and (max-width: 639px) {
      font-size: 45px;
    }

    @media screen and (max-width: 500px) {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 1599px) {
    align-items: center;
  }
`;

export const CollectionForm = styled.div`
  margin-left: 376px;
  margin-top: 42px;
  display: flex;
  /* border: 1px solid blue; */

  @media screen and (max-width: 1599px) {
    margin-left: 0;
  }
`;

export const Labels = styled.div`
  margin-right: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* border: 1px solid blue; */

  span {
    font-weight: 700;
    font-size: 20px;
  }

  .images {
    margin-top: 10px;
  }

  .metadata {
    margin-top: 828px;
  }

  .store {
    margin-top: 358px;
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
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 10px 10px 20px;
  /* border: 1px solid blue; */

  @media screen and (max-width: 639px) {
    margin-left: 0;
    padding: 0;
    padding-bottom: 10px;
  }

  p {
    font-size: 15px;
    font-weight: 700;
    color: RGB(118, 118, 118);
    margin-top: 10px;

    @media screen and (max-width: 1599px) {
      width: 794px;
    }

    @media screen and (max-width: 1023px) {
      width: 650px;
    }

    @media screen and (max-width: 850px) {
      width: 400px;
    }

    @media screen and (max-width: 500px) {
      width: 350px;
    }
  }

  span {
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
  }

  h3 {
    margin-top: 25px;
    font-size: 20px;
    font-weight: 400;
  }

  input {
    margin-top: 8.5px;

    @media screen and (max-width: 1023px) {
      width: 650px;
    }

    @media screen and (max-width: 850px) {
      width: 400px;
    }

    @media screen and (max-width: 500px) {
      width: 350px;
    }
  }

  .banner-image {
    @media screen and (max-width: 850px) {
      width: 400px;
    }

    @media screen and (max-width: 500px) {
      width: 350px;
    }
  }
`;

interface ImageUploadProps {
  width: number;
  height: number;
  borderRadius: string;
}

export const ImageUpload = styled.div<ImageUploadProps>`
  margin-top: 10px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border: 3px dotted RGB(175, 175, 175);
  border-radius: ${({ borderRadius }) => borderRadius};
  display: flex;

  .icon {
    width: 60px;
    height: 60px;
    border-radius: 7px;
    background: RGB(175, 175, 175);
    color: white;
    margin: auto;
    display: flex;
    font-size: 40px;

    svg {
      margin: auto;
    }
  }
`;
