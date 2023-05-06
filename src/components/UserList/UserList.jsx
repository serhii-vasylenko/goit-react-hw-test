import { UserListItem } from 'components/UserListItem/UserListItem';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { selectUsers } from 'redux/selectors';
import { Button, Item, List } from './UserList.styled';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

export const UserLIst = () => {
  const [page, setPage] = useState(1);

  let users = useSelector(selectUsers);

  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  const dispatch = useDispatch();
  useEffect(() => {
    if (page > 4 || users.length > 11) {
      return;
    }

    if (page === 1 && users.length > 0) {
      return;
    }

    dispatch(fetchUsers(page));
    // eslint-disable-next-line
  }, [dispatch, page]);

  const handleLoadMoreClick = () => {
    setPage(state => state + 1);
  };

  useEffect(() => {
    setPage(users.length / 3 || 1);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Link to={backLocation.current} state={{ from: location }}>
        <HiArrowLeft size="24" />
        Back
      </Link>
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
