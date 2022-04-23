import React from "react";
import { useState } from "react";
import Axios from "axios";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(
      "https://trantam.herokuapp.com/api/form/submit",
      JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        notes: data.notes,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((err) => console.log(err));
  }
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <div>
      <form>
        <h2>Họ và tên:</h2>
        <input
          onChange={(e) => handle(e)}
          id="name"
          name="name"
          value={data.name}
          type="text"
          placeholder="Họ và tên"
        ></input>
        <h2>Email:</h2>
        <input
          onChange={(e) => handle(e)}
          id="email"
          name="email"
          value={data.email}
          type="text"
          placeholder="Email"
        ></input>
        <h2>Số điện thoại:</h2>
        <input
          onChange={(e) => handle(e)}
          id="phone"
          name="phone"
          value={data.phone}
          type="text"
          placeholder="Số điện thoại"
        ></input>
        <h2>Nội dung liên hệ:</h2>
        <input
          onChange={(e) => handle(e)}
          id="notes"
          name="notes"
          value={data.notes}
          type="text"
          placeholder="Nội dung liên hệ"
        ></input>
        <div className="btns">
          <button onClick={submit}>Submit</button>
          <button
            onClick={() => document.querySelectorAll("input[type=text]").value}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
