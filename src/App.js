import "./App.css";
import { Login } from "../src/components/Login";
import { Register } from "./components/Register";
import { useState } from "react";
function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>}
    </div>
  );
}
export default App;
