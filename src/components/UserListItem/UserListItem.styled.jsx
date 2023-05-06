import styled from '@emotion/styled';
import bg from 'images/card-bg.png';

export const Card = styled.div`
  height: 100%;
  padding-top: 187px;
  background-image: url(${bg});
  background-size: 100%;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;
`;

export const Image = styled.img`
  width: 62px;
  height: 62px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 34px;

  border-radius: 50%;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
`;

export const Button = styled.button`
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;
`;
