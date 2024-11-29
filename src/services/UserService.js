import axios from "axios";

const USERS_REST_API_URL = "http://localhost:8081/api/users";
const USER_BY_ID = "http://localhost:8081/api/user/1";

class UserService {
  getUsers() {
    return axios.get(USER_BY_ID).then((res) => {
      const user = res.data;
    });
  }
}

export default new UserService();
