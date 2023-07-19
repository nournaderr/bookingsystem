export default function FlightSearch(){
    return(
        <div className="flight-search-card">
            <div className="flight-field">
                <div className="field-label">
                    <p>From</p>
                </div>
                <input className="flight-i" placeholder="Cairo (CAI)" />
            </div>
            <div className="flight-field">
                <div className="field-label">
                    <p>To</p>
                </div>
                <input className="flight-i" placeholder="Los Angeles (LAX)" />
            </div>
            <div className="flight-field">
                <div className="field-label">
                    <p>from Date</p>
                </div>
                <input className="flight-i" type="date"/>
            </div>
            <div className="flight-field">
                <div className="field-label">
                    <p>to Date</p>
                </div>
                <input className="flight-i" type="date"/>
            </div>
            <button className="offers-btn search-btn">Search</button>
        </div>
    )
}