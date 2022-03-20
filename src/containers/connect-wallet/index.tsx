import React from 'react';

import { StyledContainer, Wrapper } from './styled';
import Header from 'containers/layout/header';

const CretionCollecton: React.FC = () => {
  return (
    <StyledContainer>
      <Header />
      <Wrapper>
        <h1>Connect your Wallet</h1>
      </Wrapper>
    </StyledContainer>
  );
};

export default CretionCollecton;
