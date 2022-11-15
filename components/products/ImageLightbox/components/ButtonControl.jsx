import styled from "styled-components";

export default styled.button`
  z-index: 10;
  background: none;
  border-style: none;
  font-size: 50px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => '#FFF'};
  transition: color 0.2s linear;
  :hover {
    color: ${({ theme }) => '#FFF'};
  }
  :focus {
    outline: none;
    color: ${({ theme }) => '#FFF'};
  }
`;
