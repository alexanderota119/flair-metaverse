/**import modules */
import React from 'react';
/**import styled components */
import { StyledContainer } from './styled';
/**import assets */
import Community from 'assets/images/Community.png';

const CommunityContainer: React.FC = () => {
  return (
    <StyledContainer>
      <h2>Build the Community</h2>
      <h3>Start a fan base of your brand in the metaverse</h3>
      <img src={Community} alt="Community" width={1600} height={590} />
    </StyledContainer>
  );
};

export default CommunityContainer;
