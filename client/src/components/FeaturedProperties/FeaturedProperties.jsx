import Spinner from "../Spinner/Spinner";
import useFetch from "../../hooks/useFetch";
import "./FeaturedProperties.scss"; 

const FeaturedProperties = () => {
    const { data, loading, error } = useFetch("/hotels"); // "/hotels?featured=false&limit=5"
    // console.log(data); 

    const ratings = (num) => {
        if(num >= 1 && num <= 3) {
            return "Avoid"
        }
        if(num > 3 && num <= 4.5) {
            return "Poor"
        }
        if(num > 4.6 && num <= 6) {
            return "Average"
        } 
        if(num > 6 && num <= 6.9) {
            return "Good"
        } 
        if(num >= 7 && num < 8.5) {
            return "Very Good"
        } 
        if(num > 8.5 && num < 9) {
            return "Great"
        } 
        if(num >= 9 && num < 9.5) {
            return "Excellent"
        }
        if(num >= 9.5) {
            return "Exceptional"
        }
    }

    return (
        <div className="featured-properties">
            {loading ? (
                <Spinner />
            ) : (
                    <>
                        {data.map((item) => (
                            <div className="featured-properties-item" key={item._id}>
                                <img 
                                src={item.photos[0]}
                                alt="hotel-img"
                                className="featured-properties-img" />
                                <span className="featured-properties-name">{item.name}</span>
                                <span className="featured-properties-city">{item.city}</span>
                                <span className="featured-properties-price">Starting from ${item.cheapestPrice}</span>
                                {item.rating && 
                                    <div className="featured-properties-rating">
                                        <button>{item.rating}</button>
                                        <span>{ratings(item.rating)}</span>
                                    </div>
                                }
                            </div>
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default FeaturedProperties