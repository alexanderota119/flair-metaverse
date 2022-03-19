/**import modules */
import React from 'react';
/**import styled components */
import { StyledContainer, TitleSection } from './styled';
/**import images */
import FacesImg from 'assets/images/Faces.png';
import ScreenshotImg from 'assets/images/Screenshot.png';
import PersonImg from 'assets/images/Person.png';

const AvatarContainer: React.FC = () => {
  return (
    <StyledContainer>
      <TitleSection>
        <h2>Create Your Own Avatar</h2>
        <span>Assemble your digital self with just 3 photos and start dripping out your avatar </span>
      </TitleSection>
      <div className="faces">
        <img src={FacesImg} alt="Faces" width={543} height={349} />
        <span>3 selfies</span>
      </div>
      <div className="screenshot">
        <img src={ScreenshotImg} alt="Screenshot" width={666} height={388} />
        <span>
          AI-powered
          <br /> 3D reconstruction
        </span>
      </div>
      <div className="person">
        <img src={PersonImg} alt="Person" width={510} height={415} />
        <span>
          Personalized Avatar
          <br /> in the Metaverse
        </span>
      </div>
    </StyledContainer>
  );
};

export default AvatarContainer;
