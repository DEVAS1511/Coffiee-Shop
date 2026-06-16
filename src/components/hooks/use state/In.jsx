import React, { useState } from "react";

const In = () => {
  const [name, setname] = useState("");
  const handlechange = (event) => {
    setname(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(alert("your name is:"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handlechange} />
        <button type="button" onClick={() => setname("")}>
          submit
        </button>
        <h3>YOU TYPING {name}</h3>
      </form>
    </div>
  );
};
export default In;
