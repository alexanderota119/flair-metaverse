/**import modules */
import React from 'react';
import { useNavigate } from 'react-router-dom';
/**import styled components */
import { StyledContainer, ItemViews, ItemView, Card, Description } from './styled';
/**import assets */
import VS_shoes_1_Img from 'assets/images/VS-shoes-1.png';
import VS_shoes_2_Img from 'assets/images/VS-shoes-2.png';

const ItemsContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <h2>Common or Rare Item</h2>
      <h3>During minting, set the amount of available NFTs</h3>
      <ItemViews>
        <ItemView>
          <Card onClick={() => navigate('/item-common')}>
            <div className="card-header">
              <img className="shoe1" src={VS_shoes_1_Img} alt="VS shoes 1" />
            </div>
            <div className="card-content">
              <span>Nike Blazer Mid '77 EMB</span>
              <p>Nike</p>
            </div>
            <div className="card-footer">
              <span>In Circulation</span>
              <p>x 100,000</p>
            </div>
          </Card>
          <Description>
            <span>Common Item</span>
            <p>
              Allows your item to reach andM
              <br />
              be owned by more people
            </p>
          </Description>
        </ItemView>
        <ItemView>
          <Card onClick={() => navigate('/item-rare')}>
            <div className="card-header">
              <img className="shoe2" src={VS_shoes_2_Img} alt="VS shoes 2" />
            </div>
            <div className="card-content">
              <span>Nike Waffle One</span>
              <p>Nike</p>
            </div>
            <div className="card-footer">
              <span>In Circulation</span>
              <p>x 100</p>
            </div>
          </Card>
          <Description>
            <span>Rare Item</span>
            <p>
              Preserve the value of the item
              <br />
              and ensure resellability
            </p>
          </Description>
        </ItemView>
      </ItemViews>
    </StyledContainer>
  );
};

export default ItemsContainer;
