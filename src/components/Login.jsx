import { Fragment, useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <Fragment>
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form">
          <label htmlFor="email">email</label>
          <input
            value={email}
            type="email"
            id="email"
            name="email"
            placeholder="youremail@gmail.com"
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
          Don't have an account? Register here.
        </button>
      </div>
    </Fragment>
  );
};
