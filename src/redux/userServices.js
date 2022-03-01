import axios from "axios";
import { BASE_URL } from '../utils/apiEndpoint'

function userServices() {
    // get all user
    this.getUser = async () => await axios.get(BASE_URL + '/user')

    // delete user
    this.deleteUser = async id => await axios.delete(BASE_URL + `/user/${id}`)

    // create user
    this.addUser = async user => await axios.post(BASE_URL + '/user', user)

    // get user by id 
    this.getUserById = async (id) => await axios.get(BASE_URL + `/user/${id}`)

    // update user by id
    this.updateUser = async (id, user) => await axios.put(BASE_URL + `/user/${id}`, user)
}

export default new userServices();