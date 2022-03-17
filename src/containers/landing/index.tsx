/**import modules */
import React from 'react';
/**import styled components */
import { StyledContainer } from './styled';
/**import containers */
import Header from './layout/header';
import IntroductionContainer from './introduction';
import MetaverseContainer from './metaverse';
import AvatarContainer from './avatar';
import CollectionsContainer from './collections';
import Footer from './layout/footer';

const Landing: React.FC = () => {
  return (
    <StyledContainer>
      <Header />
      <IntroductionContainer />
      <MetaverseContainer />
      <AvatarContainer />
      <CollectionsContainer />
      <Footer />
    </StyledContainer>
  );
};

export default Landing;
