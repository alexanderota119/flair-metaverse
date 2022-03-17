/**import modules */
import React from 'react';
import { useNavigate } from 'react-router-dom';
/**import styled components */
import { StyledContainer, Avatar } from './styled';
/**import layout */
import Header from 'containers/layout/header';
/**import custom components */
import Button from 'components/button';
/**import images */
import Face_Result_Img from 'assets/images/RealFace-Result.png';

const HiAvatar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <Header />
      <h2>Say Hi to your Avatar!</h2>
      <Avatar>
        <img src={Face_Result_Img} alt="face1" width={402} height={401} />
      </Avatar>
      <Button
        background="RGBA(0, 0, 0)"
        paddingRight={30}
        paddingLeft={26}
        width={331}
        height={62}
        style={{
          marginTop: '50px',
        }}
        onClick={() => navigate('/profile')}
      >
        <span>Back to Profile</span>
        <span>→</span>
      </Button>
    </StyledContainer>
  );
};

export default HiAvatar;
