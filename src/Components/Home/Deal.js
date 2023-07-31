import { useState } from "react"
import dealPic from '../../Assets/Capture.png'
import '../../styles/Home.css'
import calendar from '../../Assets/purpcalender.svg'
import heart from '../../Assets/Icon feather-heart.svg'
import purpleHeart from '../../Assets/purple_heart.svg'
export default function Deal({deal}){
    const [liked,setLiked] = useState(false)
    return(
        <div className="deal" >
                    <div className="deal-cont">
                    <img src={dealPic} className="deal-img" />
                    <button className="deal-btn">
                        {!liked && <img src={heart} style={{height:80,width:80}} onClick={()=>{setLiked(true)}}/>}
                        {liked && <img src={purpleHeart} style={{height:80,width:80}} onClick={()=>{setLiked(false)}}/>}
                    </button>
                    </div>
                    <div className="deal-title">{deal.title}</div>
                    <p><img src={calendar} className="deal-cal" /> {deal.duration} days</p>
                    <div className="deal-title">{deal.price} EGP / <span className="deal-month">person</span></div>
                </div>
    )
}