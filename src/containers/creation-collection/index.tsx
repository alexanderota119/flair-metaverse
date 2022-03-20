import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import { BsImageAlt } from 'react-icons/bs';
import { IoArrowForwardOutline } from 'react-icons/io5';

import { StyledContainer, Wrapper, CollectionForm, Labels, Divider, FormGroup, ImageUpload } from './styled';
import Header from 'containers/layout/header';
import Input from 'components/input';
import Button from 'components/button';

const CretionCollecton: React.FC = () => {
  const isTablet = useMediaQuery('(max-width: 639px)');

  return (
    <StyledContainer>
      <Header />
      <Wrapper>
        <h1>Create a Collection</h1>
        <CollectionForm>
          {!isTablet && (
            <>
              <Labels>
                <span className="images">Images</span>
                <span className="metadata">Metadata</span>
                <span className="store">Store</span>
              </Labels>
              <Divider width="1px" height="1409px" />
            </>
          )}
          <FormGroup>
            <p>Required fields</p>
            <span>Logo image</span>
            <p>This image will also be used for navigation. 350 x 350 recommended.</p>
            <ImageUpload width={160} height={160} borderRadius="50%">
              <div className="icon">
                <BsImageAlt />
              </div>
            </ImageUpload>
            <span>Featured image</span>
            <p>
              This image will be used for featuring your collection on the homepage, category pages, or other promotional area of Opensea. 600 x 400
              recommended.
            </p>
            <ImageUpload width={300} height={200} borderRadius="10px">
              <div className="icon">
                <BsImageAlt />
              </div>
            </ImageUpload>
            <span>Banner image</span>
            <p>
              This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimesions change
              on different devices.
            </p>
            <ImageUpload className="banner-image" width={650} height={200} borderRadius="10px">
              <div className="icon">
                <BsImageAlt />
              </div>
            </ImageUpload>
            <h3>Name</h3>
            <Input width={794} height={69} fontSize={31} borderRadius="14px" borderColor="RGB(175, 175, 175)" />
            <h3>URL</h3>
            <Input width={794} height={69} fontSize={31} borderRadius="14px" borderColor="RGB(175, 175, 175)" />
            <h3>Description</h3>
            <Input width={794} height={69} fontSize={31} borderRadius="14px" borderColor="RGB(175, 175, 175)" />
            <h3>Store (Optional)</h3>
            <Input width={794} height={69} fontSize={31} borderRadius="14px" borderColor="RGB(175, 175, 175)" />
          </FormGroup>
        </CollectionForm>
        <Divider width="100%" height="1px" />
        <Button
          background="RGB(74, 144, 226)"
          paddingRight={24}
          paddingLeft={25}
          width={296}
          height={62}
          style={{
            marginTop: '20px',
          }}
        >
          <span>Create Collection</span>
          <IoArrowForwardOutline />
        </Button>
      </Wrapper>
    </StyledContainer>
  );
};

export default CretionCollecton;
