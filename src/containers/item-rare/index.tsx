import React from 'react';
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
  NameSection,
  ContractCard,
  Divider,
  ContractInfo,
  RightSection,
  TransactionInfo,
  LastTransaction,
  Circulation,
  BuyList,
  Offers,
  BidButton,
  OfferList,
  OfferItem,
  PriceHistory,
  ItemActivity,
} from './styled';
import Header from 'containers/layout/header';
import Button from 'components/button';

import Rareshoe from 'assets/images/Rare-shoe.png';
import ItemIcon from 'assets/icons/Item.png';
import CollectionIcon from 'assets/icons/Collection.png';
import StoreIcon from 'assets/icons/Store.png';
import TickIcon from 'assets/icons/Tick.png';
import OwnerRare from 'assets/images/Owner-rare.png';

const ItemRare: React.FC = () => {
  return (
    <StyledContainer>
      <Header />
      <IntroductionBackground>
        <img className="rare-shoe" src={Rareshoe} alt="Rare Shoe" />
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
      </TitleSection>
      <ItemInfo>
        <InfoSection>
          <LeftSection>
            <h3>Owner</h3>
            <OwnerCard>
              <img src={OwnerRare} width={192.6} height={277} alt="Owner" />
            </OwnerCard>
            <NameSection>
              <span>Bryan9912</span>
              <img src={TickIcon} width={46.9} height={46} alt="TickIcon" />
            </NameSection>
            <ContractCard>
              <SiEthereum />
              <span>0x4365d…a4951</span>
            </ContractCard>
            <Button background="RGBA(0, 0, 0, 0.62)" paddingRight={24} paddingLeft={25} width={296} height={62} style={{ marginTop: '20.5px' }}>
              <span>Enter Mark’s Space</span>
              <IoArrowForwardOutline />
            </Button>
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
                    <span>7.2</span>
                  </div>
                  <span className="amount-usd">~$1,831,527.87</span>
                  <span className="send">amy71 → Bryan9912</span>
                  <span className="amount-usd">December 6, 2021</span>
                </div>
              </LastTransaction>
              <Circulation>
                <h4>In Circulation</h4>
                <span>1 item</span>
              </Circulation>
            </TransactionInfo>
            <BuyList>
              <h4>Buy Now</h4>
              <span>currently not available</span>
            </BuyList>
            <Offers>
              <div className="header">
                <h4>Offers</h4>
                <BidButton>Place Bid</BidButton>
              </div>
              <OfferList>
                <OfferItem>
                  <div className="amount">
                    <span className="eth">8 ETH</span>
                    <span className="usd">~$1,831,527.87</span>
                  </div>
                  <div className="userinfo">
                    <span className="by">by</span>
                    <span className="account">tony1235</span>
                  </div>
                </OfferItem>
                <OfferItem>
                  <div className="amount">
                    <span className="eth">8 ETH</span>
                    <span className="usd">~$1,831,527.87</span>
                  </div>
                  <div className="userinfo">
                    <span className="by">by</span>
                    <span className="account">tony1235</span>
                  </div>
                </OfferItem>
                <OfferItem>
                  <div className="amount">
                    <span className="eth">8 ETH</span>
                    <span className="usd">~$1,831,527.87</span>
                  </div>
                  <div className="userinfo">
                    <span className="by">by</span>
                    <span className="account">tony1235</span>
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

export default ItemRare;
