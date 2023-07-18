
import '../styles/Login.css';
import airplane from '../Assets/airplane.svg';
import LoginCard from '../Components/LoginCard';
export default function Login() {
    return(
        <div className="login">
            {/* <img src={bg} alt="Logo" className='bg'/> */}
            <img src={airplane} className='airplane'/>
            <LoginCard />
        </div>
    )
}