import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero"
            heroImg="https://topyourtravel.com/images/images/57.jpg"
            title="Your Journey Your Destination"
            para="Choose your favourite destination"
            buttonText="Travel Plan"
            url="/travel-plan" // Update the URL here
            btnClass="show"
        />

        <Destination></Destination>
        <Trip></Trip>
        <Footer/>
        </>
    )
}

export default Home;