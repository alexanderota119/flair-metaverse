/**import modules */
import React from 'react';
/**import styled components */
import { StyledContainer } from './styled';
/**import layout */
import Header from 'containers/landing/layout/header';
import Footer from 'containers/landing/layout/footer';
/**import containers */
import CreateVSContainer from './create-vs';
import NFTCollectionsContainer from './nft-collections';
import ItemsContainer from './items';
import ShowRoomContainer from './showroom';
import CommunityContainer from './community';

const VirtualStore: React.FC = () => {
  return (
    <StyledContainer>
      <Header />
      <CreateVSContainer />
      <NFTCollectionsContainer />
      <ItemsContainer />
      <ShowRoomContainer />
      <CommunityContainer />
      <Footer />
    </StyledContainer>
  );
};

export default VirtualStore;
