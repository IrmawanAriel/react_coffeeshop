import NavigationBar from '../components/NavigationBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Home from './Home';

function Index() {
  const location = useLocation();

  return (
    <div className='container-fluid h-full w-full'>
      <NavigationBar />
      {location.pathname === '/' ? <Home /> : <Outlet />}
      <Footer />
    </div>
  );
}

export default Index;
