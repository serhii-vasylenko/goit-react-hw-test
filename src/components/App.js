import { Route, Routes } from 'react-router';
import Layout from 'components/Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('pages/HomePage'));
const Tweets = lazy(() => import('pages/TweetsPage'));

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
