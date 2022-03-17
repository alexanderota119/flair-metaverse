/**import modules */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
/**import styled components */
import { HeaderContainerOut, HeaderContainer, SearchBar, RightCorner } from './styled';
/**import assets */
import ProfileImg from 'assets/icons/Profile-IMG.png';

const Header: React.FC = () => {
  return (
    <HeaderContainerOut>
      <HeaderContainer>
        <Link to="/">
          <h1>Flair</h1>
        </Link>
        <SearchBar>
          <BsSearch />
          <input type="text" placeholder="Search items, collections, and accounts" />
        </SearchBar>
        <RightCorner>
          <Link to="/brands">Explorer</Link>
          <Link to="/virtual-store">Create</Link>
          <Link to="/profile/empty">
            <img src={ProfileImg} alt="profile-img"></img>
          </Link>
        </RightCorner>
      </HeaderContainer>
    </HeaderContainerOut>
  );
};

export default Header;
