/**import modules */
import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
/**import styled components */
import { StyledContainer, MetaverseImg, Shape } from './styled';
/**import custom components */
import Button from 'components/button';
/**import images */
import Home_People_1_Img from 'assets/images/Home-people-1.png';

const MetaverseContainer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 425px)');
  return (
    <>
      <StyledContainer>
        <MetaverseImg src={Home_People_1_Img} alt="Home-people-1-img" />
        <Shape>
          <h1>Enter Flair’s Metaverse</h1>
          <h3>Build your own space and explore the world of fashion </h3>
          <Button width={!isMobile ? 331 : 280} height={62} background="#000000" paddingLeft={26} paddingRight={30}>
            <span>Start Now</span>
            <span>→</span>
          </Button>
        </Shape>
      </StyledContainer>
    </>
  );
};

export default MetaverseContainer;
