import { useState } from "react"; 
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { Header, Navbar, SearchItem, Spinner } from "../../components/index"; 
import useFetch from "../../hooks/useFetch";
import "./List.scss"; 

const List = () => {
    // useLocation
    const location = useLocation(); 
    // console.log(location); 

    // useState
    const [destination, setDestination] = useState(location.state.destination); 
    const [dates, setDates] = useState(location.state.dates); 
    const [openDate, setOpenDate] = useState(false); 
    const [options, setOptions] = useState(location.state.options); 
    const [min, setMin] = useState(undefined); 
    const [max, setMax] = useState(undefined); 

    // useFetch 
    const { data, loading, error, reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || Infinity}`); 

    // handleClick
    const handleClick = () => {
        reFetch(); 
    };

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
                            <span onClick={() => setOpenDate(!openDate)}>{ `${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}` }</span>
                            {openDate && <DateRange 
                                onChange={item => setDates([item.selection])}
                                minDate={new Date()}
                                ranges={dates}
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
                                        onChange={e => setMin(e.target.value)}
                                    />
                                </div>
                                <div className="list-search-option-item">
                                    <span className="list-search-option-text">Max price <small>per night</small></span>
                                    <input
                                        type="number"
                                        className="list-search-option-input" 
                                        onChange={e => setMax(e.target.value)}
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
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="list-result">
                        {loading ? (
                            <Spinner />
                        ) : (
                                <>
                                {data.map((item) => (
                                    <SearchItem item={item} key={item._id} />
                                ))}
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List