import { Fragment, useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <Fragment>
      <form>
        <label htmlFor="name">Full Name</label>
        <input value={name} type="text" id="name" name="name"/>
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
      <button onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </Fragment>
  );
};
