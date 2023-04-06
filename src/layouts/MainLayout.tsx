import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import Panel from '../components/AdminComponents/Panel/Panel';


const MainLayout = () => {
  return (
    <div className='App app-layout'>
      <Panel />
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
