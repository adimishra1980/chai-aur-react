import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label> &nbsp;
      <input
        id="fullName"
        placeholder="enter full name "
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">Username</label> &nbsp;
      <input
        id="username"
        placeholder="enter username"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
        name="username"
      />
      <br />
      <br />
      <label htmlFor="password">password</label> &nbsp;
      <input
        id="password"
        placeholder="enter password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        name="password"
      />
      <br /><br />
      <button>Submit</button>
    </form>
  );
}
