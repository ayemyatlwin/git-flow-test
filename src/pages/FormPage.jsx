import React, { useRef } from "react";

const FormPage = () => {
  const inputRef = useRef(null);
  console.log(inputRef.current);
  const change = () => {
    inputRef.current.focus();
    inputRef.current.classList.add("redMe");
    inputRef.current.classList.remove("greenMe");
  };
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    console.log(formRef.current[1].value);
    const info = { name, email, password };
    console.log(info);
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };
  return (
    <>
      <div>
        <h1> Hello,This is FormPage</h1>

        <input
          className="greenMe"
          ref={inputRef}
          id="name"
          type="text"
          placeholder="type here..."
        />
        <button onClick={change}>Change</button>
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameInputRef} />
        <input type="email" placeholder="Email" ref={emailInputRef} />
        <input type="password" placeholder="Password" ref={passwordInputRef} />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default FormPage;
