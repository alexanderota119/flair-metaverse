/**import modules */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowForwardOutline } from 'react-icons/io5';
/**import styled components */
import { StyledContainer, AvatarSection, AvatarOut, Avatar } from './styled';
/**import layout */
import Header from 'containers/layout/header';
/**import custom components */
import Button from 'components/button';
/**import images */
import Face1Img from 'assets/images/RealFace-1.png';
import Face2Img from 'assets/images/RealFace-2.png';
import Face3Img from 'assets/images/RealFace-3.png';

const UploadAvatar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <Header />
      <h2>Upload Pictures</h2>
      <AvatarSection>
        <AvatarOut>
          <Avatar>
            <img src={Face1Img} alt="face1" width={288} height={401} />
          </Avatar>
          <span>Front</span>
        </AvatarOut>
        <AvatarOut>
          <Avatar>
            <img src={Face2Img} alt="face2" width={266} height={400} />
          </Avatar>
          <span>3/4</span>
        </AvatarOut>
        <AvatarOut>
          <Avatar>
            <img src={Face3Img} alt="face3" width={264} height={400} />
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
        onClick={() => navigate('/profile/avatar')}
      >
        <span>Create Avatar</span>
        <IoArrowForwardOutline />
      </Button>
    </StyledContainer>
  );
};

export default UploadAvatar;
