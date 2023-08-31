import "./App.css";
import "./Form.css";
import { useState } from "react";

const Form = (props) => {
  const [formData, setData] = useState({name: "Umer"});

  const clickSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setData({name: "Ali", email: "test@email.com", passowrd: "nothing"});
  };
  return (
    <>
      <div className="form-container">
        <div className="form-card">
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                onChange={(e) => {
                  setData({ ...formData, name: e.target.value });
                }}
                value={formData.name}
                className="form-input"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                onChange={(e) => {
                  setData({ ...formData, email: e.target.value });
                }}
                className="form-input"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                onChange={(e) => {
                  setData({ ...formData, passowrd: e.target.value });
                }}
                className="form-input"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <button
              className="submit-button"
              onClick={clickSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
