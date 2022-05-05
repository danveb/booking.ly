import { useState } from "react"; 
import { faBed, faCalendarDays, faCarOn, faPerson, faPlaneUp, faTaxi } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { DateRange } from "react-date-range"; 
import "react-date-range/dist/styles.css"; // react-date-range CSS
import "react-date-range/dist/theme/default.css"; //theme css file
import { format } from "date-fns"; 
import "./Header.scss"; 

const Header = ({ type }) => {
    // useState 
    const [openDate, setOpenDate] = useState(false); 

    const [date, setDate] = useState([
        {
            startDate: new Date(), 
            endDate: new Date(), 
            key: "selection"
        }, 
    ]); 

    const [openOptions, setOpenOptions] = useState(false); 
    const [options, setOptions] = useState({
        adult: 1, 
        children: 0, 
        room: 1, 
    }); 

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === "increase" ? options[name] + 1 : options[name] - 1
            }
        }); 
    }; 

    return (
        <div className="header">
            <div className={type === "list" ? "header-container list-mode" : "header-container"}>
                <div className="header-list">
                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faPlaneUp} />
                        <span>Flights</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faCarOn} />
                        <span>Cars</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxis</span>
                    </div>
                </div>
                {   type !== "list" && 
                    <>
                    <h1 className="header-title">All your travel bookings in one place. It's Marvelous.</h1>
                    <p className="header-description">Travel anywhere in the world - visit new destinations and start saving with a free account.</p>
                    <button className="header-btn">Let's Go!</button>
                    <div className="header-search">
                        <div className="header-search-item">
                            <FontAwesomeIcon 
                                icon={faBed} 
                                className="header-icon" 
                            />
                            <input 
                                type="text"
                                placeholder="Where are you going?"
                                className="header-search-input"
                            />
                        </div>
                        <div className="header-search-item">
                            <FontAwesomeIcon 
                                icon={faCalendarDays} 
                                className="header-icon" 
                            />
                            <span onClick={() => setOpenDate(!openDate)}className="header-search-text">
                            { `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} ` }
                            </span>
                            {openDate && <DateRange 
                                editableDateInputs={true}
                                onChange={item =>setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                            />}
                        </div>
                        <div className="header-search-item">
                            <FontAwesomeIcon 
                                icon={faPerson} 
                                className="header-icon" 
                            />
                            <span onClick={() => setOpenOptions(!openOptions)}className="header-search-text">
                            { `${options.adult} adult . ${options.children} children . ${options.room} room`}
                            </span>
                            {openOptions && <div className="options">
                                <div className="option-item">
                                    <span className="option-text">Adult</span>
                                    <div className="option-counter">
                                        <button 
                                            disabled={options.adult <= 1}
                                            className="option-counter-btn" 
                                            onClick={() => handleOption("adult", "decrease")}
                                        >-</button>
                                        <span className="option-counter-num">{options.adult}</span>
                                        <button 
                                            className="option-counter-btn" 
                                            onClick={() => handleOption("adult", "increase")}
                                        >+</button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span className="option-text">Children</span>
                                    <div className="option-counter">
                                        <button 
                                            disabled={options.children <= 0}
                                            className="option-counter-btn" 
                                            onClick={() => handleOption("children", "decrease")}
                                        >-</button>
                                        <span className="option-counter-num">{options.children}</span>
                                        <button
                                            className="option-counter-btn" 
                                            onClick={() => handleOption("children", "increase")}
                                        >+</button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span className="option-text">Room</span>
                                    <div className="option-counter">
                                        <button 
                                            disabled={options.room <= 1}
                                            className="option-counter-btn" 
                                            onClick={() => handleOption("room", "decrease")}
                                        >-</button>
                                        <span className="option-counter-num">{options.room}</span>
                                        <button 
                                            className="option-counter-btn" 
                                            onClick={() => handleOption("room", "increase")}
                                        >+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="header-search-item">
                            <button className="header-btn">Search</button>
                        </div>
                    </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header