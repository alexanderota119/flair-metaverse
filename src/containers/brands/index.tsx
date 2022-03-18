/**import modules */
import React from 'react';
/**import styled components */
import { StyledContainer, Cards, Card, Divider } from './styled';
/**import layout */
import Header from '../layout/header';
/**import custom components */
import Button from 'components/button';
/**import assets */
import Brand1_Img from 'assets/images/Brand1.png';
import Brand2_Img from 'assets/images/Brand2.png';
import Brand3_Img from 'assets/images/Brand3.png';
import Brand4_Img from 'assets/images/Brand4.png';
import Brand5_Img from 'assets/images/Brand5.png';
import Brand6_Img from 'assets/images/Brand6.png';

const Brands: React.FC = () => {
  return (
    <StyledContainer>
      <Header />
      <h2>All Brands</h2>
      <Cards>
        <Card>
          <h3>Ralph Lauren</h3>
          <figure>
            <img src={Brand1_Img} alt="Brand1" />
          </figure>
          <Button
            background="RGBA(0, 0, 0, 0.62)"
            paddingRight={11}
            paddingLeft={25}
            width={316}
            height={62}
            // onClick={() => navigate('/profile')}
          >
            <span>Enter Store’s Space</span>
            <span>→</span>
          </Button>
          <Divider />
        </Card>
        <Card>
          <h3>Fendi</h3>
          <figure>
            <img src={Brand2_Img} alt="Brand2" />
          </figure>
          <Button
            background="RGBA(0, 0, 0, 0.62)"
            paddingRight={11}
            paddingLeft={25}
            width={316}
            height={62}
            // onClick={() => navigate('/profile')}
          >
            <span>Enter Store’s Space</span>
            <span>→</span>
          </Button>
          <Divider />
        </Card>
        <Card>
          <h3>Vacheron Constantin</h3>
          <figure>
            <img src={Brand3_Img} alt="Brand3" />
          </figure>
          <Button
            background="RGBA(0, 0, 0, 0.62)"
            paddingRight={11}
            paddingLeft={25}
            width={316}
            height={62}
            // onClick={() => navigate('/profile')}
          >
            <span>Enter Store’s Space</span>
            <span>→</span>
          </Button>
          <Divider />
        </Card>
        <Card>
          <h3>Christian Dior</h3>
          <figure>
            <img src={Brand4_Img} alt="Brand4" />
          </figure>
          <Button
            background="RGBA(0, 0, 0, 0.62)"
            paddingRight={11}
            paddingLeft={25}
            width={316}
            height={62}
            // onClick={() => navigate('/profile')}
          >
            <span>Enter Store’s Space</span>
            <span>→</span>
          </Button>
          <Divider />
        </Card>
        <Card>
          <h3>Mytheresa</h3>
          <figure>
            <img src={Brand5_Img} alt="Brand5" />
          </figure>
          <Button
            background="RGBA(0, 0, 0, 0.62)"
            paddingRight={11}
            paddingLeft={25}
            width={316}
            height={62}
            // onClick={() => navigate('/profile')}
          >
            <span>Enter Store’s Space</span>
            <span>→</span>
          </Button>
        </Card>
        <Card>
          <h3>Lee</h3>
          <figure>
            <img src={Brand6_Img} alt="Brand6" />
          </figure>
          <Button
            background="RGBA(0, 0, 0, 0.62)"
            paddingRight={11}
            paddingLeft={25}
            width={316}
            height={62}
            // onClick={() => navigate('/profile')}
            style={{
              marginBottom: '83px',
            }}
          >
            <span>Enter Store’s Space</span>
            <span>→</span>
          </Button>
        </Card>
      </Cards>
    </StyledContainer>
  );
};

export default Brands;
