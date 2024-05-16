
import React, { useState } from 'react';
import AppointmentPage from './appoint';
import "./book_appointment.css";

const BookAppointment = () => {
  const [showAppointmentPage, setShowAppointmentPage] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(null);

  const handleAppointmentConfirmed = (date) => {
    setAppointmentDate(date);
    setShowAppointmentPage(false);
  };

  return (
    <div className="book-appointment">
     <h3>Booking Fee<p1>Rs 1000</p1></h3>
     <h2>Available Time Slots:</h2>
      <p>
        Sunday <t1>4:00PM - 9:30 PM</t1><br/>
        Tuesday <t2>4:00PM - 9:30 PM</t2><br/>
        Wednesday <t3>4:00PM - 9:30 PM</t3> 
      </p>
      
      {showAppointmentPage ? (
        <AppointmentPage onAppointmentConfirmed={handleAppointmentConfirmed} />
      ) : (
        <button onClick={() => setShowAppointmentPage(true)}>Book Appointment</button>
      )}
    </div>
  );
};

export default BookAppointment;
