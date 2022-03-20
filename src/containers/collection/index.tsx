import React, { useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Select from 'react-select';

import {
  StyledContainer,
  IntroductionBackground,
  WindowIcon,
  TitleSection,
  Brand,
  CollectionInfo,
  InfoCard,
  FilterSection,
  TabContent,
  Collapse,
  CollapseHeading,
  CollapseBody,
  StatusSection,
  StatusButton,
  PriceSection,
  Items,
  ItemCard,
  ItemCardHeading,
  ItemCardBody,
  DescriptionSection,
  Description,
} from './styled';
import Header from 'containers/layout/header';
import { Tabs, Tab } from 'components/tabs';
import Input from 'components/input';

import Store from 'assets/icons/Store.png';
import CollectionImg from 'assets/icons/Collection.png';
import Tick from 'assets/icons/Tick.png';
import Shoe1 from 'assets/images/Shoe-1.png';
import Shoe2 from 'assets/images/Shoe-2.png';
import Shoe3 from 'assets/images/Shoe-3.png';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Collecton: React.FC = () => {
  const [tabState, setTabState] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [collapseState, setCollapseState] = useState<any>({
    status: true,
    price: true,
    collections: false,
    chains: false,
    categories: false,
    onSaleIn: false,
  });

  return (
    <StyledContainer>
      <Header />
      <IntroductionBackground />
      <WindowIcon>
        <img src={CollectionImg} alt="Collection" />
      </WindowIcon>
      <TitleSection>
        <h1>Adidas Lifestyle</h1>
        <Brand>
          <img src={Store} alt="Store" width={20} height={19.5} />
          <h4>Adidas</h4>
          <img src={Tick} alt="Tick" width={20.4} height={20} />
        </Brand>
      </TitleSection>
      <CollectionInfo>
        <InfoCard>
          <div className="item-amount">4.5k</div>
          <span className="item-label">items</span>
        </InfoCard>
        <InfoCard>
          <span className="item-amount">4.1k</span>
          <span className="item-label">owners</span>
        </InfoCard>
        <InfoCard>
          <div className="item-amount">
            <FaEthereum />
            <span>0.194</span>
          </div>
          <span className="item-label">floor price</span>
        </InfoCard>
        <InfoCard>
          <span className="item-amount">
            <FaEthereum />
            <span>84.5</span>
          </span>
          <span className="item-label">volume traded</span>
        </InfoCard>
      </CollectionInfo>
      <Tabs
        style={{
          marginTop: '15.5px',
        }}
      >
        <Tab isActive={tabState === 0} onClick={() => setTabState(0)}>
          <span>Items</span>
          <div className="underline" />
        </Tab>
        <Tab isActive={tabState === 1} onClick={() => setTabState(1)}>
          <span>Activity</span>
          <div className="underline" />
        </Tab>
        <Tab isActive={tabState === 2} onClick={() => setTabState(2)}>
          <span>Stats</span>
          <div className="underline" />
        </Tab>
        <Tab isActive={tabState === 3} onClick={() => setTabState(3)}>
          <span>About</span>
          <div className="underline" />
        </Tab>
        <div className="divider" />
      </Tabs>
      <TabContent>
        <FilterSection>
          <Collapse>
            <CollapseHeading onClick={() => setCollapseState({ ...collapseState, status: !collapseState.status })}>
              <span>Status</span>
              {collapseState.status ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
            </CollapseHeading>
            <CollapseBody isOpen={collapseState.status === true}>
              <StatusSection>
                <StatusButton>Buy Now</StatusButton>
                <StatusButton>On Auction</StatusButton>
                <StatusButton>New</StatusButton>
                <StatusButton>Has Offers</StatusButton>
              </StatusSection>
            </CollapseBody>
          </Collapse>
          <Collapse>
            <CollapseHeading onClick={() => setCollapseState({ ...collapseState, price: !collapseState.price })}>
              <span>Price</span>
              {collapseState.price ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
            </CollapseHeading>
            <CollapseBody isOpen={collapseState.price === true}>
              <PriceSection>
                <Select defaultValue={selectedOption} onChange={() => setSelectedOption} options={options} />
                <div className="price-amount">
                  <Input
                    width={150}
                    height={50}
                    borderColor="RGB(216, 216, 216)"
                    borderRadius="10px"
                    fontSize={18}
                    fontWeight={600}
                    type="text"
                    placeholder="Min"
                  />
                  <span>to</span>
                  <Input
                    width={150}
                    height={50}
                    borderColor="RGB(216, 216, 216)"
                    borderRadius="10px"
                    fontSize={18}
                    fontWeight={600}
                    type="text"
                    placeholder="Max"
                  />
                </div>
                <span style={{ color: 'RGB(142, 142, 147)', alignSelf: 'center' }}>Apply</span>
              </PriceSection>
            </CollapseBody>
          </Collapse>
          <Collapse>
            <CollapseHeading onClick={() => setCollapseState({ ...collapseState, collections: !collapseState.collections })}>
              <span>Collections</span>
              {collapseState.collections ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
            </CollapseHeading>
            <CollapseBody isOpen={collapseState.collections === true} />
          </Collapse>
          <Collapse>
            <CollapseHeading onClick={() => setCollapseState({ ...collapseState, chains: !collapseState.chains })}>
              <span>Chains</span>
              {collapseState.chains ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
            </CollapseHeading>
            <CollapseBody isOpen={collapseState.chains === true} />
          </Collapse>
          <Collapse>
            <CollapseHeading onClick={() => setCollapseState({ ...collapseState, categories: !collapseState.categories })}>
              <span>Categories</span>
              {collapseState.categories ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
            </CollapseHeading>
            <CollapseBody isOpen={collapseState.categories === true} />
          </Collapse>
          <Collapse>
            <CollapseHeading onClick={() => setCollapseState({ ...collapseState, onSaleIn: !collapseState.onSaleIn })}>
              <span>On Sale In</span>
              {collapseState.onSaleIn ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
            </CollapseHeading>
            <CollapseBody isOpen={collapseState.onSaleIn === true} />
          </Collapse>
        </FilterSection>
        <Items>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe1} width={280} height={280} alt="Shoe1" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe2} width={280} height={280} alt="Shoe2" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
                <Description>
                  <span>
                    <b>0.5 ETH</b>
                  </span>
                  <p>Buy Now</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe3} width={280} height={280} alt="Shoe3" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe1} width={280} height={280} alt="Shoe1" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe2} width={280} height={280} alt="Shoe2" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
                <Description>
                  <span>
                    <b>0.5 ETH</b>
                  </span>
                  <p>Buy Now</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe3} width={280} height={280} alt="Shoe3" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe1} width={280} height={280} alt="Shoe1" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe2} width={280} height={280} alt="Shoe2" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
                <Description>
                  <span>
                    <b>0.5 ETH</b>
                  </span>
                  <p>Buy Now</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe3} width={280} height={280} alt="Shoe3" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe1} width={280} height={280} alt="Shoe1" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe2} width={280} height={280} alt="Shoe2" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
                <Description>
                  <span>
                    <b>0.5 ETH</b>
                  </span>
                  <p>Buy Now</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe3} width={280} height={280} alt="Shoe3" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe1} width={280} height={280} alt="Shoe1" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe2} width={280} height={280} alt="Shoe2" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
                <Description>
                  <span>
                    <b>0.5 ETH</b>
                  </span>
                  <p>Buy Now</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
          <ItemCard>
            <ItemCardHeading>
              <img src={Shoe3} width={280} height={280} alt="Shoe3" />
            </ItemCardHeading>
            <ItemCardBody>
              <DescriptionSection>
                <Description>
                  <span>Forum Luxe Low Shoes</span>
                  <p>Adidas</p>
                </Description>
              </DescriptionSection>
            </ItemCardBody>
          </ItemCard>
        </Items>
      </TabContent>
    </StyledContainer>
  );
};

export default Collecton;
