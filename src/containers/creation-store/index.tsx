import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';

import { StyledContainer, Wrapper, TitleSection, Contents, SubTitleSection, Divider, MainSection, StorePhotos, TabletContents } from './styled';
import Header from 'containers/layout/header';

import StorePhoto from 'assets/images/Photo.png';
import Bitmap6 from 'assets/images/Bitmap6.png';

const CreationStore: React.FC = () => {
  const isTablet = useMediaQuery('(max-width: 639px)');

  const StoprePhotoView = (
    <StorePhotos>
      <img src={StorePhoto} alt="StorePhoto" />
      <img src={StorePhoto} alt="StorePhoto" />
      <img src={StorePhoto} alt="StorePhoto" />
      <img src={StorePhoto} alt="StorePhoto" />
      <img src={StorePhoto} alt="StorePhoto" />
      <img src={StorePhoto} alt="StorePhoto" />
      <img src={StorePhoto} alt="StorePhoto" />
      <img src={StorePhoto} alt="StorePhoto" />
    </StorePhotos>
  );

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
              {StoprePhotoView}
              <img className="floor-plan" src={Bitmap6} alt="Bitmap6" />
            </MainSection>
          </Contents>
        ) : (
          <TabletContents>
            <span>Images/[Store Photos]</span>
            {StoprePhotoView}
            <span className="tablet-floor-plan">Floor Plan</span>
            <img className="floor-plan" src={Bitmap6} alt="Bitmap6" />
          </TabletContents>
        )}
      </Wrapper>
    </StyledContainer>
  );
};

export default CreationStore;
