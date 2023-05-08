import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, List, Link } from 'components/Layout/Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <List>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tweets">Tweets</Link>
              </li>
            </List>
          </nav>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <Outlet />
          </main>
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
