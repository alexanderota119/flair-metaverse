import styled from 'styled-components';

interface ButtonProps {
  width: number;
  height: number;
  background: string;
  paddingLeft: number;
  paddingRight: number;
  fontSize?: number;
}

const Button = styled.div<ButtonProps>`
  transition: all 0.3s ease-in-out;
  width: ${(props: ButtonProps) => `${props.width}px`};
  height: ${(props: ButtonProps) => `${props.height}px`};
  background: ${(props: ButtonProps) => props.background};
  padding-left: ${(props: ButtonProps) => `${props.paddingLeft}px`};
  padding-right: ${(props: ButtonProps) => `${props.paddingRight}px`};
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  font-size: ${(props: ButtonProps) => (props.fontSize ? `${props.fontSize}px` : '20px')};
  border-radius: 31px;
  align-self: center;
  cursor: pointer;
  z-index: 5;

  span {
    font-weight: 700;
  }
  :hover {
    transform: scale(0.95);
  }

  :active {
    transform: scale(0.85);
  }
`;

export default Button;
