import { UserListItem } from 'components/UserListItem/UserListItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { selectError, selectIsLoading, selectUsers } from 'redux/selectors';
import { Button, Item, List } from './UserList.styled';

export const UserLIst = () => {
  const [page, setPage] = useState(1);

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(users.length);
    console.log(page);
    if (page > 4 ) {
        return;
    }
    
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const handleLoadMoreClick = () => {
    setPage(state => state + 1);
  };

  return (
    <>
      <List>
        {users.map(user => {
          return (
            <Item key={user.id}>
              <UserListItem userItem={user}/>
            </Item>
          );
        })}
      </List>
      {page < 4 && <Button onClick={handleLoadMoreClick}>Load more</Button>}
    </>
  );
};
