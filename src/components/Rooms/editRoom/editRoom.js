import React from "react";
import {useNavigate} from "react-router-dom"

const RoomEdit = (props) => {
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
        const roomType = formData.roomType !== "" ? formData.roomType : props.room.roomType;
        const pricePerNight = formData.pricePerNight !== 0 ? formData.pricePerNight : props.room.pricePerNight;
        props.onEditRoom(props.room.id, roomType, pricePerNight);
        navigate("/rooms");

    }
    let i = 0;
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
                               placeholder={props.room.roomType}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price per night</label>
                        <input type="text"
                               className="form-control"
                               id="pricePerNight"
                               name="pricePerNight"
                               placeholder={props.room.pricePerNight}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )

}
export  default RoomEdit;