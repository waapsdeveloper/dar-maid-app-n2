
class UtilityService {

    constructor() {}

    showLoader() {

    }

    hideLoader() {

    }

    showToast(message: string, type: 'success' | 'error' | 'info') {
        // Implement toast notification logic here
        console.log(`${type.toUpperCase()}: ${message}`);
    }

    

    

}

export const utilityService = new UtilityService();