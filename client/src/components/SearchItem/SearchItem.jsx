import { Link } from "react-router-dom"; 
import "./SearchItem.scss"; 

const SearchItem = ({ item }) => {
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
    }; 

    return (
        <div className="search-item">
            <img 
                src={item.photos[0]}
                alt="hotel-img"
                className="search-item-img"
            />
            <div className="search-item-description">
                <h1 className="search-item-title">{item.name}</h1>
                <span className="search-item-distance">{item.distance} miles from center</span>
                <span className="search-item-taxiOp">Free airport taxi</span>
                <span className="search-item-subtitle">{item.title}</span>
                <span className="search-item-features">{item.description}</span>
                <span className="search-item-cancelOp">Free cancellation</span>
                <span className="search-item-cancelOp-subtitle">Book now!</span>
            </div>
            <div className="search-item-details">
                {item.rating && <div className="search-item-rating">
                    <span>{ratings(item.rating)}</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="search-item-detail-texts">
                    <span className="search-item-price">${item.cheapestPrice}</span>
                    <span className="search-item-taxOp">Include taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="search-item-checkButton">See Availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem