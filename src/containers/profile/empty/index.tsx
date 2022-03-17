/**import modules */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  ContractCard,
  TabHeadingContainer,
  TabHeading,
  TabHeadingTitle,
  Divider,
} from './styled';
/**import layout */
import Header from 'containers/layout/header';
/**import custom components */
import Button from 'components/button';
/**import images */
import Person_sillhoute_Img from 'assets/images/Person-sillhoute.png';

const EmptyProfile: React.FC = () => {
  const navigate = useNavigate();

  const [tabState, setTabState] = useState<number>(1);

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
              onClick={() => navigate('/profile/avatar/create')}
            >
              <span>Create Your Avatar</span>
              <span>→</span>
            </Button>
            <img src={Person_sillhoute_Img} alt="person sillhoute"></img>
          </AvatarCard>
          <Description>
            <span>Joined</span>
            <p>January 2022</p>
            <span>Total Items</span>
            <p>0</p>
            <span>Volume Traded</span>
            <p>0 ETH</p>
          </Description>
        </AvatarContainer>
        <ClosetContainer>
          <ContractCard>
            <FaEthereum />
            <span>0x4365d…a4951</span>
          </ContractCard>
          <h1>Unnamed</h1>
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
          <h3>Empty Collection</h3>
          <Button
            background="RGBA(0, 0, 0)"
            paddingRight={30}
            paddingLeft={26}
            width={331}
            height={62}
            style={{
              marginTop: '126px',
            }}
            onClick={() => navigate('/profile')}
          >
            <span>Explore NFTs</span>
            <span>→</span>
          </Button>
        </ClosetContainer>
      </Content>
    </StyledContainer>
  );
};

export default EmptyProfile;
