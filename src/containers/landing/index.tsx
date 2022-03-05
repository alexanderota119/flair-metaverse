/**import modules */
import React from 'react';
/**import containers */
import Header from './layout/header';
import IntroductionContainer from './introduction';
import MetaverseContainer from './metaverse';
import CollectionsContainer from './collections';
import Footer from './layout/footer';

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <IntroductionContainer />
      <MetaverseContainer />
      <CollectionsContainer />
      <Footer />
    </>
  );
};

export default Landing;
