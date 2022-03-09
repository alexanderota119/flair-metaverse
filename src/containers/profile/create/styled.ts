import styled from 'styled-components';
import Home_Bg_1_Img from 'assets/images/Home-bg-1.png';

export const CreateProfileContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${Home_Bg_1_Img}) no-repeat;
  background-size: 100% 100%;
  height: 729px;
  margin-bottom: 100px;

  @media screen and (max-width: 1600px) {
    background-size: cover;
    background-position: center;
  }

  h1 {
    width: 945px;
    color: white;
    font-size: 110px;
    font-weight: 700;
    line-height: 117px;
    text-align: center;
    @media screen and (max-width: 1000px) {
      width: 800px;
      font-size: 90px;
      line-height: 97px;
    }
    @media screen and (max-width: 800px) {
      width: 600px;
      font-size: 85px;
      line-height: 90px;
    }
    @media screen and (max-width: 550px) {
      width: 450px;
      font-size: 70px;
    }
    @media screen and (max-width: 450px) {
      font-size: 60px;
      width: 380px;
    }
  }
`;
