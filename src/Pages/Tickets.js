import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import '../styles/Tickets.css';
import ticketicon from "../Assets/airplane-ticket.svg"
import Ticket from "../Components/Ticket";
import TicketArea from "../Components/TicketArea";
import airplogo from "../Assets/Small_white_airplane.svg";
import greyplane from '../Assets/grey_airplane.svg'
import { useEffect, useState } from "react";
export default function Tickets () {
    const [tickets,setTickets] = useState([])
    const [error,setError] = useState(null)
    
    useEffect(()=>{
        const fetchTickets = async() => {
            const response = await fetch('/api/ticket')
            const json = await response.json()
            if(!response.ok){
                setError(json)
            }
            if(response.ok){
                setTickets(json)
                setError(null)
            }
        }
        fetchTickets()
    },[])

    return(
        <>
            <Nav />
            <div className="tickets">
            <h2 className="ticket-header"><img src={ticketicon} style={{height:30, marginRight:15, position: 'relative', top:5}}/>Tickets List</h2>
            <div>
            {tickets.map((ticket,i)=>(
                <div key={i}>
                <TicketArea ticket={ticket} />
                <div className="ticket-line">
                    <img src={greyplane} className="line-logo"></img>
                    <div className="line"></div>
                    <img src={greyplane} className="line-logo mirror"></img>
                </div>
                </div>
            ))}
            
            </div>
            </div>
            <Footer />
        </>
    )
}