export interface UserDataDTO {
  name: string;
  age: string;
  email: string;
  gender?: string;
}

export interface UserDetailsContextDTO {
  userData: UserDataDTO | null;
  isGuestLogin: boolean;
  isUserRegistered: boolean;
}