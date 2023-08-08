import { useState } from "react";
import { Link } from "react-router-dom";

const TicketForm = ({name}) => {

    const [uname,setUname] = useState('')
    const [tnumber,setTnumber] = useState(1)
    const [time,setTime] = useState('11 AM')
    const [isbooked,setIsbooked] = useState(false)
    const [booking_id,setBooking_id] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
    
        setBooking_id(Math.floor(Math.random()*100))
        // Create an object with the form data
        const formData = {
          _id:booking_id,
          movieName: name,
          userName: uname,
          ticketNumber: tnumber,
          showTime: time,
        };
    
        // Convert the object to a JSON string
        const formDataJson = JSON.stringify(formData);
    
        // Save the JSON string to local storage
        localStorage.setItem("ticketFormData", formDataJson);
    
        setIsbooked(true)
      };

    return ( 
    <div className="ticketform">
        {!isbooked &&
        <form onSubmit={handleSubmit}>
             <h3>Book Tickets</h3>
            <label>Movie Name:</label>
            <input type="text" value={name} readOnly />
            <label>Your Name:</label>
            <input 
            type="text"
            value={uname}
            onChange={(e)=>setUname(e.target.value)}
            required
             />
            <label>Qty:</label>
            <input 
            type="number" 
            value={tnumber}
            onChange={(e)=>setTnumber(e.target.value)}
            required
            />
            <label>Time:</label>
            <select
                value={time}
                onChange={(e)=>setTime(e.target.value)}
            >
                <option value="11 AM">11 AM</option>
                <option value="2 PM">2 PM</option>
                <option value="7 PM">7 PM</option>
            </select>
            <button type="submit">Confirm</button>
        </form>}
        {isbooked && 
            <div className="bookedmessage">
                <h2>Tickets Booked</h2>
                <h4>Booking_id:{booking_id}</h4>
                <p>Thank You!</p>
                <Link to='/'>
                    <button>Back to Home</button>
                </Link>
            </div>
        }
    </div> );
}
 
export default TicketForm;
