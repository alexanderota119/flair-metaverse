/**import modules */
import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import { ImArrowRight2, ImArrowDown2 } from 'react-icons/im';
/**import styled components */
import { StyledContainer, TitleSection, DigitizeProducts, ProductAssetsTitle, ProductViews, ProductView, Card } from './styled';
/**import images */
import ShoesImg from 'assets/images/Shoes.png';
import Shoes3DImg from 'assets/images/Shoes3D.png';

const CreateVSContainer: React.FC = () => {
  const isArrowDown = useMediaQuery('(max-width: 1100px)');

  return (
    <StyledContainer>
      <TitleSection>
        <h1>Create Your Virtual Store in the Metaverse</h1>
      </TitleSection>
      <DigitizeProducts>
        <ProductAssetsTitle>
          <h2>Digitize your product assets</h2>
          <span>Easily convert your products to 3D metaverse items</span>
        </ProductAssetsTitle>
        <ProductViews>
          <ProductView>
            <Card>
              <img className="shoes" src={ShoesImg} alt="Shoes" />
            </Card>
            <span>
              Some photos of
              <br /> the product
            </span>
          </ProductView>
          {isArrowDown ? <ImArrowDown2 /> : <ImArrowRight2 />}
          <ProductView>
            <Card>
              <img className="shoes-3d" src={Shoes3DImg} alt="Shoes 3D" />
            </Card>
            <span>
              3D object on the
              <br /> Metaverse
            </span>
          </ProductView>
        </ProductViews>
      </DigitizeProducts>
    </StyledContainer>
  );
};

export default CreateVSContainer;
