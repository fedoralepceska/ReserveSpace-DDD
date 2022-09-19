import React, {Component} from "react"
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import RoomTerm from "../roomTerm/roomTerm";

class Rooms extends Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 5
        }
    }
    render () {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.rooms.length / this.state.size);
        const rooms = this.getRoomsPage(offset, nextPageOffset);
        return (

            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Room type</th>
                                <th scope={"col"}>Price per night</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rooms}
                            </tbody>
                            <div className="col mb-3">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12">
                                        <Link className={"btn btn-block btn-dark"} to={"/rooms/add"}>Add new room</Link>
                                    </div>
                                </div>
                            </div>
                        </table>
                    </div>
                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
            </div>

        )
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getRoomsPage = (offset, nextPageOffset) => {
        return this.props.rooms.map((term, index) => {
            return (
                <RoomTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}
                          onReserve={this.props.onReserve}/>
            );
        }).filter((product, index) => {
            return index >= offset && index < nextPageOffset;
        })

    }

}
export default Rooms;
