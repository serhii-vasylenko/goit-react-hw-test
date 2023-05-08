import { useLocalStorage } from 'hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { addFollow, removeFollow } from 'redux/operations';
import {
  Avatar,
  AvatarWrapper,
  Button,
  Card,
  Followers,
  Logo,
  Messages,
  Tweets,
} from 'components/UserListItem/UserListItem.styled';

import logoImage from 'images/logo.svg';
import messageImage from 'images/messages.png';

export const UserListItem = ({ userItem }) => {
  const { tweets, followers, avatar, id } = userItem;
  const [isFollow, setIsFollow] = useLocalStorage(`follow-${id}`);

  const dispatch = useDispatch();

  const onFollow = () => {
    setIsFollow(!isFollow);
    isFollow
      ? dispatch(removeFollow({ id, followers }))
      : dispatch(addFollow({ id, followers }));
  };

  return (
    <Card className={isFollow ? 'all followings' : 'all follow'}>
      <Logo src={logoImage} alt="logo" />
      <Messages src={messageImage} alt="messages" />
      <AvatarWrapper>
        <Avatar src={avatar} alt="avatar" />
      </AvatarWrapper>
      <Tweets>{tweets.toLocaleString('en-US')} tweets</Tweets>
      <Followers>{followers.toLocaleString('en-US')} followers</Followers>
      <Button
        type="button"
        onClick={onFollow}
        className={isFollow ? 'following' : 'follow'}
      >
        {isFollow ? 'Following' : 'Follow'}
      </Button>
    </Card>
  );
};
