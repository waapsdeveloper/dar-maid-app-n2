import { dataService } from "./data.service";


class UserService {
    constructor() {}


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