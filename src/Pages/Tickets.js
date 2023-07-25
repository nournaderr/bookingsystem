import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import '../styles/Tickets.css';
import ticketicon from "../Assets/airplane-ticket.svg"
import Ticket from "../Components/Ticket";
export default function Tickets () {
    return(
        <>
            <Nav />
            <div className="tickets">
            <h2 className="ticket-header"><img src={ticketicon} style={{height:30, marginRight:15, position: 'relative', top:5}}/>Tickets List</h2>
            <Ticket/>
            </div>
            <Footer />
        </>
    )
}