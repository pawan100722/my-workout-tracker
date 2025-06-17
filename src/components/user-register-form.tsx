import { useRef, useState } from "react";
import "../styles/user-register-form.css";
import { UserRegisterFormPropsDTO } from "../dtos/component-dto";
import { saveDataLocally } from "../services/local-storage";
import { CONSTANT } from "../services/CONSTANTS";

export const UserRegisterForm = ({ setIsUserRegistered }: UserRegisterFormPropsDTO) => {
  const [defaultAge, setDefaultAge] = useState<string>("20");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSelectAgeClick = () => {
    setDefaultAge("");
  };

  const handleFormSubmit = (eParam: React.FormEvent<HTMLFormElement>) => {
    eParam.preventDefault();
    if (formRef?.current) {
      const formData = new FormData(formRef?.current);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const extractedFormdata: Record<string, any> = {};
      for (const [key, value] of formData) {
        extractedFormdata[key] = value;
      }
      saveDataLocally(CONSTANT.USER_DETAILS_KEY, extractedFormdata)
      setIsUserRegistered(true);
    }
  };

  const userAgeArr = [];

  for (let index = 1; index <= 60; index++) {
    userAgeArr.push(index);
  }

  return (
    <div className="user-register-form-container">
      <h1 className="user-register-form-heading">Enter Your Details</h1>
      <form
        action=""
        className="user-register-form"
        ref={formRef}
        onSubmit={handleFormSubmit}
      >
        <div className="input-container">
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="input-area"
          />
        </div>

        <div className="input-container">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="input-area"
            id="email"
          />
        </div>

        <div className="input-container">
          <label htmlFor="age-dropdown" className="input-label">
            Select Age
          </label>
          <input
            list="age-list"
            className="age-input cursor-pointer"
            id="age-dropdown"
            name="age"
            defaultValue={defaultAge}
            onClick={handleSelectAgeClick}
          />
          <datalist id="age-list" className="input-age-select">
            {userAgeArr.map((age: number, index: number) => (
              <option
                value={`${age}`}
                className="age-dropdown-option"
                key={index}
              >
                {age}
              </option>
            ))}
          </datalist>
        </div>

        <div className="input-container">
          <label htmlFor="" className="input-label">
            Select Gender
          </label>
          <div className="gender-options-container">
            <label htmlFor="male" className="input-label-gender">
              Male
            </label>
            <input
              type="radio"
              id="male"
              name="gender"
              className="cursor-pointer"
              defaultValue="male"
            />
            <label htmlFor="female" className="input-label-gender">
              Female
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              defaultValue="female"
              className="cursor-pointer"
            />
            <label htmlFor="other" className="input-label-gender">
              Other
            </label>
            <input
              type="radio"
              id="other"
              name="gender"
              defaultValue="other"
              className="cursor-pointer"
            />
          </div>
        </div>

        <button className="input-container submit-button cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};
