import { useLocalStorage } from 'hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { addFollow, removeFollow } from 'redux/operations';
import { Button, Card, Followers, Image, Tweets } from './UserListItem.styled';


export const UserListItem = ({ userItem }) => {
  const { tweets, followers, avatar, id } = userItem;
  const [isFollow, setIsFollow] = useLocalStorage(`follow-${id}`);

  const dispatch = useDispatch();

  const onFollow = (evt) => {
    setIsFollow(!isFollow);
    console.log(evt.target);
    evt.target.classList.toggle('following')
    isFollow ? dispatch(removeFollow({id, followers})) : dispatch(addFollow({id, followers}));
  };

  return (
    <Card className={isFollow ? 'all followings' : 'all follow'} >
      <Image src={avatar} alt="avatar" />
      <Tweets>{tweets.toLocaleString('en-US')} tweets</Tweets>
      <Followers>{followers.toLocaleString('en-US')} followers</Followers>
      <Button type="button" onClick={onFollow} className={isFollow ? 'following' : 'follow'}>
        {isFollow ? 'Following' : 'Follow'}
      </Button>
    </Card>
  );
};
