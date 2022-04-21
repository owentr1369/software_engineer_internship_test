import React from "react";
import { useState } from "react";

const Form = () => {
  const [val, setVal] = useState();
  function saveStaticDataToFile() {
    var blob = new Blob(["Welcome to Websparrow.org."], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "static.txt");
  }
  return (
    <div>
      <h1>Họ và tên:</h1>
      <input
        id="name"
        name="name"
        value={val}
        type="text"
        placeholder="Họ và tên"
      ></input>
      <h1>Email:</h1>
      <input
        id="email"
        name="email"
        value={val}
        type="email"
        placeholder="Email"
      ></input>
      <h1>Số điện thoại:</h1>
      <input
        id="phone-number"
        name="phonenumber"
        value={val}
        type="phone"
        placeholder="Số điện thoại"
      ></input>
      <h1>Nội dung liên hệ:</h1>
      <input
        id="notes"
        name="notes"
        value={val}
        type="text"
        placeholder="Nội dung liên hệ"
      ></input>
      <button onClick={saveDynamicDataToFile}>Submit</button>
      <button onClick={() => setVal(() => "")}>Clear</button>
    </div>
  );
};

export default Form;
