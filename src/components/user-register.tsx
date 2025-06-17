import { UserRegisterForm } from "./user-register-form";
import '../styles/user-register.css'
import { UserRegisterPropsDTO } from "../dtos/component-dto";

export const UserRegister = ({ setIsUserRegistered }: UserRegisterPropsDTO) => {
  return (
    <div className="user-register-container">
      <UserRegisterForm setIsUserRegistered={setIsUserRegistered} />
      <button className="guest-button cursor-pointer">Continue as Guest</button>
    </div>
  );
};
