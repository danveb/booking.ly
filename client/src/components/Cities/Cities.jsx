import useFetch from "../../hooks/useFetch";
import Spinner from "../Spinner/Spinner";
import milan1 from "../../assets/milan1.jpg"; 
import london1 from "../../assets/london1.jpg"; 
import sf1 from "../../assets/sf1.jpg"; 
import "./Cities.scss"; 

const Cities = () => {
    // useFetch
    const { data, loading, error } = useFetch("/hotels/countByCity?cities=Paris,Milan,Berlin"); 
    // console.log(data); 

    return (
        <div className="cities">
            {loading ? (
                <Spinner />
            ) : ( <>
                    <div className="cities-item">
                        <img src={sf1} alt="sf" className="cities-img" />
                        <div className="cities-titles">
                            <h1>Paris</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="cities-item">
                        <img src={milan1} alt="sf" className="cities-img" />
                        <div className="cities-titles">
                            <h1>Milan</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="cities-item">
                        <img src={london1} alt="sf" className="cities-img" />
                        <div className="cities-titles">
                            <h1>Berlin</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div></> 
                )
            }
        </div>
    )
}

export default Cities