-- Users Table (Parent Table for All Roles)

-- Role Table (For Managing User Roles)
CREATE TABLE roles (
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL -- (Employee, Employer, Agency, Admin)
);

-- Assign Default Roles (Run this after table creation)
INSERT INTO roles (id, name) VALUES 
(1, 'Employee'), 
(2, 'Employer'), 
(3, 'Agency'), 
(4, 'Admin');

CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    role_id TINYINT UNSIGNED NOT NULL,  -- (1 = Employee, 2 = Employer, 3 = Agency, 4 = Admin)
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    verified_at TIMESTAMP NULL,  -- Laravel email verification
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Employees Table (Only for Role: Employee)
CREATE TABLE employees (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL UNIQUE, -- Reference to Users table
    nationality VARCHAR(100) NOT NULL,
    experience_years INT DEFAULT 0,
    skills TEXT NOT NULL, -- JSON format (e.g., ["Cleaning", "Cooking", "Babysitting"])
    availability ENUM('Available', 'Not Available') DEFAULT 'Available',
    preferred_interview_time VARCHAR(50) NULL, -- Free-text or predefined values
    document_verification_status ENUM('Pending', 'Verified', 'Rejected') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Employers Table (Only for Role: Employer)
CREATE TABLE employers (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL UNIQUE, -- Reference to Users table
    company_name VARCHAR(255) NULL,
    contact_number VARCHAR(50) NULL,
    job_preferences TEXT NULL, -- JSON format (e.g., ["Maid", "Babysitter"])
    profile_verification_status ENUM('Pending', 'Verified', 'Rejected') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Agencies Table (Only for Role: Agency)
CREATE TABLE agencies (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL UNIQUE, -- Reference to Users table
    agency_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    registration_number VARCHAR(100) UNIQUE NULL,
    managed_employees_count INT DEFAULT 0, -- Track the number of employees under this agency
    profile_verification_status ENUM('Pending', 'Verified', 'Rejected') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Interview Requests Table
CREATE TABLE interview_requests (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    employer_id BIGINT UNSIGNED NOT NULL, -- Reference to Employers table
    employee_id BIGINT UNSIGNED NOT NULL, -- Reference to Employees table
    interview_mode ENUM('Online', 'In-Person') NOT NULL,
    interview_date DATE NOT NULL,
    interview_time TIME NOT NULL,
    status ENUM('Pending', 'Accepted', 'Declined') DEFAULT 'Pending',
    additional_notes TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employer_id) REFERENCES employers(id) ON DELETE CASCADE,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
);

-- Interview Request History Table
CREATE TABLE interview_request_history (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    interview_request_id BIGINT UNSIGNED NOT NULL, -- Reference to Interview Requests table
    status ENUM('Pending', 'Accepted', 'Declined', 'Rescheduled', 'Cancelled') NOT NULL,
    change_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT NULL,
    FOREIGN KEY (interview_request_id) REFERENCES interview_requests(id) ON DELETE CASCADE
);

-- Document Uploads Table (For Employees & Agencies)
CREATE TABLE documents (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL, -- Can be employee, agency, or even employer
    document_type ENUM('Visa', 'Certificate', 'Reference', 'Registration') NOT NULL,
    file_path VARCHAR(255) NOT NULL, -- Storage path to the document
    verification_status ENUM('Pending', 'Verified', 'Rejected') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE website_settings (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(255) UNIQUE NOT NULL,  -- Unique identifier (e.g., "site_title")
    setting_value TEXT NOT NULL, -- Stores text, JSON, or links
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default settings (Run this once after table creation)
INSERT INTO website_settings (setting_key, setting_value) VALUES
('site_title', 'My Dynamic Website'),
('meta_description', 'Best platform to connect employees and employers.'),
('footer_text', '© 2025 All rights reserved.'),
('contact_email', 'support@mywebsite.com'),
('contact_phone', '+1 234 567 890'),
('facebook_link', 'https://facebook.com/mywebsite'),
('twitter_link', 'https://twitter.com/mywebsite'),
('linkedin_link', 'https://linkedin.com/company/mywebsite'),
('about_us', 'Welcome to our website. We connect people and businesses efficiently.'),
('privacy_policy', 'Your data privacy is our priority.'),
('terms_conditions', 'By using this site, you agree to our terms.');

CREATE TABLE categories (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    icon VARCHAR(255) NULL,
    title VARCHAR(255) NOT NULL,  -- Category or service name
    description TEXT NULL, -- Brief description
    no_of_listings INT UNSIGNED DEFAULT 0, -- Tracks the number of active listings
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE listings (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    category_id BIGINT UNSIGNED NOT NULL, -- Reference to Categories table
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    price DECIMAL(10, 2) DEFAULT 0.00,
    price_type ENUM('Per Hour', 'Monthly') NOT NULL,
    listing_type ENUM('Remote', 'Contract', 'Full-time', 'Part-time') NOT NULL,
    location VARCHAR(255) NULL,
    status ENUM('Active', 'Inactive') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE bookings (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    listing_id BIGINT UNSIGNED NOT NULL, -- Reference to Listings table
    user_id BIGINT UNSIGNED NOT NULL, -- Reference to Users table
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    status ENUM('Pending', 'Confirmed', 'Cancelled') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (listing_id) REFERENCES listings(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE reviews (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    booking_id BIGINT UNSIGNED NOT NULL, -- Reference to Bookings table
    rating TINYINT UNSIGNED NOT NULL, -- 1 to 5
    review_text TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
);

CREATE TABLE notifications (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL, -- Reference to Users table
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


-- Messages Table
CREATE TABLE messages (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    sender_id BIGINT UNSIGNED NOT NULL, -- Reference to Users table
    receiver_id BIGINT UNSIGNED NOT NULL, -- Reference to Users table
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE hires (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    employer_id BIGINT UNSIGNED NOT NULL, -- Reference to Employers table
    employee_id BIGINT UNSIGNED NOT NULL, -- Reference to Employees table
    hire_date DATE NOT NULL,
    status ENUM('Active', 'Terminated') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employer_id) REFERENCES employers(id) ON DELETE CASCADE,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
);

-- Employee Agency Association Table
CREATE TABLE employee_agency_associations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    employee_id BIGINT UNSIGNED NOT NULL, -- Reference to Employees table
    agency_id BIGINT UNSIGNED NOT NULL, -- Reference to Agencies table
    association_date DATE NOT NULL,
    status ENUM('Active', 'Inactive') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
    FOREIGN KEY (agency_id) REFERENCES agencies(id) ON DELETE CASCADE
);








