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
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input name="name" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label htmlFor='phone'>Phone:</label>
        <input name="phone" type="tel" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} pattern="0[0-9]{10}"></input>
        <label htmlFor='email'>Email:</label>
        <input name='email' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

