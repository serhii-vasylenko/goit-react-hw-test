import { UserListItem } from 'components/UserListItem/UserListItem';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { selectPage, selectUsers } from 'redux/selectors';
import { Button, Item, List } from './UserList.styled';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { clearState, nextPage } from 'redux/usersSlice';

import Dropdown from 'react-dropdown';
import { onSelect } from 'services/onSelect';

export const UserLIst = () => {
  const page = useSelector(selectPage);
  const users = useSelector(selectUsers);

  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  const options = ['all', 'follow', 'followings'];
  const defaultOption = options[0];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const handleLoadMoreClick = () => dispatch(nextPage());

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Link to={backLocation.current} state={{ from: location }}>
        <HiArrowLeft size="24" />
        Back
      </Link>
      <Dropdown
        options={options}
        onChange={onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
      ;
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
    </>
  );
};
