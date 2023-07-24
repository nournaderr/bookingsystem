import Lottie from "lottie-react";
import ap from '../lotties/animation_ljzrexsp.json'
import '../styles/Login.css'
import { useState } from "react";
export default function LoginCard (){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div className="login-card">
            <div className="title">
            <div className="lottie">
            <Lottie loop={true} animationData={ap} style={{height: 100}}/>
            </div>
            
            <h2>YOUR LOGO <br></br><span className='airline'>AIRLINES</span></h2>
            
            </div>
            <div className='login-form'>
            <div className='wb'>Welcome Back<br/><span className='wb-t'>It's time to travel!</span></div>
            <form>
            <label>Email:</label>
            <input 
                name="email" 
                placeholder='adham@gm.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input 
                name="password" 
                type='password' 
                placeholder='*****'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <a className='forgot' href=''>forgot password?</a>
            <button className='login-btn'>Login</button>
            <a className='forgot center' href='/register'>CREATE ACCOUNT!</a>
            </form>
            </div>
        </div>
    )
}