import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';

import { StyledContainer, Wrapper, TitleSection, Contents, SubTitleSection, Divider, MainSection, StorePhotos, TabletContents } from './styled';
import Header from 'containers/layout/header';

import Photo from 'assets/images/Photo.png';
import Bitmap6 from 'assets/images/Bitmap6.png';

const CreationStore: React.FC = () => {
  const isTablet = useMediaQuery('(max-width: 639px)');

  return (
    <StyledContainer>
      <Header />
      <Wrapper>
        <TitleSection>
          <h1>Create a Store</h1>
        </TitleSection>
        {!isTablet ? (
          <Contents>
            <SubTitleSection>
              <h3>Images</h3>
              <h3>Floor Plan</h3>
            </SubTitleSection>
            <Divider />
            <MainSection>
              <h3>{'[Store Photos]'}</h3>
              <StorePhotos>
                <img src={Photo} alt="Photo" />
                <img src={Photo} alt="Photo" />
                <img src={Photo} alt="Photo" />
                <img src={Photo} alt="Photo" />
                <img src={Photo} alt="Photo" />
                <img src={Photo} alt="Photo" />
                <img src={Photo} alt="Photo" />
                <img src={Photo} alt="Photo" />
              </StorePhotos>
              <img className="floor-plan" src={Bitmap6} alt="Bitmap6" />
            </MainSection>
          </Contents>
        ) : (
          <TabletContents>
            <span>Images/[Store Photos]</span>
            <StorePhotos>
              <img src={Photo} alt="Photo" />
              <img src={Photo} alt="Photo" />
              <img src={Photo} alt="Photo" />
              <img src={Photo} alt="Photo" />
              <img src={Photo} alt="Photo" />
              <img src={Photo} alt="Photo" />
              <img src={Photo} alt="Photo" />
              <img src={Photo} alt="Photo" />
            </StorePhotos>
            <span className="tablet-floor-plan">Floor Plan</span>
            <img className="floor-plan" src={Bitmap6} alt="Bitmap6" />
          </TabletContents>
        )}
      </Wrapper>
    </StyledContainer>
  );
};

export default CreationStore;
