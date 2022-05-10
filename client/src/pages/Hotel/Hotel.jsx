import { useState } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight, faCircleXmark, faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import "./Hotel.scss"; 

const Hotel = () => {
    // useState
    const [slideIdx, setSlideIdx] = useState(0); 
    const [openModal, setOpenModal] = useState(false); 

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

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotel-container">
                {openModal && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpenModal(false)}/>
                    <FontAwesomeIcon icon={faCircleLeft} className="arrow" onClick={() => handleMove("left")}/>
                    <div className="slider-wrapper">
                        <img src={photos[slideIdx].src} alt="hotel" className="slider-img" />
                    </div>
                    <FontAwesomeIcon icon={faCircleRight} className="arrow" onClick={() => handleMove("right")}/>
                </div>}
                <div className="hotel-wrapper">
                    <button className="reserve-btn-top">Reserve</button>
                    <h1 className="hotel-title">Hôtel du Louvre, in The Unbound Collection by Hyatt</h1>
                    <div className="hotel-address">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Place André Malraux, 1st arr., 75001 Paris, France</span>
                    </div>
                    <span className="hotel-distance">Excellent location - 0.8mi from center</span>
                    <span className="hotel-price-highlight">Book a stay over $1000 at this property and get a free airport taxi</span>
                    <div className="hotel-imgs">
                        {photos.map((photo, idx) => (
                            <div className="hotel-img-wrapper">
                                <img 
                                    onClick={() => handleOpenModal(idx)}
                                    src={photo.src} 
                                    alt="hotel-img" 
                                    className="hotel-img"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotel-details">
                        <div className="hotel-details-texts">
                            <h1 className="hotel-title">Stay in the heart of Paris</h1>
                            <p className="hotel-description">
                                Located in the heart of Paris, this 5-star hotel offers elegant guest rooms in a Hausmannian-style building. Entirely renovated in 2019, it features a concierge and a tour desk with ticket service.
                                <br />
                                <br />
                                Decorated in a unique style, the bright air-conditioned guest rooms at the Hotel du Louver in the Unbound Collection by Hyatt are equipped with satellite TV, a mini-bar and free WiFi access. Many rooms offer views of famous Parisian landmarks and all rooms have a private bathroom, some include decorated with marble.
                                <br />
                                <br />
                                Hotel du Louver in the Unbound Collection by Hyatt is located 2 minutes from Palais Royal Metro Station, providing direct access to the Champs Elysees and the Place de la Bastille. Public parking is available nearby.
                                <br />
                                <br />
                                This is our guests' favorite part of Paris, according to independent reviews.
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
                            <h3>$750/night</h3>
                            <button>Reserve</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel