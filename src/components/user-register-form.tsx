import "../styles/user-register-form.css";

export const UserRegisterForm = () => {
  const userAgeArr = [];

  for (let index = 1; index <= 60; index++) {
    userAgeArr.push(index);
  }

  return (
    <div className="user-register-form-container">
      <form action="" className="user-register-form">
        <div className="input-container">
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input type="text" id="name" className="input-area" />
        </div>

        <div className="input-container">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input type="email" className="input-area" id="email" />
        </div>

        <div className="input-container">
          <label htmlFor="age-dropdown" className="input-label">
            Select Age
          </label>
          <select name="" id="age-dropdown" className="input-age-select cursor-pointer">
            {userAgeArr.map((age: number, index: number) => (
              <option value="" className="age-dropdown-option" key={index}>
                {age}
              </option>
            ))}
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="" className="input-label">
            Select Gender
          </label>
          <label htmlFor="male" className="input-label-gender">
            Male
          </label>
          <input type="radio" id="male" name="gender" className="cursor-pointer" />
          <label htmlFor="female" className="input-label-gender">
            Female
          </label>
          <input type="radio" id="female" name="gender" className="cursor-pointer" />
          <label htmlFor="other" className="input-label-gender">
            Other
          </label>
          <input type="radio" id="other" name="gender" className="cursor-pointer" />
        </div>

        <button className="input-container submit-button cursor-pointer">Submit</button>
      </form>
    </div>
  );
};
