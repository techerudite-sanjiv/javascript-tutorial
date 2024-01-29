import React, { useEffect, useState } from "react";

const FormEx1 = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (form && form.username.length > 2 && form.password.length > 4) {
      setValid(true);
    }

    return () => null;
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      // console.log(form, "This is submitted form data")
      localStorage.setItem("formdata", JSON.stringify(form));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {

    const localData = JSON.parse(localStorage.getItem("formdata"))
    console.log(localData, "i am local storage data");

  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleChange} /> <br />
        <input type="text" name="password" onChange={handleChange} /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormEx1;
