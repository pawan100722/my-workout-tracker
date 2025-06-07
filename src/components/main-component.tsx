import '../styles/main-component.css';
import { Navbar } from './navbar';
import { SideBarComponent } from './sidebar-component.tsx';

export const MainComponent=()=>{
  return <div className="main-component-container">
    <Navbar/>
    <SideBarComponent/>
  </div>
}