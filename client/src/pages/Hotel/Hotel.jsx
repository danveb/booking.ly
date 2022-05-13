import { useContext, useState } from "react"; 
import { useLocation, useNavigate } from "react-router-dom";
import { Header, Navbar, MailList, Footer, Spinner, Reserve } from "../../components/index"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight, faCircleXmark, faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import "./Hotel.scss"; 

const Hotel = () => {
    // useContext
    const { user } = useContext(AuthContext); 

    // useNavigate
    const navigate = useNavigate(); 

    // useState
    const [slideIdx, setSlideIdx] = useState(0); 
    const [openModal, setOpenModal] = useState(false); 
    const [openBook, setOpenBook] = useState(false); 

    // useLocation 
    const location = useLocation(); 
    const hotelId = location.pathname.split("/")[2]; 

    // useFetch
    const { data, loading, error } = useFetch(`/hotels/find/${hotelId}`); 

    // useContext
    const { dates, options } = useContext(SearchContext); 
    console.log(dates); 

    const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24; 
    function dayDifference (date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime()); 
        const diffDays = Math.ceil(timeDiff / MILISECONDS_PER_DAY); 
        return diffDays; 
    };

    const days = dayDifference(dates[0].endDate, dates[0].startDate); 

    // static hotel images 
    // to remove once db in place
    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/334999596.jpg?k=eb3de4b18f59c97c16001eed2c88779e378d74b363b3907573e612c1f6d5f0f7&o=&hp=1", 
        }, 
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/334999633.jpg?k=eb7a97a333929ce212301fd3ebf4e2e733e8e2332d43a364e4311361f88fd748&o=&hp=1", 
        }, 
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/334999599.jpg?k=6e777ddf80a5a17bf6f147c7351fcacdf67e2bd2995a32f2c5201e0a363ebbd5&o=&hp=1", 
        }, 
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/334999598.jpg?k=b4075f253370b510e9b5b654659891fc1f291e52657d41ccd791a682838db1c8&o=&hp=1", 
        }, 
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/334999601.jpg?k=c7195617677d24b18442110ffc0819fb23877d59bbb5d866bc48c7ede5d67591&o=&hp=1", 
        }, 
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/334999619.jpg?k=6e5970d771eb166916d771a0c1d5b9a23ea6dd17c8ff3821333721d15e2d0635&o=&hp=1", 
        },
    ]; 

    const handleOpenModal = (idx) => {
        setSlideIdx(idx); 
        setOpenModal(true); 
    }; 

    const handleMove = (direction) => {
        let newIdx; 
        if(direction === "left") {
            newIdx = slideIdx === 0 ? 5 : slideIdx - 1
        } else {
            newIdx = slideIdx === 5 ? 0 : slideIdx + 1
        }; 
        setSlideIdx(newIdx); 
    }; 

    const handleClick = () => {
        if(user) {
            setOpenBook(true); 
        } else {
            navigate("/login"); 
        };
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? (
                <Spinner />
            ) : (
                <> 
                    <div className="hotel-container">
                    {openModal && <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpenModal(false)}/>
                        <FontAwesomeIcon icon={faCircleLeft} className="arrow" onClick={() => handleMove("left")}/>
                        <div className="slider-wrapper">
                            <img src={data.photos[slideIdx]} alt="hotel" className="slider-img" />
                        </div>
                        <FontAwesomeIcon icon={faCircleRight} className="arrow" onClick={() => handleMove("right")}/>
                    </div>}
                    <div className="hotel-wrapper">
                        <button className="reserve-btn-top">Reserve</button>
                        <h1 className="hotel-title">{data.name}</h1>
                        <div className="hotel-address">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{data.address}</span>
                        </div>
                        <span className="hotel-distance">Excellent location - {data.distance} miles from center</span>
                        <span className="hotel-price-highlight">Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi</span>
                        <div className="hotel-imgs">
                            {data.photos?.map((photo, idx) => (
                                <div className="hotel-img-wrapper" key={data._id}>
                                    <img 
                                        onClick={() => handleOpenModal(idx)}
                                        src={photo} 
                                        alt="hotel-img" 
                                        className="hotel-img"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="hotel-details">
                            <div className="hotel-details-texts">
                                <h1 className="hotel-title">{data.title}</h1>
                                <p className="hotel-description">
                                    {data.description}
                                </p>
                            </div>
                            <div className="hotel-details-price">
                                <h1>Highlights</h1>
                                <span>
                                    <FontAwesomeIcon icon={faHeart} />
                                    Located in the heart of Paris, this property has an excellent location score of 9.7
                                </span>
                                <h2>Breakfast Info</h2>
                                <span>
                                    Contintental, Vegetarian, Vegan, Gluten-free, American
                                </span>
                                <h3>${days * data.cheapestPrice * options.room} ({days} nights)</h3>
                                <h4>${data.cheapestPrice}/night</h4>
                                <button onClick={handleClick}>Reserve Now</button>
                            </div>
                        </div>
                    </div>
                    <MailList />
                    <Footer />
                </div>
                </>
                )}
            {openBook && <Reserve setOpenModal={setOpenBook} hotelId={hotelId} />}
        </div>
    )
}

export default Hotel