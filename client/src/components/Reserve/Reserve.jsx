import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios"; 
import "./Reserve.scss"; 

const Reserve = ({ setOpenModal, hotelId }) => {
    // useState
    const [selectedRooms, setSelectedRooms] = useState([]); 

    // useFetch
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`); 
    
    // useContext
    const { dates } = useContext(SearchContext);  

    // useNavigate
    const navigate = useNavigate(); 

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate); 
        const date = new Date(start.getTime()); 
        const list = []; 
    
        while(date <= end) {
            list.push(new Date(date).getTime()); 
            date.setDate(date.getDate() + 1); 
        }
        return list; 
    }; 

    const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate); 

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some(date => allDates.includes(new Date(date).getTime())); 
        return !isFound; 
    }; 

    // handleSelect
    const handleSelect = (e) => {
        const checked = e.target.checked; 
        const value = e.target.value; 
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value)); 
    }; 
    // console.log(selectedRooms); 

    // handleClick
    const handleClick = async () => {
        try {
            await Promise.all(selectedRooms.map((roomId) => {
                const response = axios.put(`/rooms/availability/${roomId}`, {
                    dates: allDates,
                }); 
                return response.data; 
            })); 
            setOpenModal(false); 
            navigate("/"); 
        } catch(err) {
            console.log(err.message); 
        };
    };

    return (
        <div className="reserve">
            <div className="reserve-container">
                <FontAwesomeIcon 
                    icon={faCircleXmark} 
                    className="reserve-close" 
                    onClick={() => setOpenModal(false)} 
                />
                <span>Select your rooms:</span>
                {data.map((item) => (
                    <div className="room-item" key={item._id}>
                        <div className="room-item-info">
                            <div className="room-item-title">{item.title}</div>
                            <div className="room-item-description">{item.description}</div>
                            <div className="room-item-max">Max people: <b>{item.maxPeople}</b></div>
                            <div className="room-item-price">${item.price}</div>
                        </div>
                        <div className="room-select-rooms">
                            {item.roomNumbers.map((roomNumber) => (
                                <div className="room">
                                    <label>{roomNumber.number}</label>
                                    <input 
                                        type="checkbox" 
                                        value={roomNumber._id} 
                                        onChange={handleSelect} 
                                        disabled={!isAvailable(roomNumber)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick}className="room-button">Reserve Now</button>
            </div>
        </div>
    )
}

export default Reserve