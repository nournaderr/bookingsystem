import calendar from "../../Assets/calendar.svg"
import landing from "../../Assets/airplane-landing.svg"
import takeoff from "../../Assets/airplane-takeoff.svg"
import searchicon from "../../Assets/search-icon.svg"
export default function FlightSearch(){
    return(
        <div className="flight-search-card">
            <div className="flight-field">
                <div className="field-label">
                <img src={takeoff} className= 'field-icon'></img>
                    <p>From</p>
                </div>
                <input className="flight-i" placeholder="Cairo (CAI)" />
            </div>
            <div className="flight-field">
                <div className="field-label">
                <img src={landing} className= 'field-icon'></img>
                    <p>To</p>
                </div>
                <input className="flight-i" placeholder="Los Angeles (LAX)" />
            </div>
            <div className="flight-field">
                <div className="field-label">
                <img src={calendar} className= 'field-icon'></img>
                    <p>from Date</p>
                </div>
                <input className="flight-i" type="date"/>
            </div>
            <div className="flight-field">
                <div className="field-label">
                    <img src={calendar} className= 'field-icon'></img>
                    <p>to Date</p>
                </div>
                <input className="flight-i" type="date"/>
            </div>
            <button className="offers-btn search-btn" ><img src={searchicon} className= 'field-icon'></img>Search</button>
        </div>
    )
}