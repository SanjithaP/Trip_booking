import "./TripStyles.css";
import TripData from "./TripData";
import gol from "../assets/golkonda.jpg"
import leh from "../assets/leh.png"
import kashi from "../assets/kaashi.jpg"
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Here, you can discover unique places to enjoy</p>
            <div className="tripcard">
                <TripData
                    image={gol}
                    heading="Trip to Golkonda Fort"
                    para="Golconda Fort, located in Hyderabad, Telangana, India, is a monumental fortress complex that stands as a testament to the region's rich history. Initially constructed in the 13th century by the Kakatiya dynasty, it was expanded by the Qutb Shahi dynasty into a massive fortification of granite extending around 5 km."
                />
                <TripData
                    image={leh}
                    heading="Trip to leh-ladak"
                    para="The ultimate road trip of the season is here. Leh Ladakh road trip is one of the highly rated road trips on the earth. Road trips to Leh Ladakh are filled with colourful monasteries, narrow roads with steep curves, the most scenic snow topped Himalayan range and Karakoram mountain ranges, and many other surreal spots."
                />
                <TripData
                    image={kashi}
                    heading="Trip to Kaashi"
                    para="Varanasi is for everyone and very reasonable in terms of food and accommodation. There are a number of hostels, guest houses, Air BNB, and hotels available as per the budget. Point– Don't forget to check in near the ghat because you'll be able to see a spectacular sunrise from there in the morning."
                />
            </div>
        </div>
    )
}

export default Trip;