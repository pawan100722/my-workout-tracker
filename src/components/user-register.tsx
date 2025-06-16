import { UserRegisterForm } from "./user-register-form";
import '../styles/user-register.css'

export const UserRegister = () => {

  

  return (
    <div className="user-register-container">
       <UserRegisterForm/>
       <button className="guest-button cursor-pointer">Continue as Guest</button>
    </div>
  );
};
