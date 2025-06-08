import { Navbar } from './navbar';
import '../styles/main-component.css';
import { CustomRoutes } from '../routes/routes.tsx';

export const MainComponent=()=>{
  return <div className="main-component-container">
    <Navbar/>
    <CustomRoutes/>
  </div>
}