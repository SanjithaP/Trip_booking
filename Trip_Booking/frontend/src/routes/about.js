import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/about.jpeg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="abouthero"
            heroImg={aboutImg}
            title="About Us"
            btnClass="hide"
            
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;