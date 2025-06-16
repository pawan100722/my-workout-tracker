import { Navbar } from './navbar';
import '../styles/main-component.css';
import { CustomRoutes } from '../routes/routes.tsx';
import { useState } from 'react';
import { UserRegister } from './user-register.tsx';

export const MainComponent=()=>{
  const [isUserRegistered, ] = useState<boolean>(false);

  return (
    <div className="main-component-container">
      {isUserRegistered ? (
        <>
          <Navbar />
          <CustomRoutes />
        </>
      ) : (
        <UserRegister />
      )}
    </div>
  );
}