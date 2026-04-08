
import './Herostyles.css';

function Hero(props) {
    return (
        <div className={props.cName}>
            <img alt="Hero" src={props.heroImg} />
            <div className="hero-txt">
                <h1>{props.title}</h1>
                <p>{props.para}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </div>
    );
}



export default Hero;