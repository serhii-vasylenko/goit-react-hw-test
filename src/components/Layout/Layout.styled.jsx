import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Header = styled.header`
  background-color: #5cd3a8;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
  margin-bottom: 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
`;

export const Link = styled(NavLink)`
  display: flex;
  padding: 16px;

  /* color: #000; */
  &.active {
  color: #fff;
}
`;
