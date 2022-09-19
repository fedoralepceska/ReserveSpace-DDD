import {useNavigate} from "react-router-dom"
import React from "react";


const RoomAdd = (props) => {
    const navigate = useNavigate()
    const [formData,updateFormData] = React.useState({
        roomType: "",
        pricePerNight: 0,
    })
    const handleChange = (e)=> {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const roomType = formData.roomType;
        const pricePerNight = formData.pricePerNight;
        props.onRoomAdd(roomType,pricePerNight);
        navigate("/rooms");

    }
    return(

        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Room type</label>
                        <input type="text"
                               className="form-control"
                               id="roomType"
                               name="roomType"
                               required
                               placeholder="Enter room type"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price per night</label>
                        <input type="text"
                               className="form-control"
                               id="pricePerNight"
                               name="pricePerNight"
                               required
                               placeholder="Enter price per night"
                               onChange={handleChange}>
                        </input>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )

}
export  default RoomAdd;