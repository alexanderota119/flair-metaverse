/**import modules */
import React from 'react';
/**import styled components */
import { StyledContainer, DropNFT, Description } from './styled';
/**import assets */
import Shoe1_Img from 'assets/images/Shoe1.png';
import Shoe2_Img from 'assets/images/Shoe2.png';
import Shoe3_Img from 'assets/images/Shoe3.png';
import Shoe4_Img from 'assets/images/Shoe4.png';
import Shoe5_Img from 'assets/images/Shoe5.png';
import Shoe6_Img from 'assets/images/Shoe6.png';
import Shoe7_Img from 'assets/images/Shoe7.png';

const NFTCollectionsContainer: React.FC = () => {
  return (
    <StyledContainer>
      <h2>Drop NFT collections</h2>
      <span>Mint NFTs and start collections of your brand</span>
      <DropNFT>
        <img className="shoe4" src={Shoe4_Img} alt="Shoe4" width={704} height={344} />
        <img className="shoe1" src={Shoe1_Img} alt="Shoe1" width={284} height={139} />
        <img className="shoe2" src={Shoe2_Img} alt="Shoe2" width={333} height={163} />
        <img className="shoe3" src={Shoe3_Img} alt="Shoe3" width={446} height={218} />
        <img className="shoe7" src={Shoe7_Img} alt="Shoe7" width={284} height={139} />
        <img className="shoe6" src={Shoe6_Img} alt="Shoe6" width={333} height={163} />
        <img className="shoe5" src={Shoe5_Img} alt="Shoe5" width={446} height={218} />
      </DropNFT>
      <Description>
        <span>Nike AF 1/1</span>
        <p>Nike</p>
      </Description>
    </StyledContainer>
  );
};

export default NFTCollectionsContainer;
