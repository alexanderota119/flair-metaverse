import React, { useState } from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import { GiConverseShoe, GiTrousers } from 'react-icons/gi';
import { RiTShirt2Line } from 'react-icons/ri';
import { IoArrowForwardOutline } from 'react-icons/io5';

import { StyledContainer, Wrapper, Divider, FormGroup, ItemForm, Labels, SelectType, SelectTypeCard, Generate3DObjects } from './styled';
import Header from 'containers/layout/header';
import Input from 'components/input';
import Button from 'components/button';

import Shoe1 from 'assets/images/Shoe-screenshot1.png';
import Shoe2 from 'assets/images/Shoe-screenshot2.png';
import Shoe3 from 'assets/images/Shoe-screenshot3.png';
import Shoe4 from 'assets/images/Shoe-screenshot4.png';
import Shoes3D from 'assets/images/Shoe3D-screenshot.png';

const CretionCollecton: React.FC = () => {
  const isTablet = useMediaQuery('(max-width: 800px)');

  const [selectedType, setSelectedType] = useState<number>(0);

  return (
    <StyledContainer>
      <Header />
      <Wrapper>
        <h1>Create New Item</h1>
        <ItemForm>
          {!isTablet && (
            <>
              <Labels>
                <span className="select-type">Select Type</span>
                <span className="generate-3d-objects">Generate 3D object</span>
                <span className="metadata">Metadata</span>
                <span className="item-link">Physical Item Link</span>
                <span className="collection">Collection</span>
                <span className="number-of-items">Number of Items</span>
              </Labels>
              <Divider width="1px" height="1741px" />
            </>
          )}
          <FormGroup>
            <SelectType>
              <SelectTypeCard isClicked={selectedType === 0} onClick={() => setSelectedType(0)}>
                <GiConverseShoe />
              </SelectTypeCard>
              <SelectTypeCard isClicked={selectedType === 1} onClick={() => setSelectedType(1)}>
                <RiTShirt2Line />
              </SelectTypeCard>
              <SelectTypeCard isClicked={selectedType === 2} onClick={() => setSelectedType(2)}>
                <GiTrousers />
              </SelectTypeCard>
            </SelectType>
            <Generate3DObjects>
              <div className="card-heading">
                <div className="add-more">
                  <p className="plus">+</p>
                  <p className="label">Add more</p>
                </div>
                <p className="description">More image will render better 3D item</p>
              </div>
              <div className="card-body">
                <img src={Shoe1} alt="Shoe1" />
                <img src={Shoe2} alt="Shoe2" />
                <img src={Shoe3} alt="Shoe3" />
                <img src={Shoe4} alt="Shoe4" />
              </div>
            </Generate3DObjects>
            <Button
              background="RGBA(0, 0, 0, 0.62)"
              paddingRight={24}
              paddingLeft={25}
              width={296}
              height={62}
              style={{
                marginTop: '15.5px',
              }}
            >
              <span>Generate Virtual Item</span>
              <IoArrowForwardOutline />
            </Button>
            <div className="completed-obj">
              <img src={Shoes3D} alt="Shoes3D" width={587.3} height={329} />
            </div>
            <span className="form-label">Name</span>
            <Input width={794} height={69} fontSize={31} borderRadius="14px" borderColor="RGB(175, 175, 175)" />
            <span className="form-label">URL</span>
            <Input width={794} height={69} fontSize={31} borderRadius="14px" borderColor="RGB(175, 175, 175)" />
            <span className="form-label">Description</span>
            <Input width={794} height={69} fontSize={31} borderRadius="14px" borderColor="RGB(175, 175, 175)" />
            <span className="form-label">URL</span>
            <Input width={794} height={69} fontSize={31} borderRadius="14px" borderColor="RGB(175, 175, 175)" />
            <span className="form-label">Collection</span>
            <Input width={794} height={69} fontSize={31} borderRadius="14px" borderColor="RGB(175, 175, 175)" />
            <span className="form-label">Number of Items</span>
            <Input width={794} height={69} fontSize={31} borderRadius="14px" borderColor="RGB(175, 175, 175)" />
          </FormGroup>
        </ItemForm>
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
          <span>Mint NFT</span>
          <IoArrowForwardOutline />
        </Button>
      </Wrapper>
    </StyledContainer>
  );
};

export default CretionCollecton;
