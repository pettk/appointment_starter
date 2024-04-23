import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit

}) => {

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} name="name" placeholder="Name" onChange={onChangeName}/>
        <input type="tel" value={phone} name="phone" placeholder="Phone number" onChange={onChangePhone}/>
        <input type="email" value={email} name="email" placeholder="Email" onChange={onChangeEmail}/>
        <button type="submit"name="submit" >Submit</button>
      </form>
    </>
  );
};

