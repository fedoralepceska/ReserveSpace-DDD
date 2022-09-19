import React from "react";
import {Link} from 'react-router-dom'

const RoomTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.roomType}</td>
            <td scope={"col"}>{props.term.pricePerNight}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info m-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/rooms/edit/${props.term.id}`}>Edit</Link>
                <a title={"Reserve"} className={"btn btn-danger"}
                   onClick={() => props.onReserve(props.term.id)}>
                    Reserve
                </a>
            </td>
        </tr>
    )
}
export default RoomTerm;