
import { createContext } from "react";
import { UserDetailsContextDTO } from "../dtos/common-dtos.ts";
import {userData} from '../services/common-initials.ts'




export const UserDetailsContext = createContext<UserDetailsContextDTO>({
  userData,
  isGuestLogin: false,
  isUserRegistered: false,
});