import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import { SiEthereum } from 'react-icons/si';
import { IoArrowForwardOutline } from 'react-icons/io5';

import {
  StyledContainer,
  IntroductionBackground,
  TitleSection,
  SubTitleSection,
  ItemInfo,
  InfoSection,
  LeftSection,
  OwnerCard,
  Divider,
  ContractInfo,
  RightSection,
  TransactionInfo,
  LastTransaction,
  Circulation,
  BuySection,
  BuyList,
  BuyItem,
  Offers,
  BidButton,
  OfferList,
  OfferItem,
  PriceHistory,
  ItemActivity,
  BuyListWrapper,
} from './styled';
import Header from 'containers/layout/header';
import Button from 'components/button';

import Commonshoe from 'assets/images/Common-shoe.png';
import ItemIcon from 'assets/icons/Item.png';
import CollectionIcon from 'assets/icons/Collection.png';
import StoreIcon from 'assets/icons/Store.png';
import TickIcon from 'assets/icons/Tick.png';
import OwnerCommon from 'assets/images/Owner-common.png';

const ItemCommon: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 425px)');

  return (
    <StyledContainer>
      <Header />
      <IntroductionBackground>
        <img className="common-shoe" src={Commonshoe} alt="Common Shoe" />
        <div className="item-icon">
          <img src={ItemIcon} alt="Item Icon" />
        </div>
      </IntroductionBackground>
      <TitleSection>
        <h1>Forum 84 HI AEC</h1>
        <SubTitleSection>
          <div className="sub-title">
            <img src={CollectionIcon} alt="CollectionIcon" width={20} height={19.5} />
            <span>Adidas</span>
            <img src={TickIcon} alt="TickIcon" width={20.4} height={20} />
          </div>
          <div className="sub-title">
            <img src={StoreIcon} alt="CollectionIcon" width={19.6} height={19.6} />
            <span>Adidas Lifestyle</span>
            <img src={TickIcon} alt="TickIcon" width={20.4} height={20} />
          </div>
        </SubTitleSection>
        <Button
          background="RGBA(0, 0, 0, 0.62)"
          paddingRight={24}
          paddingLeft={30}
          width={isMobile ? 355 : 385}
          height={62}
          style={{ marginTop: '34.2px' }}
        >
          <span>Buy physical one from Adidas</span>
          <IoArrowForwardOutline />
        </Button>
      </TitleSection>
      <ItemInfo>
        <InfoSection>
          <LeftSection>
            <h3>Owner</h3>
            <OwnerCard>
              <img src={OwnerCommon} width={324.4} height={252} alt="Owner" />
            </OwnerCard>
            <span className="name">Owned by 1213 people</span>
            <span className="see-all">see all owners →</span>
            <h4>About This Item</h4>
            <p>
              Vintage pair or straight out of the box? It's hard to tell the difference with these adidas Forum trainers. They have a worn-in look
              that easily could have spent the last three decades in your closet. All the iconic elements are here, from the X-ankle and padded tongue
              to the beautifully-layered upper. Leather has a premium look and feel.
            </p>
            <Divider />
            <ContractInfo>
              <span className="left">Contract Address</span>
              <span className="right">0x7825...a3c8</span>
              <span className="left">Token ID</span>
              <span className="right">2065</span>
              <span className="left">Token Standard</span>
              <span className="right">ERC-721</span>
              <span className="left">Blockchain</span>
              <span className="right">Ethereum</span>
            </ContractInfo>
          </LeftSection>
          <RightSection>
            <TransactionInfo>
              <LastTransaction>
                <h4>Last Transaction</h4>
                <div className="info">
                  <div className="amount-eth">
                    <SiEthereum />
                    <span>0.1</span>
                  </div>
                  <span className="amount-usd">~$527.87</span>
                  <span className="send">Adidas → jack111</span>
                  <span className="amount-usd">March 2, 2022</span>
                </div>
              </LastTransaction>
              <Circulation>
                <h4>In Circulation</h4>
                <span>2000 items</span>
              </Circulation>
            </TransactionInfo>
            <BuySection>
              <div className="header">
                <h4>Buy Now</h4>
              </div>
              <BuyListWrapper>
                <BuyList>
                  <BuyItem>
                    <div className="amount">
                      <span className="eth">0.09 ETH</span>
                      <span className="usd">~$400</span>
                    </div>
                    <div className="other">
                      <span className="items">5 items</span>
                      <div className="userinfo">
                        <span className="by">by</span>
                        <span className="account">tony1235</span>
                      </div>
                      <BidButton>Buy Now</BidButton>
                    </div>
                  </BuyItem>
                  <BuyItem>
                    <div className="amount">
                      <span className="eth">0.1 ETH</span>
                      <span className="usd">~$527.87</span>
                    </div>
                    <div className="other">
                      <span className="items">327 items</span>
                      <div className="userinfo">
                        <span className="by">by</span>
                        <span className="account">Adidas</span>
                      </div>
                      <BidButton>Buy Now</BidButton>
                    </div>
                  </BuyItem>
                  <BuyItem>
                    <div className="amount">
                      <span className="eth">0.11 ETH</span>
                      <span className="usd">~$600</span>
                    </div>
                    <div className="other">
                      <span className="items">8 items</span>
                      <div className="userinfo">
                        <span className="by">by</span>
                        <span className="account">0x992d…k9182</span>
                      </div>
                      <BidButton>Buy Now</BidButton>
                    </div>
                  </BuyItem>
                </BuyList>
              </BuyListWrapper>
              <span className="more">more offers</span>
            </BuySection>
            <Offers>
              <div className="header">
                <h4>Offers</h4>
                <BidButton>Place Bid</BidButton>
              </div>
              <OfferList>
                <OfferItem>
                  <div className="amount">
                    <span className="eth">0.05 ETH</span>
                    <span className="usd">~$300</span>
                  </div>
                  <div className="userinfo">
                    <span className="by">by</span>
                    <span className="account">tony1235</span>
                  </div>
                </OfferItem>
                <OfferItem>
                  <div className="amount">
                    <span className="eth">0.04 ETH</span>
                    <span className="usd">~$200</span>
                  </div>
                  <div className="userinfo">
                    <span className="by">by</span>
                    <span className="account">jack992</span>
                  </div>
                </OfferItem>
                <OfferItem>
                  <div className="amount">
                    <span className="eth">0.03 ETH</span>
                    <span className="usd">~$100</span>
                  </div>
                  <div className="userinfo">
                    <span className="by">by</span>
                    <span className="account">0x992d…k9182</span>
                  </div>
                </OfferItem>
              </OfferList>
              <span className="more">more offers</span>
            </Offers>
            <PriceHistory>
              <h4>Price History</h4>
            </PriceHistory>
            <ItemActivity>
              <h4>Item Activity</h4>
            </ItemActivity>
          </RightSection>
        </InfoSection>
      </ItemInfo>
    </StyledContainer>
  );
};

export default ItemCommon;
