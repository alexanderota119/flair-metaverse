/**import modules */
import React, { useState, useEffect } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { useMediaQuery } from 'beautiful-react-hooks';
/**import react swiper modules */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
/**import styled components */
import {
  StyledContainer,
  Card,
  CardHeading,
  CardContent,
  ContractInfo,
  CardContentWrapper,
  ProfileInfo,
  PersonImg,
  HomeBack2,
  Content,
  SwiperOut,
  NavigationNext,
  NavigationPrev,
} from './styled';
/**import custom components */
import Button from 'components/button';
/**import images */
import Person1_Img from 'assets/images/Person-1.png';
import Person2_Img from 'assets/images/Person-2.png';
import Person3_Img from 'assets/images/Person-3.png';
import Person4_Img from 'assets/images/Person-4.png';
import TickIcon from 'assets/icons/Tick.png';

const CollectionsContainer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 399px)');
  const [buttonSize, setButtonSize] = useState<number>(296);

  useEffect(() => {
    if (isMobile) setButtonSize(250);
    else setButtonSize(296);
  }, [isMobile]);

  return (
    <>
      <StyledContainer>
        <h1>See what people are collecting</h1>
        <SwiperOut>
          <NavigationPrev className="prevc">→</NavigationPrev>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            navigation={{
              prevEl: '.prevc',
              nextEl: '.nextc',
            }}
            modules={[Navigation]}
            breakpoints={{
              1600: {
                slidesPerView: 4,
              },
              1250: {
                slidesPerView: 3,
              },
              870: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <Card>
                <CardHeading>
                  <PersonImg src={Person1_Img} alt="Person1" left={82.21} />
                  <Button
                    background="RGBA(0, 0, 0, 0.72)"
                    paddingRight={24}
                    paddingLeft={25}
                    width={buttonSize}
                    height={62}
                    style={{
                      marginTop: '123px',
                      backdropFilter: `blur(10px)`,
                    }}
                  >
                    <span>Open Profile</span>
                    <span>→</span>
                  </Button>
                </CardHeading>
                <CardContent>
                  <CardContentWrapper />
                  <ContractInfo>
                    <FaEthereum />
                    <span>0x4365d…a4951</span>
                  </ContractInfo>
                  <h2>james223.eth</h2>
                  <ProfileInfo>
                    <span>Joined</span>
                    <p>January 2022</p>
                    <span>Total Items</span>
                    <p>25</p>
                    <span>Volume Traded</span>
                    <p>354 ETH</p>
                    <span></span>
                    <p style={{ color: 'RGB(148, 148, 148)' }}>~$1,831,527.87</p>
                  </ProfileInfo>
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <CardHeading>
                  <PersonImg src={Person2_Img} alt="Person1" left={98.14} />
                  <Button
                    background="RGBA(0, 0, 0, 0.72)"
                    paddingRight={24}
                    paddingLeft={25}
                    width={buttonSize}
                    height={62}
                    style={{
                      marginTop: '123px',
                      backdropFilter: `blur(10px)`,
                    }}
                  >
                    <span>Open Profile</span>
                    <span>→</span>
                  </Button>
                </CardHeading>
                <CardContent>
                  <CardContentWrapper />
                  <ContractInfo>
                    <FaEthereum />
                    <span>0x4365d…a4951</span>
                  </ContractInfo>
                  <div style={{ display: 'flex', gridGap: '12px', alignItems: 'center' }}>
                    <h2>veryyx292</h2>
                    <img style={{ marginTop: '14.65px' }} src={TickIcon} alt="tick" width={26.51} height={26} />
                  </div>
                  <ProfileInfo>
                    <span>Joined</span>
                    <p>January 2022</p>
                    <span>Total Items</span>
                    <p>25</p>
                    <span>Volume Traded</span>
                    <p>354 ETH</p>
                    <span></span>
                    <p style={{ color: 'RGB(148, 148, 148)' }}>~$1,831,527.87</p>
                  </ProfileInfo>
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <CardHeading>
                  <PersonImg src={Person3_Img} alt="Person1" left={94.15} />
                  <Button
                    background="RGBA(0, 0, 0, 0.72)"
                    paddingRight={24}
                    paddingLeft={25}
                    width={buttonSize}
                    height={62}
                    style={{
                      marginTop: '123px',
                      backdropFilter: `blur(10px)`,
                    }}
                  >
                    <span>Open Profile</span>
                    <span>→</span>
                  </Button>
                </CardHeading>
                <CardContent>
                  <CardContentWrapper />
                  <ContractInfo>
                    <FaEthereum />
                    <span>0x4365d…a4951</span>
                  </ContractInfo>
                  <h2>starla.pippa</h2>
                  <ProfileInfo>
                    <span>Joined</span>
                    <p>January 2022</p>
                    <span>Total Items</span>
                    <p>25</p>
                    <span>Volume Traded</span>
                    <p>354 ETH</p>
                    <span></span>
                    <p style={{ color: 'RGB(148, 148, 148)' }}>~$1,831,527.87</p>
                  </ProfileInfo>
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <CardHeading>
                  <PersonImg src={Person4_Img} alt="Person1" left={88.03} />
                  <Button
                    background="RGBA(0, 0, 0, 0.72)"
                    paddingRight={24}
                    paddingLeft={25}
                    width={buttonSize}
                    height={62}
                    style={{
                      marginTop: '123px',
                      backdropFilter: `blur(10px)`,
                    }}
                  >
                    <span>Open Profile</span>
                    <span>→</span>
                  </Button>
                </CardHeading>
                <CardContent>
                  <CardContentWrapper />
                  <ContractInfo>
                    <FaEthereum />
                    <span>0x4365d…a4951</span>
                  </ContractInfo>
                  <h2>holdenn312</h2>
                  <ProfileInfo>
                    <span>Joined</span>
                    <p>January 2022</p>
                    <span>Total Items</span>
                    <p>25</p>
                    <span>Volume Traded</span>
                    <p>354 ETH</p>
                    <span></span>
                    <p style={{ color: 'RGB(148, 148, 148)' }}>~$1,831,527.87</p>
                  </ProfileInfo>
                </CardContent>
              </Card>
            </SwiperSlide>
          </Swiper>
          <NavigationNext className="nextc">→</NavigationNext>
        </SwiperOut>
      </StyledContainer>
      <HomeBack2>
        <Content>
          <h1>Decentralized</h1>
          <h2>and unstoppable</h2>
          <span>
            Not only is Solana ultra-fast and low cost, it is censorship resistant. Meaning, the network will remain open for application to run
            freely and transactions will never be stopped.
          </span>
        </Content>
      </HomeBack2>
    </>
  );
};

export default CollectionsContainer;
