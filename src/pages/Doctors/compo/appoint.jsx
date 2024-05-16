import "./book_appointment.css";
import React, { useState } from 'react';

const AppointmentPage = ({ onAppointmentConfirmed }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const submit = () =>{
    alert('Stripe Payment Disconnected');
  }


  return (
    <div className="appointment-page">
      <h2>Choose Appointment Date</h2>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      <button onClick={submit}>Pay Now</button>
    </div>
  );
};

export default AppointmentPage;
