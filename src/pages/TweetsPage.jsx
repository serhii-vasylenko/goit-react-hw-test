import { useRef } from 'react';
import { useLocation } from 'react-router';

const { UserLIst } = require('components/UserList/UserList');

const TweetsPage = () => {

  return (
    <>
      <UserLIst />
    </>
  );
};

export default TweetsPage;
