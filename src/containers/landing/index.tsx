/**import modules */
import React from 'react';
/**import styl;ed components */
import { StyledContainer } from './styled';
/**import containers */
import Header from './layout/header';
import IntroductionContainer from './introduction';
import MetaverseContainer from './metaverse';
import CollectionsContainer from './collections';
import Footer from './layout/footer';

const Landing: React.FC = () => {
  return (
    <StyledContainer>
      <Header />
      <IntroductionContainer />
      <MetaverseContainer />
      <CollectionsContainer />
      <Footer />
    </StyledContainer>
  );
};

export default Landing;
