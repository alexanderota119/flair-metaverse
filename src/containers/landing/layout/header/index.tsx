/**import modules */
import React from 'react';
import { Link } from 'react-router-dom';
/**import styled components */
import { HeaderContainer, RightCorner } from './styled';
/**import assets */
import ProfileImg from 'assets/icons/Profile-IMG.png';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Flair</h1>
      </Link>
      <RightCorner>
        <Link to="/">Explorer</Link>
        <Link to="/create-profile">Create</Link>
        <Link to="/profile">
          <img src={ProfileImg} alt="profile-img"></img>
        </Link>
      </RightCorner>
    </HeaderContainer>
  );
};

export default Header;
