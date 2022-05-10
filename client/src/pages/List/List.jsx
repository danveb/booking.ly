import { format } from "date-fns";
import { useState } from "react"; 
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header"; 
import Navbar from "../../components/Navbar/Navbar"; 
import SearchItem from "../../components/SearchItem/SearchItem";
import "./List.scss"; 

const List = () => {
    // useLocation
    const location = useLocation(); 
    // console.log(location); 

    // useState
    const [destination, setDestination] = useState(location.state.destination); 
    const [date, setDate] = useState(location.state.date); 
    const [openDate, setOpenDate] = useState(false); 
    const [options, setOptions] = useState(location.state.options); 

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="list-container">
                <div className="list-wrapper">
                    <div className="list-search">
                        <h1 className="list-search-title">Search</h1>
                        <div className="list-search-item">
                            <label htmlFor="destination">Destination</label>
                            <input 
                                type="text"
                                id="destination"
                                placeholder={destination}
                            />
                        </div>
                        <div className="list-search-item">
                            <label htmlFor="checkInDate">Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{ `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}` }</span>
                            {openDate && <DateRange 
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />}
                        </div>
                        <div className="list-search-item">
                            <label htmlFor="options">Options</label>
                            <div className="list-search-options">
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">Min price <small>per night</small></span>
                                    <input
                                        type="number"
                                        className="list-search-option-input" 
                                    />
                                </div>
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">Max price <small>per night</small></span>
                                    <input
                                        type="number"
                                        className="list-search-option-input" 
                                    />
                                </div>
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">Adult </span>
                                    <input
                                        type="number"
                                        className="list-search-option-input"
                                        placeholder={options.adult}
                                        min={1}
                                    />
                                </div>
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">Children </span>
                                    <input
                                        type="number"
                                        className="list-search-option-input"
                                        placeholder={options.children}
                                        min={0} 
                                    />
                                </div>
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">Room </span>
                                    <input
                                        type="number"
                                        className="list-search-option-input"
                                        placeholder={options.room} 
                                        min={1}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="list-result">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List