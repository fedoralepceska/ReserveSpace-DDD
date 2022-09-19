import './App.css';
import React, {Component} from "react"
import {BrowserRouter as Router, Route,Navigate,Routes} from "react-router-dom";
import ReserveSpaceService from "../../repository/ReserveSpaceRepository";
import RoomAdd from "../Rooms/addRoom/addRoom";
import RoomEdit from "../Rooms/editRoom/editRoom";
import Rooms from "../Rooms/roomList/rooms";
import Orders from "../Orders/orders";
import Header from "../Header/header";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      orders :[],
      reservedRoom: {}
    }
  }

  render() {
    return (
        <Router>
          <main>
            <Header/>
            <div className="container">
              <Routes>
                <Route path={"/orders"} element={ <Orders categories={this.state.orders}  />}/>
                <Route path={"/rooms/add"} element={<RoomAdd orders={this.state.orders}
                                                             onRoomAdd={this.addRoom}/>}/>
                <Route path={"/rooms/edit/:id"} element={<RoomEdit onEditRoom={this.editRoom} room={this.state.reservedRoom}
                                                                   orders={this.state.orders}/>}/>
                <Route path={"/rooms"} element={ <Rooms rooms={this.state.rooms}  onDelete={this.deleteRoom}  onEdit={this.getRoom} onReserve={this.reserve}/>}/>
                <Route path="/" element={<Navigate to="/rooms" replace />}/>
              </Routes>


            </div>
          </main>
        </Router>

    );
  }
  loadRooms = () => {
    ReserveSpaceService.fetchRooms()
        .then((data) => {
          this.setState({
            rooms: data.data
          })
        });
  }
  deleteRoom= (id) =>{
      ReserveSpaceService.deleteRoom(id)
        .then(()=> {
          this.loadRooms()
        });
  }
  getRoom= (id) => {
      ReserveSpaceService.getRoom(id)
        .then((data) => {
          this.setState({
            reservedRoom: data.data
          });
        })
  }
  editRoom= (id,roomType,pricePerNight) => {
      ReserveSpaceService.editRoom(id,roomType,pricePerNight)
        .then(()=> {
          this.loadRooms()
        });
  }
  loadOrders = () => {
      ReserveSpaceService.fetchOrders()
        .then((data) => {
          this.setState({
              orders: data.data
          })
        });
  }
  addRoom= (roomType,pricePerNight) => {
      ReserveSpaceService.addRoom(roomType,pricePerNight)
        .then(()=> {
          this.loadRooms()
        });
  }
  reserve = (id) => {
      ReserveSpaceService.reserve(id)
        .then(()=> {
          this.loadRooms()
        });
  }

  componentDidMount() {
    this.loadRooms();
    this.loadOrders();

  }

}

export default App;