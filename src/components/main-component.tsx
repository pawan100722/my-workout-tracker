import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import "../styles/main-component.css";
import { CONSTANT } from "../services/CONSTANTS";
import { UserRegister } from "./user-register.tsx";
import { CustomRoutes } from "../routes/routes.tsx";
import { userData } from "../services/common-initials.ts";
import { UserDetailsContext } from "../services/contexts.ts";
import { getLocallySavedData } from "../services/local-storage";
import { UserDataDTO, UserDetailsContextDTO } from "../dtos/common-dtos.ts";

export const MainComponent = () => {
  const [isUserRegistered, setIsUserRegistered] = useState<boolean>(false);
  const [isGuestLogin, setIsGuestLogin] = useState<boolean>(false);
  const [userDetailsContextValue, setUserDetailsContextValue] =
    useState<UserDetailsContextDTO>({
      userData,
      isUserRegistered: false,
      isGuestLogin: false,
    });

  /**
   * this is the functionality, when page loads/ component mounts!!!
   */
  useEffect(() => {
    const userData: UserDataDTO | null = getLocallySavedData(
      CONSTANT.USER_DETAILS_KEY
    );
    if (userData) {
      setIsUserRegistered(true);
      setUserDetailsContextValue(() => {
        return {
          userData,
          isGuestLogin,
          isUserRegistered,
        };
      });
    }
  }, []);

  useEffect(() => {
    if (isGuestLogin) {
      setUserDetailsContextValue(() => {
        return { userData: null, isGuestLogin, isUserRegistered };
      });
    }
  }, [isGuestLogin]);

  return (
    <UserDetailsContext.Provider value={userDetailsContextValue}>
      <div className="main-component-container">
        {isUserRegistered || isGuestLogin ? (
          <>
            <Navbar />
            <CustomRoutes />
          </>
        ) : (
          <UserRegister
            setIsUserRegistered={setIsUserRegistered}
            setIsGuestLogin={setIsGuestLogin}
          />
        )}
      </div>
    </UserDetailsContext.Provider>
  );
};
