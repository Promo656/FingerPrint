import axios from "axios"
import {UsersType} from "../../BLL/reducers/usersReducer";

export const UserAPI = {
    async getData() {
        let response = await axios.get(`https://extreme-ip-lookup.com/json`)
        return response.data
    },
    async getViewCountData() {
        let response = await axios.get(`https://counter-d86e4.firebaseio.com/count.json`)
        return response.data
    },
    async incrementCount(num: number) {
        let response = await axios.put(`https://counter-d86e4.firebaseio.com/count.json`, {count: num})
        return response.data
    },

    async writeInformation(payload:UsersType) {
        let response = await axios.put(`https://counter-d86e4.firebaseio.com/userDdata.json`, {users:payload.users})
        return response.data
    },
    async getUsersInfo(){
        let response = await axios.get(`https://counter-d86e4.firebaseio.com/userDdata.json`)
        return response.data
    }
}
