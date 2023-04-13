/*
**Step 1**
Convert all the elements from the form to controlled components by adding the value and onChange attributes to each input.
Make sure the password input is obscured.

**Step 2**
Show an error message if the password is less than 8 characters long and the user has interacted with the input at least once.
The error message should be displayed below the password input as follows.
For that, a component called `PasswordErrorMessage` has been provided to you. Your goal is to implement the logic for when to show the error message.
The password state is a special one that has an additional property called `isTouched`. This property is used to determine if the user has interacted with the input or not.

**Step 3**
Prevent the default behaviour of the form when the user clicks the submit button.

**Step 4**
Implement the body of `getIsFormValid` function to return `true` if the form is valid and `false` otherwise. This determines the submit button state. 
The rules for the form to be valid are as follows:
- The first name cannot be empty.
- The email must be a valid email address and can't be empty. A function called `validateEmail` has been already provided for you to check 
if the email is valid. It returns `true` if the email is valid and `false` otherwise.
- The password must be at least 8 characters long
- The role must be either `individual` or `business`

 **Step 5**
Implement the body of `clearForm` function to clear the form state after a successful submission.
*/ 

import { useState } from "react";
import { validateEmail } from "./validateEmail";
import "./registrationform.css";

const PasswordErrorMessage = () => {
    return (
       <p className="FieldError">Password should have at least 8 characters</p>
    );
};

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              placeholder="Password"
              value={password.value}
              onChange={e => {
                setPassword({ ...password, value: e.target.value })
              }}
              onBlur={() => {
                setPassword({...password, isTouched: true })
              }}
            />
            {password.isTouched && password.value.length < 8 ? <PasswordErrorMessage /> : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}
export default RegistrationForm;