import DestinationData from "./DestinationData";
import "./DestinationStyle.css";
import taj1 from "../assets/tajmahal.jpg"
import taj2 from "../assets/tajmahal2.jpg"
import ajanta1 from"../assets/AjantaCaves1.jpg"
import ajanta2 from "../assets/AjantaCaves2.jpeg"
import kodaikanal1 from"../assets/kodai1.jpeg"
import kodaikanal2 from "../assets/kodai2.jpeg"
import golden1 from "../assets/goldentemple1.jpg"
import golden2 from "../assets/goldentemple2.jpg"
import ooty1 from "../assets/ooti1.jpg"
import ooty2 from "../assets/ooti2.jpg"
import manali1 from "../assets/manali1.jpg"
import manali2 from "../assets/manali2.jpg"
import varkala1 from "../assets/varkala1.jpg"
import varkala2 from "../assets/varkala2.jpg"
const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Explore more to enjoy more!</p>
            <DestinationData
                className="first-des"
                heading="Taj Mahal, Agra"
                text="Visiting the Taj Mahal is a breathtaking experience! This iconic monument, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, is renowned for its stunning architecture and intricate details. As you approach this breathtaking monument, the sheer grandeur of its white marble façade, shimmering in the sunlight, will take your breath away. The intricate carvings and stunning symmetry are a feast for the eyes, making it a photographer's paradise."
                img1={taj1}
                img2={taj2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Ajantha Caves, Aurangabad "
                text="
The Ajanta Caves, a UNESCO World Heritage Site, are a stunning group of rock-cut caves located in Maharashtra, India. Dating back to the 2nd century BCE to about 480 CE, these caves are famous for their exquisite murals and intricate sculptures that depict Buddhist themes and stories.

Visitors can explore around 30 caves, each showcasing remarkable artistry and craftsmanship, with stunning frescoes that illustrate the life of Buddha and various Jataka tales. The caves are set against a scenic backdrop of lush greenery and a winding river, enhancing their allure."
                img1={ajanta1}
                img2={ajanta2}
            />
            <DestinationData
                className="first-des"
                heading="Kodaikanal"
                text="Kodaikanal, often referred to as the Princess of Hill Stations, is a breathtaking destination in Tamil Nadu, India. Nestled in the Western Ghats, this charming hill station is known for its cool climate, lush forests, and stunning views. Visitors can explore beautiful spots like the serene Kodaikanal Lake, where boating and picnicking are popular activities. The Coaker's Walk offers a mesmerizing view of the valleys and mountains, perfect for a leisurely stroll.

Kodaikanal is also famous for its rich flora, including the rare Kurinji flower that blooms once every twelve years. Nature enthusiasts can trek through the scenic trails, visit waterfalls like Silver Cascade, and enjoy the vibrant local markets. "
                img1={kodaikanal1}
                img2={kodaikanal2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Golden Temple, Amritsar"
                text="The Golden Temple, or Harmandir Sahib, in Amritsar is a stunning architectural marvel and a revered spiritual site for Sikhs. Surrounded by a serene pool, its glimmering golden dome attracts millions of visitors each year. Known for its welcoming atmosphere, the temple features a community kitchen (langar) that serves free meals to thousands daily, embodying Sikh principles of equality and service. The interior showcases intricate marble work and beautiful frescoes, while the soothing hymns sung by the Granthi create a spiritual ambiance. With its rich history and vibrant culture, the Golden Temple is a must-visit destination for all travelers. "
                img1={golden1}
                img2={golden2}
            />
            <DestinationData
                className="first-des"
                heading="Ooty"
                text="
Ooty, often referred to as the Queen of Hill Stations, is a picturesque destination in Tamil Nadu, India. Nestled in the Nilgiri Hills, it is renowned for its lush greenery, charming landscapes, and cool climate. The scenic Ooty Lake is perfect for boating, while the botanical gardens showcase a stunning collection of flowers and plants.

Visitors can enjoy the famous Nilgiri Mountain Railway, a UNESCO World Heritage site, which offers a delightful train ride through breathtaking hills and valleys. Ooty is also known for its tea plantations, where visitors can explore the rolling hills and savor fresh tea. With its serene environment, pleasant weather, and natural beauty, Ooty is an ideal getaway for relaxation and adventure. "
                img1={ooty1}
                img2={ooty2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Manali"
                text="Manali, a stunning hill station in Himachal Pradesh, India, is renowned for its breathtaking landscapes and vibrant culture. Nestled in the Himalayas, it offers a perfect blend of adventure and tranquility, with snow-capped mountains, lush forests, and the Beas River surrounding it. Visitors can indulge in activities like trekking, skiing, and paragliding, making it a paradise for adventure enthusiasts. The charming old town features the historic Hadimba Temple, while nearby Solang Valley and Rohtang Pass provide spectacular views and outdoor fun. With its pleasant climate and picturesque scenery, Manali is an unforgettable escape for travelers seeking natural beauty and adventure. "
                img1={manali1}
                img2={manali2}
            />
            <DestinationData
                className="first-des"
                heading="Varkala, Kerala"
                text="Varkala is an emerging gem in Kerala, perfect for tourism enthusiasts seeking a unique beach experience. Known for its stunning red cliffs and pristine beaches, Varkala offers breathtaking views of the Arabian Sea that attract visitors year-round. The famous Varkala Beach is ideal for sunbathing and swimming, while the serene Papanasam Beach holds spiritual significance and is perfect for peaceful reflection.

Tourists can explore the ancient Janardhana Swami Temple, adding a cultural touch to their visit. With a vibrant local market, Ayurvedic wellness centers, and opportunities for water sports, Varkala caters to all types of travelers, making it an unforgettable destination. "
                img1={varkala1}
                img2={varkala2}
            />
        </div>
    )
}

export default Destination;