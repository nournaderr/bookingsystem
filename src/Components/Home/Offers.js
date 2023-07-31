import { useEffect, useState } from "react"
import offerPic from '../../Assets/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.png'
import gifticon from'../../Assets/gift.png'
export default function Offers (){
    const [offersList, setOffersList] = useState([])
    const [error,setError] = useState(null)

    useEffect(()=>{
        const loadOffers = async () => {
            const response = await fetch('/api/offers')
            const json = await response.json()
            if(response.ok){
                setOffersList(json)
                setError(null)
            }
            if(!response.ok){
                setError(json)
            }
        }
        loadOffers()
    },[])
    return(
        <>
            <div className="offers-header"><img src={gifticon} style={{height:25,width:25, marginRight:10, position:"relative",top:5}}/>Offers</div>
            <div className="offers-container">
                {offersList.map((offer, i) => (
                    <div className="offer" key={i}>
                        <img src={offer.offerimage} className="offer-img" />
                        <div className="offer-title">{offer.offertitle}</div>
                        <div className="offer-desc">{offer.offerdescription}</div>
                        {/* <button className="offers-btn in-btn">Offers</button> */}
                    </div>
                ))
                
            }
            </div>

        </>
    )
}