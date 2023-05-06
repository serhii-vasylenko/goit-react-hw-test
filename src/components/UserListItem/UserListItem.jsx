import { useLocalStorage } from 'hooks/useLocalStorage';
import messagesImage from 'images/messages.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFollow, removeFollow } from 'redux/operations';

export const UserListItem = ({ userItem }) => {
  const { user, tweets, followers, avatar, id } = userItem;
  const [isFollow, setIsFollow] = useLocalStorage(`follow-${id}`);

  const dispatch = useDispatch();

  const onFollow = () => {
    setIsFollow(!isFollow);
    isFollow ? dispatch(removeFollow({id, followers})) : dispatch(addFollow({id, followers}));
  };

  return (
    <>
      <img src={messagesImage} alt="messages" />
      <img src={avatar} alt="avatar" />
      <p>{user}</p>
      <p>{tweets.toLocaleString('en-US')} tweets</p>
      <p>{followers.toLocaleString('en-US')} followers</p>
      <button type="button" onClick={onFollow}>
        {isFollow ? 'Following' : 'Follow'}
      </button>
    </>
  );
};
