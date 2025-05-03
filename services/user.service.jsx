import { dataService } from "./data.service";
import { networkService } from "./network.service";


class UserService {

    constructor() {}

    // check if user is logged in
    async isLoggedIn() {
        // check if user is in local storage
        let token = localStorage.getItem('token');
        if(token){

            // check if token is valid
            let user = JSON.parse(localStorage.getItem('user'));
            if(!user) return false;
            // check if token is valid
            const res = await networkService.getUser('/user');
            console.log(res);

            // let d = dataService.checkToken(token, user.username);




            return true
        } else {
            return false
        }
    }

    // register user
    async registerUser(data) {
        // create user        
        let d = await networkService.registerUser(data);
        console.log(d);

        if(d && d.token && d.user){
            // set user to storage 

            localStorage.setItem('user', JSON.stringify(d.user));

            // set token to storage
            localStorage.setItem('token', d.token);

            return d.user
        } else {
            return null
        }


    }


    async loginUser(data) {
        // create user        
        let d = await dataService.returnUser(data.username, data.password);
        console.log(d);

        if(d){
            // set user to storage 
            localStorage.setItem('user', JSON.stringify(d));

            // set token to storage
            localStorage.setItem('token', d.token);

            return d
        } else {
            return null
        }


    }




}

// Export a single instance (Singleton pattern)
export const userService = new UserService();