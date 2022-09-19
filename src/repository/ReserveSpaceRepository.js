import axios from '../custom-axios/axios';

const ReserveSpaceService = {
    fetchRooms: () => {
        return axios.get("/rooms");
    },
    deleteRoom: (id) => {
        return axios.delete(`/rooms/delete/${id}`);
    },
    editRoom:(id,roomType, pricePerNight) => {
        return axios.put(`/rooms/edit/${id}`,{
            "roomType" : roomType,
            "pricePerNight" : pricePerNight
        });
    },
    getRoom: (id) => {
        return axios.get(`/rooms/${id}`)
    },
    fetchOrders: () => {
        return axios.get("/orders");
    },
    addRoom:(roomType, pricePerNight) => {
        return axios.post(`/rooms/add/`,{
            "roomType" : roomType,
            "pricePerNight" : pricePerNight
        });
    },
    reserve: (id) =>{
        return axios.put(`/rooms/reserve/${id}`)
    }
}
export default ReserveSpaceService;