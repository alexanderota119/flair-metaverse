import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  width: auto;
  height: 60px;
  position: relative;
  justify-content: center;

  .divider {
    position: absolute;
    max-width: 1600px;
    width: 95vw;
    bottom: 0;
    border-bottom: 2px solid #d8d8d8;
  }
`;

interface TabProps {
  isActive?: boolean;
}

export const Tab = styled.div<TabProps>`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  span {
    font-size: 18px;
    color: ${({ isActive }) => (isActive ? '#000' : 'RGB(136, 136, 136)')};
    font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
  }

  .underline {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    width: 80%;
    height: 6px;
    position: absolute;
    background: #4a90e2;
    bottom: 0;

    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    width: 150px;
  }

  @media screen and (max-width: 640px) {
    width: 100px;
  }

  @media screen and (max-width: 424px) {
    width: 90px;
  }
`;
