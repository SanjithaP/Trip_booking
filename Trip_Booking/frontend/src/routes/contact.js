import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/contact.jpg"
import Footer from "../components/Footer";
function Contact(){
    return(
        <>
        
        <Navbar/>
        <Hero
            cName="abouthero"
            heroImg={aboutImg}
            title="Contact"
            btnClass="hide"
            
        />
        <Footer/>
        </>
    )
}

export default Contact;