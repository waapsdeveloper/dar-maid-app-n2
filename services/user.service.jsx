import { dataService } from "./data.service";
import { networkService } from "./network.service";

class UserService {
  constructor() {}

  // Check if user is logged in
  async isLoggedIn() {
    // Check if token exists in local storage
    let token = localStorage.getItem("token");
    if (token) {
      // Check if user exists in local storage
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) return false;

      // Check if token is valid
      const res = await networkService.getUser("/user");
      console.log("isLoggedIn response:", res);

      return true;
    } else {
      return false;
    }
  }

  // Register user
  async registerUser(data) {
    if (!data || !data.name || !data.email || !data.password) {
      console.error("Invalid registration data:", data);
      return null;
    }

    // Create user
    let d = await networkService.registerUser(data);
    console.log("registerUser response:", d);

    if (d && d.token && d.user) {
      // Set user to storage
      localStorage.setItem("user", JSON.stringify(d.user));

      // Set token to storage
      localStorage.setItem("token", d.token);

      return d.user;
    } else {
      return null;
    }
  }

  // Login user
  async loginUser(data) {
    if (!data || !data.email || !data.password) {
      console.error("Invalid login data:", data);
      return null;
    }

    try {
      // Call loginUser from networkService instead of dataService
      let d = await networkService.loginUser(data);
      console.log("loginUser response:", d);

      if (d && d.token) {
        // Set user to storage
        localStorage.setItem("user", JSON.stringify(d));

        // Set token to storage
        localStorage.setItem("token", d.token);

        return d;
      }
      return null;
    } catch (error) {
      console.error("Login error:", error);
      return null;
    }
  }
}

// Export a single instance (Singleton pattern)
export const userService = new UserService();
