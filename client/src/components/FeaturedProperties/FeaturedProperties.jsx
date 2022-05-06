import "./FeaturedProperties.scss"; 

const FeaturedProperties = () => {
    return (
        <div className="featured-properties">
            <div className="featured-properties-item">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/164158962.webp?k=af3b4c0f6b343a9cd4b4803c0229143a31214dd7cc6388c76913624afae6bc50&o=&s=1" className="featured-properties-img" />
                <span className="featured-properties-name">Hotel Arts Barcelona</span>
                <span className="featured-properties-city">Barcelona</span>
                <span className="featured-properties-price">Starting from $350</span>
                <div className="featured-properties-rating">
                    <button>9.7</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="featured-properties-item">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/328622199.webp?k=d8df548b71579dcd459a2ae49848f3687a23b9aec638ebdbb0a458199c5548d0&o=&s=1" className="featured-properties-img" />
                <span className="featured-properties-name">CitizenM San Francisco</span>
                <span className="featured-properties-city">San Francisco</span>
                <span className="featured-properties-price">Starting from $180</span>
                <div className="featured-properties-rating">
                    <button>9.2</button>
                    <span>Wonderful</span>
                </div>
            </div>
            <div className="featured-properties-item">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/254588957.webp?k=debeedee891c61a8d4a359842f4be70578d9cccc2f8b8a700d75f1ba4b24094e&o=&s=1" className="featured-properties-img" />
                <span className="featured-properties-name">Grand Hyatt San Francisco</span>
                <span className="featured-properties-city">San Francisco</span>
                <span className="featured-properties-price">Starting from $210</span>
                <div className="featured-properties-rating">
                    <button>8.5</button>
                    <span>Very Good</span>
                </div>
            </div>
            <div className="featured-properties-item">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/315361271.webp?k=295fb1c67101acb214bccaddab0ad4022cef7ae36aadf92d512e7bdec56d3cc9&o=&s=1" className="featured-properties-img" />
                <span className="featured-properties-name">Motel1 Zurich</span>
                <span className="featured-properties-city">Zurich</span>
                <span className="featured-properties-price">Starting from $270</span>
                <div className="featured-properties-rating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties