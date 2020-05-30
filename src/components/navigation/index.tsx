import React, { FC } from 'react';
import { NavsWrapper, NavWrapper, Nav } from './styles';

interface INavigationProps {
  pages?: any[];
  handleOnClick?: (e: any) => void;
}

const Navigation: FC<INavigationProps> = ({ pages, handleOnClick }) => (
  <NavsWrapper>
    {pages?.map(({ name, active, backgroundColor }: any) => (
      <NavWrapper key={name} active={active}>
        <Nav
          backgroundColor={backgroundColor}
          name={name}
          active={active}
          onClick={handleOnClick}>
          {name}
        </Nav>
      </NavWrapper>
    ))}
  </NavsWrapper>
);

export default Navigation;
