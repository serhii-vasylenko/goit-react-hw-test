import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h2>
        Press to see all
        <Link to="/tweets" className='home-tweets'> TWEETS</Link>
      </h2>
    </>
  );
};

export default HomePage;
