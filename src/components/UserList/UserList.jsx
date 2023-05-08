import { UserListItem } from 'components/UserListItem/UserListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { selectPage, selectUsers } from 'redux/selectors';
import { Button, Item, List } from 'components/UserList//UserList.styled';
import { nextPage } from 'redux/usersSlice';

import ScrollToTop from 'react-scroll-to-top';

import Dropdown from 'react-dropdown';
import { onSelect } from 'services/onSelect';
import { BackLink } from 'components/BackLink/BackLink';

export const UserLIst = () => {
  const page = useSelector(selectPage);
  const users = useSelector(selectUsers);
  
  const options = [
    { value: 'all', label: 'Show All' },
    { value: 'follow', label: 'Follow' },
    { value: 'followings', label: 'Followings' },
  ]
  const defaultOption = options[0];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const handleLoadMoreClick = () => dispatch(nextPage());

  return (
    <>
      <BackLink />
      <Dropdown
        options={options}
        onChange={onSelect}
        value={defaultOption}
        placeholder="Select an option"
        className='dropdown'
      />
      <List>
        {users.map(user => {
          return (
            <Item key={user.id}>
              <UserListItem userItem={user} />
            </Item>
          );
        })}
      </List>
      {page < 4 && <Button onClick={handleLoadMoreClick}>Load more</Button>}
      <ScrollToTop smooth color="#6f00ff" className={'top-button'} />
    </>
  );
};
