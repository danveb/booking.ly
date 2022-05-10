import "./SearchItem.scss"; 

const SearchItem = () => {
    return (
        <div className="search-item">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/135005484.webp?k=a45e8aeffcf45ae00de154d24e06e45693e893d8edd81e66a531eaa9088a07d7&o=&s=1"
                alt=""
                className="search-item-img"
            />
            <div className="search-item-description">
                <h1 className="search-item-title">Hôtel du Louvre, in The Unbound Collection by Hyatt</h1>
                <span className="search-item-distance">0.8 miles from center</span>
                <span className="search-item-taxiOp">Free airport taxi</span>
                <span className="search-item-subtitle">Studio Room with Air Conditioning</span>
                <span className="search-item-features">Entire studio | 1 bathroom | 105 sq.ft | 1 king bed</span>
                <span className="search-item-cancelOp">Free cancellation</span>
                <span className="search-item-cancelOp-subtitle">Book now!</span>
            </div>
            <div className="search-item-details">
                <div className="search-item-rating">
                    <span>Excellent</span>
                    <button>8.8</button>
                </div>
                <div className="search-item-detail-texts">
                    <span className="search-item-price">$750</span>
                    <span className="search-item-taxOp">Include taxes and fees</span>
                    <button className="search-item-checkButton">See Availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem