import React, { useState } from 'react';

import { StyledContainer, TitleSection, IntroductionBackground, Tabs, Tab, TabContent, Item, Card, SubCard, SubItem } from './styled';
import Header from 'containers/layout/header';
import Button from 'components/button';

import CombinedShape from 'assets/icons/Combined_shape.png';
import Tick from 'assets/icons/Tick.png';
import AdidasLifestyle from 'assets/images/Adidas-lifestyle.png';
import AdidasCausal from 'assets/images/Adidas-causal.png';
import AdidasGlasses from 'assets/images/Adidas-glasses.png';
import AdidasSports from 'assets/images/Adidas-sports.png';

const Store: React.FC = () => {
  const [tabState, setTabState] = useState<number>(0);

  return (
    <StyledContainer>
      <Header />
      <TitleSection>
        <img src={CombinedShape} alt="CombinedShape" width={64} height={64} />
        <h2>Adidas</h2>
        <img src={Tick} alt="Tick" width={49} height={48} />
      </TitleSection>
      <IntroductionBackground />
      <Button background="RGBA(0, 0, 0, 0.62)" paddingRight={11} paddingLeft={25} width={316} height={62}>
        <span>Enter Store’s Space</span>
        <span>→</span>
      </Button>
      <Tabs>
        <Tab isActive={tabState === 0} onClick={() => setTabState(0)}>
          <span>Collections</span>
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
        <Item>
          <Card>
            <img src={AdidasLifestyle} alt="Adidas Lifestyle" />
            <h3>Adidas Lifestyle</h3>
            <SubCard>
              <SubItem>
                <p className="item-count">100</p>
                <p className="item-label">items</p>
              </SubItem>
              <SubItem>
                <p className="item-count">1543</p>
                <p className="item-label">owners</p>
              </SubItem>
              <SubItem>
                <p className="item-count">0.1 Ξ</p>
                <p className="item-label">floor price</p>
              </SubItem>
              <SubItem>
                <p className="item-count">93 Ξ</p>
                <p className="item-label">volume traded</p>
              </SubItem>
            </SubCard>
          </Card>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque dui eget risus suscipit gravida. Etiam eget ante id nunc molestie
            egestas. Donec enim eros, mollis eu nisi at, rhoncus tincidunt massa.
          </span>
        </Item>
        <Item>
          <Card>
            <img src={AdidasSports} alt="Adidas Lifestyle" />
            <h3>Adidas Sports</h3>
            <SubCard>
              <SubItem>
                <p className="item-count">100</p>
                <p className="item-label">items</p>
              </SubItem>
              <SubItem>
                <p className="item-count">1543</p>
                <p className="item-label">owners</p>
              </SubItem>
              <SubItem>
                <p className="item-count">0.1 Ξ</p>
                <p className="item-label">floor price</p>
              </SubItem>
              <SubItem>
                <p className="item-count">93 Ξ</p>
                <p className="item-label">volume traded</p>
              </SubItem>
            </SubCard>
          </Card>
          <span>
            Aliquam ornare lectus lorem, vitae molestie enim congue vestibulum. In a est quis dolor mollis auctor vitae id purus. Suspendisse sit amet
            dolor finibus orci convallis blandit at quis nibh.
          </span>
        </Item>
        <Item>
          <Card>
            <img src={AdidasCausal} alt="Adidas Lifestyle" />
            <h3>Adidas Casual</h3>
            <SubCard>
              <SubItem>
                <p className="item-count">100</p>
                <p className="item-label">items</p>
              </SubItem>
              <SubItem>
                <p className="item-count">1543</p>
                <p className="item-label">owners</p>
              </SubItem>
              <SubItem>
                <p className="item-count">0.1 Ξ</p>
                <p className="item-label">floor price</p>
              </SubItem>
              <SubItem>
                <p className="item-count">93 Ξ</p>
                <p className="item-label">volume traded</p>
              </SubItem>
            </SubCard>
          </Card>
          <span>
            Maecenas eu lacus porta, euismod sapien vel, tincidunt nisi. Integer eget diam a turpis tincidunt pretium. Maecenas scelerisque mauris id
            tellus dignissim iaculis. Vestibulum finibus ut enim nec molestie.
          </span>
        </Item>
        <Item>
          <Card>
            <img src={AdidasGlasses} alt="Adidas Lifestyle" />
            <h3>Adidas Glasses</h3>
            <SubCard>
              <SubItem>
                <p className="item-count">100</p>
                <p className="item-label">items</p>
              </SubItem>
              <SubItem>
                <p className="item-count">1543</p>
                <p className="item-label">owners</p>
              </SubItem>
              <SubItem>
                <p className="item-count">0.1 Ξ</p>
                <p className="item-label">floor price</p>
              </SubItem>
              <SubItem>
                <p className="item-count">93 Ξ</p>
                <p className="item-label">volume traded</p>
              </SubItem>
            </SubCard>
          </Card>
          <span>
            Curabitur interdum, quam quis scelerisque suscipit, erat ipsum viverra ex, ac ornare odio urna ac quam. Ut eget elit risus. Aenean odio
            odio, aliquet eget urna sed, rhoncus placerat odio.
          </span>
        </Item>
      </TabContent>
    </StyledContainer>
  );
};

export default Store;
