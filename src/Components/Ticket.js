import logo from '../Assets/Your-Airlines.svg'
import plane from '../Assets/Small_white_airplane.svg'
import barcode from '../Assets/Barcode.svg'
export default function Ticket(){
    return(
        <div className="ticket-card">
            <div className="ticket-left"><img src={logo} style={{width:55,objectFit:'cover', marginLeft:'10px', marginTop:'20px',fontFamily:'Montserrat'}} /></div>
            <div className="ticket-middle">
                <div className="middle-top">
                    <div className='mid-top-title'>
                        <img src={plane} style={{marginTop:6,height:24, objectFit:'cover', marginRight:30}}/> BOARDING PASS
                    </div>
                    <div className='ticket-details'>
                        <div className='details-title'>From<br/><span>Moscow</span></div>
                        <div className='details-title'>To<br/><span>San Francisco</span></div>
                        <div className='gates'>
                        <>
                            <div className='details-title'>Gate<br /><span>08</span></div>
                        </>
                        <>
                            <div className='details-title'>Seat<br/><span>15B</span></div>
                        </>
                     {/* <img src={}></img> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='dotted' />
            <div className="ticket-right">
                <div className="right-top">
                    <p>BOARDING PASS</p>
                </div>
            </div>
        </div>
    )
}