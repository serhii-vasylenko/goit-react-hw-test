import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  padding-top: 284px;

  &::before {
    content: '';
    z-index: 10;
    position: absolute;
    left: 0px;
    top: 214px;
    
    display: block;
    height: 8px;
    width: 100%;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 460px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const Messages = styled.img`
  position: absolute;
  left: 28px;
  top: 36px;
  width: 308px;
  height: 168px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  left: 150px;
  top: 178px;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;

  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;

  border-radius: 50%;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
`;

export const Button = styled.button`
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
  line-height: 1.22;

  text-transform: uppercase;
`;
