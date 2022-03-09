import React from 'react';

import { CreateProfileContainer } from './styled';
import { StyledContainer } from 'containers/landing/styled';
import Header from 'containers/landing/layout/header';
import Footer from 'containers/landing/layout/footer';

const CreateProfile: React.FC = () => {
  return (
    <StyledContainer>
      <Header />
      <CreateProfileContainer>
        <h1>Coming Soon...</h1>
      </CreateProfileContainer>
      <Footer />
    </StyledContainer>
  );
};

export default CreateProfile;
