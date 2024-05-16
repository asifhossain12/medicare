import "./doc_page.css";
import doc1 from '../media/doc1.png';

export default function DocFun(){

return(
    <>
    <div className="doctor_pfp">
        <img src={doc1} alt ="doctor pic"></img>
        <div id = "occ">Surgeon</div>
        <br/>
        <h2> James Moriarty</h2>
        <br/>
        <h1>Reviews<p1> (2) </p1></h1>
        <p>Heart Surgeon <br/>15 of experience years<br/><strong>FRCS</strong>
        </p>
    </div>
    </>
   );
}
