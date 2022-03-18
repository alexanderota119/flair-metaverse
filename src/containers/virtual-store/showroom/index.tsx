/**import modules */
import React from 'react';
/**import styled components */
import { StyledContainer, Rooms, Card } from './styled';
/**import assets */
import Bitmap4 from 'assets/images/Bitmap4.png';
import Bitmap2 from 'assets/images/Bitmap2.png';
import Bitmap3 from 'assets/images/Bitmap3.png';
import Bitmap5 from 'assets/images/Bitmap5.png';

const ShowRoomContainer: React.FC = () => {
  return (
    <StyledContainer>
      <h2>Metaverse Showroom</h2>
      <h3>Show all your products and NFTs in the metaverse</h3>
      <Rooms>
        <img className="bitmap2" src={Bitmap2} alt="Bitmap2" width={812.18} height={500} />
        <img className="bitmap3" src={Bitmap3} alt="Bitmap3" width={890.74} height={500} />
        <img className="bitmap4" src={Bitmap4} alt="Bitmap4" width={1255} height={653} />
      </Rooms>
      <Card>
        <img className="bitmap5" src={Bitmap5} alt="Bitmap5" width={360.1} height={293} />
      </Card>
    </StyledContainer>
  );
};

export default ShowRoomContainer;
