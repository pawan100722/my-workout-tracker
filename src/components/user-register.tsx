import "../styles/user-register.css";
import { UserRegisterForm } from "./user-register-form";
import { UserRegisterPropsDTO } from "../dtos/component-dto";

export const UserRegister = ({
  setIsUserRegistered,
  setIsGuestLogin,
}: UserRegisterPropsDTO) => {
  const handleClick = () => {
    setIsGuestLogin(true);
  };

  return (
    <div className="user-register-container">
      <UserRegisterForm setIsUserRegistered={setIsUserRegistered} />
      <button className="guest-button cursor-pointer" onClick={handleClick}>
        Continue as Guest
      </button>
    </div>
  );
};
