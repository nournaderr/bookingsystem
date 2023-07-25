import { useEffect, useState } from "react"
import calendar from '../../Assets/purpcalender.svg'
import dealPic from '../../Assets/Capture.png'
import fireicon from '../../Assets/fire.svg'
export default function Deals(){
    const [dealsList,setDealsList] = useState([])

    useEffect(()=>{
        const loadDeals = () => {
        const deal =[
            {
                title: 'Cox\'s Bazar - the never ending beach',
                imageUrl: '../../Assets/Capture.png',
                price: 2500,
                duration: 5
            },{
                title: 'Cox\'s Bazar - the never ending beach',
                imageUrl: '../../Assets/Capture.png',
                price: 2500,
                duration: 5
            },{
                title: 'Cox\'s Bazar - the never ending beach',
                imageUrl: '../../Assets/Capture.png',
                price: 2500,
                duration: 5
            },{
                title: 'Cox\'s Bazar - the never ending beach',
                imageUrl: '../../Assets/Capture.png',
                price: 2500,
                duration: 5
            },
        ]
        setDealsList(deal);
        }
        loadDeals()
    },[])
    return(
        <>

        <h2 className="deals-header"><img src={fireicon} style={{height:30,width:30, position:"relative",top:5, marginRight:10, marginTop:10}}/>Hot Deals</h2>
        <div className="deals-container">
            {dealsList.map((deal) =>
                (<div className="deal">
                    <img src={dealPic} className="deal-img"/>
                    <div className="deal-title">{deal.title}</div>
                    <p><img src={calendar} className="deal-cal" /> {deal.duration} days</p>
                    <div className="deal-title">{deal.price} EGP / <span className="deal-month">person</span></div>
                </div>)
            )}
        </div>
        </>
    )
}