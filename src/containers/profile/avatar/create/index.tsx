/**import modules */
import React from 'react';
import { useNavigate } from 'react-router-dom';
/**import styled components */
import { StyledContainer, AvatarSection, AvatarOut, Avatar } from './styled';
/**import layout */
import Header from 'containers/profile/layout/header';
/**import custom components */
import Button from 'components/button';
/**import images */
import Face1Img from 'assets/images/Face-1.png';
import Face2Img from 'assets/images/Face-2.png';
import Face3Img from 'assets/images/Face-3.png';

const CreateAvatar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <Header />
      <h2>Create Your Avatar</h2>
      <h3>Simply upload three sides of your picture, and you’re ready to go!</h3>
      <AvatarSection>
        <AvatarOut>
          <Avatar>
            <img src={Face1Img} alt="face1" width={167} height={250} />
          </Avatar>
          <span>Front</span>
        </AvatarOut>
        <AvatarOut>
          <Avatar>
            <img src={Face2Img} alt="face2" width={182} height={244} />
          </Avatar>
          <span>3/4</span>
        </AvatarOut>
        <AvatarOut>
          <Avatar>
            <img src={Face3Img} alt="face3" width={221} height={269} />
          </Avatar>
          <span>Side</span>
        </AvatarOut>
      </AvatarSection>
      <Button
        background="RGBA(0, 0, 0)"
        paddingRight={30}
        paddingLeft={26}
        width={331}
        height={62}
        style={{
          marginTop: '50px',
        }}
        onClick={() => navigate('/profile/avatar/upload')}
      >
        <span>Start Uploading Pictures</span>
        <span>→</span>
      </Button>
    </StyledContainer>
  );
};

export default CreateAvatar;
