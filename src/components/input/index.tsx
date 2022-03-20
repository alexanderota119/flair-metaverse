import styled from 'styled-components';

interface InputProps {
  width: number;
  height: number;
  borderColor: string;
  borderRadius: string;
  fontSize: number;
  fontWeight?: number;
}

const Input = styled.input<InputProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
  outline: none;
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: 0 15px 0 10px;
`;

export default Input;
