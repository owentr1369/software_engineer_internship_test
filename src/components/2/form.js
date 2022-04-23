import React from "react";
import { useState } from "react";
import Axios from "axios";

const Form = () => {
  let testObject = {
    name: "abc",
    email: "abc",
    phone: "abc",
    notes: "abc",
  };
  const [val, setVal] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const saveData = () => {
    Axios.post(testObject, {
      name: username,
      email: email,
      phone: phone,
      notes: notes,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <form>
        <h2>Họ và tên:</h2>
        <input
          id="name"
          name="username"
          value={val}
          type="text"
          placeholder="Họ và tên"
        ></input>
        <h2>Email:</h2>
        <input
          id="email"
          name="email"
          value={val}
          type="text"
          placeholder="Email"
        ></input>
        <h2>Số điện thoại:</h2>
        <input
          id="phone-number"
          name="phone"
          value={val}
          type="text"
          placeholder="Số điện thoại"
        ></input>
        <h2>Nội dung liên hệ:</h2>
        <input
          id="notes"
          name="notes"
          value={val}
          type="text"
          placeholder="Nội dung liên hệ"
        ></input>
        <div className="btns">
          <button onClick={saveData}>Submit</button>
          <button onClick={() => setVal(() => "")}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
