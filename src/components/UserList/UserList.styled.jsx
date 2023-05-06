import styled from '@emotion/styled';

export const List = styled.ul`
  width: 1280px;
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  flex-basis: 380px;
  height: 460px;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Button = styled.button`
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;

  margin-left: auto;
  margin-right: auto;

  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
`;