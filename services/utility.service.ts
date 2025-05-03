import Swal from 'sweetalert2';

class UtilityService {
  constructor() {}

  showLoader() {
    // Placeholder for loader logic
  }

  hideLoader() {
    // Placeholder for loader logic
  }

  showAlert(title, message, type) {
    return Swal.fire({
      title: title,
      text: message,
      icon: type, // 'success' or 'error'
      confirmButtonText: 'OK',
      timer: type === 'success' ? 2000 : 3000, // Auto-close: 2s for success, 3s for error
      timerProgressBar: true,
      showConfirmButton: true,
      confirmButtonColor: type === 'success' ? '#28a745' : '#dc3545', // Green for success, red for error
      allowOutsideClick: false,
    });
  }
}

export const utilityService = new UtilityService();