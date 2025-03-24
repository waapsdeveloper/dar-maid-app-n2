

class UserService {
    constructor() {}


    async loginUser(data) {
        // create user
        console.log(data);
    }




}

// Export a single instance (Singleton pattern)
export const userService = new UserService();