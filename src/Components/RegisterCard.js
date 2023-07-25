import '../styles/Register.css'
import Lottie from "lottie-react";
import ap from '../lotties/animation_ljzrexsp.json'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
export default function RegisterCard (){
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('/otp')
    }
    return(
        <div className="register-card">
             <div className="title">
            <div className="lottie">
            <Lottie loop={true} animationData={ap} style={{height: 100}}/>
            </div>
            <h2>YOUR LOGO <br></br><span className='airline'>AIRLINE</span></h2>
            </div>
            <div className='register-form'>
            <div className='h'>Hello,<br/><span className='ca'>Create Account</span></div>
          
            <form>
            <div className="scrollable-container" >
            <label>Username:</label>
            <input name="Username" placeholder='Adham' className='reg-inputs'/>
            <label>Email:</label>
            <input name="email" placeholder='adham@gm.com' className='reg-inputs'/>
            <label>Password:</label>
            <input name="password" type='password' placeholder='*****' className='reg-inputs'/>
            <label>Re-enter Password:</label>
            <input name="Re Password" type='password' placeholder='*****' className='reg-inputs'/>
            <label>Phone number:</label>
            <input name="phone number" placeholder='01110000001' className='reg-inputs'/>
           <div className='center'>
            <button className='login-btn' onClick={handleRegister}>Create Account</button>
            </div>
           <div className='sign'>
                <a className='have-acc' href=''>I have an Account</a>
                <a className='sign-in' href='/login'> SIGN IN</a>
            </div>
            </div>
            </form>
           
            </div>
        </div>
    )
    
}