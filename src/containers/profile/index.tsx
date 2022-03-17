/**import modules */
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FaEthereum } from 'react-icons/fa';
/**import styled components */
import {
  StyledContainer,
  Content,
  AvatarContainer,
  AvatarCard,
  AvatarCardWrapper,
  AvatarCardWrapper1,
  Description,
  ClosetContainer,
  DisplayName,
  ContractCard,
  TabHeadingContainer,
  TabHeading,
  TabHeadingTitle,
  Divider,
  TabContent,
  Cards,
  Card,
  CardImg,
  CardDescription,
} from './styled';
/**import layout */
import Header from '../layout/header';
/**import custom components */
import Button from 'components/button';
/**import images */
import Person_mark_Img from 'assets/images/Person-mark.png';
import TickIcon from 'assets/icons/Tick.png';
import Shoe_1_Img from 'assets/images/Shoe-1.png';
import Shoe_2_Img from 'assets/images/Shoe-2.png';
import Shoe_3_Img from 'assets/images/Shoe-3.png';
import Shoe_4_Img from 'assets/images/Shoe-4.png';
import Shoe_5_Img from 'assets/images/Shoe-5.png';
import Shoe_6_Img from 'assets/images/Shoe-6.png';
import Shoe_7_Img from 'assets/images/Shoe-7.png';

const Profile: React.FC = () => {
  // const navigate = useNavigate();

  const [tabState, setTabState] = useState<number>(2);

  return (
    <StyledContainer>
      <Header />
      <Content>
        <AvatarContainer>
          <AvatarCard>
            <AvatarCardWrapper />
            <AvatarCardWrapper1 />
            <Button
              background="RGBA(0, 0, 0, 0.72)"
              paddingRight={24}
              paddingLeft={25}
              width={296}
              height={62}
              style={{
                backdropFilter: `blur(10px)`,
                marginBottom: '25px',
              }}
              // onClick={() => navigate('/profile/avatar/create')}
            >
              <span>Enter Mark’s Space</span>
              <span>→</span>
            </Button>
            <img src={Person_mark_Img} alt="person sillhoute"></img>
          </AvatarCard>
          <Description>
            <span>Joined</span>
            <p>January 2022</p>
            <span>Total Items</span>
            <p>25</p>
            <span>Volume Traded</span>
            <p>354 ETH</p>
          </Description>
        </AvatarContainer>
        <ClosetContainer>
          <ContractCard>
            <FaEthereum />
            <span>0x4365d…a4951</span>
          </ContractCard>
          <DisplayName>
            <h1>Mark’s Wardrobe</h1>
            <img src={TickIcon} alt="tick icon" />
          </DisplayName>
          <TabHeadingContainer>
            <TabHeading checked={tabState === 1 ? true : false} onClick={() => setTabState(1)}>
              <TabHeadingTitle checked={tabState === 1 ? true : false}>CLOTHING</TabHeadingTitle>
              {tabState === 1 && <Divider />}
            </TabHeading>
            <TabHeading checked={tabState === 2 ? true : false} onClick={() => setTabState(2)}>
              <TabHeadingTitle checked={tabState === 2 ? true : false}>SHOES</TabHeadingTitle>
              {tabState === 2 && <Divider />}
            </TabHeading>
            <TabHeading checked={tabState === 3 ? true : false} onClick={() => setTabState(3)}>
              <TabHeadingTitle checked={tabState === 3 ? true : false}>ACCESSORIES</TabHeadingTitle>
              {tabState === 3 && <Divider />}
            </TabHeading>
          </TabHeadingContainer>
          <TabContent>
            {tabState === 2 && (
              <Cards>
                <Card>
                  <CardImg background="RGB(235, 238, 240)" bottom={0}>
                    <img src={Shoe_1_Img} alt="shoe_1" />
                  </CardImg>
                  <CardDescription>
                    <span>Forum Luxe Low Shoes</span>
                    <p>Adidas</p>
                  </CardDescription>
                </Card>
                <Card>
                  <CardImg background="RGB(235, 238, 240)" bottom={0}>
                    <img src={Shoe_2_Img} alt="shoe_2" />
                  </CardImg>
                  <CardDescription>
                    <span>Forum Luxe Low Shoes</span>
                    <p>Adidas</p>
                  </CardDescription>
                </Card>
                <Card>
                  <CardImg background="RGB(235, 238, 240)" bottom={0}>
                    <img src={Shoe_3_Img} alt="shoe_3" />
                  </CardImg>
                  <CardDescription>
                    <span>Forum Luxe Low Shoes</span>
                    <p>Adidas</p>
                  </CardDescription>
                </Card>
                <Card>
                  <CardImg background="RGB(246, 246, 246)" bottom={-83}>
                    <img src={Shoe_4_Img} alt="shoe_4" />
                  </CardImg>
                  <CardDescription>
                    <span>Forum Luxe Low Shoes</span>
                    <p>Adidas</p>
                  </CardDescription>
                </Card>
                <Card>
                  <CardImg background="RGB(246, 246, 246)" bottom={-58}>
                    <img src={Shoe_5_Img} alt="shoe_5" />
                  </CardImg>
                  <CardDescription>
                    <span>Forum Luxe Low Shoes</span>
                    <p>Adidas</p>
                  </CardDescription>
                </Card>
                <Card>
                  <CardImg background="RGB(246, 246, 246)" bottom={-52}>
                    <img src={Shoe_6_Img} alt="shoe_6" />
                  </CardImg>
                  <CardDescription>
                    <span>Forum Luxe Low Shoes</span>
                    <p>Adidas</p>
                  </CardDescription>
                </Card>
                <Card>
                  <CardImg background="RGB(246, 246, 246)" bottom={-57}>
                    <img src={Shoe_7_Img} alt="shoe_1" />
                  </CardImg>
                  <CardDescription>
                    <span>Forum Luxe Low Shoes</span>
                    <p>Adidas</p>
                  </CardDescription>
                </Card>
              </Cards>
            )}
          </TabContent>
        </ClosetContainer>
      </Content>
    </StyledContainer>
  );
};

export default Profile;
