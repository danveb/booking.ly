import milan1 from "../../assets/milan1.jpg"; 
import london1 from "../../assets/london1.jpg"; 
import sf1 from "../../assets/sf1.jpg"; 
import "./Cities.scss"; 

const Cities = () => {
    return (
        <div className="cities">
            <div className="cities-item">
                <img src={milan1} alt="sf" className="cities-img" />
                <div className="cities-titles">
                    <h1>Milan</h1>
                    <h2>75 properties</h2>
                </div>
            </div>
            <div className="cities-item">
                <img src={london1} alt="sf" className="cities-img" />
                <div className="cities-titles">
                    <h1>London</h1>
                    <h2>265 properties</h2>
                </div>
            </div>
            <div className="cities-item">
                <img src={sf1} alt="sf" className="cities-img" />
                <div className="cities-titles">
                    <h1>San Francisco</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Cities