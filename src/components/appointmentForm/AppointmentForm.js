import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {




  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} name="title" placeholder="Title" onChange={(e)=> setTitle(e.target.value)}/>
        <ContactPicker value={contact} name="contact" placeholder="Contact" onChange={(e)=> setContact(e.target.value)} contacts={contacts}/>
        <input type="date" value={date} name="date" placeholder="Date" onChange={(e)=> setDate(e.target.value)} min={getTodayString}/>
        <input type="time" value={time} name="time" placeholder="Time" onChange={(e)=> setTime(e.target.value)}/>
        <button type="submit"name="submit" >Submit</button>
      </form>
    </>
  );
};
