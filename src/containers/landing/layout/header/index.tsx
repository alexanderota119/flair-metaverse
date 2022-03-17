/**import modules */
import React from 'react';
import { NavLink } from 'react-router-dom';
/**import styled components */
import { HeaderContainer, RightCorner } from './styled';
/**import assets */
import ProfileImg from 'assets/icons/Profile-IMG.png';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <h1>Flair</h1>
      </NavLink>
      <RightCorner>
        <NavLink to="/brands">Explorer</NavLink>
        <NavLink to="/virtual-store">Create</NavLink>
        <NavLink to="/profile/empty">
          <img src={ProfileImg} alt="profile-img"></img>
        </NavLink>
      </RightCorner>
    </HeaderContainer>
  );
};

export default Header;
