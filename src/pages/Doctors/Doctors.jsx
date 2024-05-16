import './App.css';
import BookAppointment from './compo/book_appointment.jsx';
import DocFun from './compo/doc_page.jsx';
import FeedbackForm from './compo/feedback.jsx';


export default function Doctors() {
 

  return (
        <>
        <DocFun/>
        <BookAppointment/>
        <FeedbackForm/>
        </>
  );

  }

 