import Footer from "../Components/Footer"
import About from "../Components/Home/About"
import FlightSearch from "../Components/Home/FlightSearch"
import Nav from "../Components/Nav"
import '../styles/Home.css'
export default function Home() {
    return(
        <>
            <Nav />
            <div className="home-body">
                <About />
                <FlightSearch />
            </div>
            <Footer/>
        </>
        
    )
}