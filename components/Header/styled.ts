import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: space-between;
  align-items: center;
  width: 100vw;
  height: 100px;
`;

export const Logo = styled.h1`
  font-family: 'Nanum Pen Script', cursive;
  font-size: xx-large;
  margin: 0 1em 0 1em;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: large;

  li {
    display: flex;
    align-items: center;
    margin: 0 2em 0 2em;
    height: 100%;

    a {
      display: flex;
      align-items: center;
      height: 50%;
    }
  }
`;

export const Utils = styled.ul`
  display: flex;
  justify-content: right;
  margin: 0 1em 0 1em;

  li {
    margin: 0 1em 0 1em;
  }

  img {
    min-width: 30px;

    :hover {
      cursor: pointer;
    }
  }
`;
