import styled from 'styled-components';

const NavsWrapper: any = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  height: 2.688em;
  z-index: 20;
`;

const NavWrapper: any = styled.div`
  display: flex;
  min-width: 8.5%;
  justify-content: center;
  align-items: center;
  text-transform: lowercase;
  font-size: ${(props: any) => (props.active ? '1.8rem' : '1.4em')};
`;

const Nav: any = styled.a`
  &&:hover {
    cursor: pointer;
    transition: color 0.1s ease-out;
    background-color: ${(props: any) => props.backgroundColor};
  }
  padding: 1em 0.5em;
  background-color: ${(props: any) =>
    props.active ? 'rgba(0,0,0,.8)' : ''};
  color: ${(props: any) => (props.active ? 'rgba(255,255,255,.8)' : 'grey')};
  text-decoration: none;
  user-select: none;
  @media (max-width: 48em) {
    font-size: 0.8em;
  }
  transition: color 0.05s ease-out;
`;

export {
  Nav,
  NavWrapper,
  NavsWrapper
}
