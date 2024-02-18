# CAPSTONE PROJECT

# Project Title: Pets UnPeeved

## Overview

Pets UnPeeved is a comprehensive pet management web application designed to simplify the lives of pet owners. It offers a centralized platform for managing pet profiles, scheduling appointments, tracking vaccinations, finding nearby pet-related activities, and engaging with a community of pet lovers through shared posts.

### Problem

Pet ownership involves juggling numerous responsibilities, including keeping track of medical records, scheduling appointments, and finding activities that accommodate pets. The lack of a centralized system makes managing these aspects challenging and time-consuming. Pets UnPeeved addresses these pain points by providing a unified platform to efficiently manage pet care and enhance the pet ownership experience.

### User Profile

The primary users of Pets UnPeeved are pet owners looking for an organized way to manage their pets’ profiles, medical records, and appointments. Users can interact with a community by sharing posts, tips, and experiences. The app is designed to be intuitive for users of all tech-savviness levels, ensuring ease of navigation and data entry.

### Features

- **User Authentication and Registration:** Secure login and registration functionality for creating and accessing user accounts.
- **Pet Profile Management:** Users can create, view, edit, and delete profiles for each of their pets, including details like name, breed, date of birth, and medical history.
- **Appointment Scheduling:** A feature to schedule, view, and manage appointments for grooming, vet visits, and vaccinations, complete with reminders.
- **Community Posts:** A space for users to share posts, photos, and tips with the pet owner community. All users with an account can view and interact with these posts.
- **Activities Component:** An integrated map displaying nearby pet-friendly activities, parks, and stores, based on the user’s location.
- **Notifications:** Users receive notifications for upcoming appointments and reminders for pet-related tasks.

## Implementation

### Tech Stack

- **Frontend:** React.js for dynamic UIs, React Router for navigation, and Axios for API requests.
- **Backend:** Node.js with Express.js for RESTful API services.
- **Database:** MySQL for storing user and pet data.
- **Authentication:** JSON Web Tokens (JWT) for secure user authentication.
- **Mapping:** Google Maps API for displaying nearby pet-friendly activities.

### APIs

- **Google Maps API:** To retrieve and display nearby pet-related activities and services.

### Sitemap

1. **Login/Register Page:** For user authentication and registration.
2. **Pet Management Page:** Where users can manage their pets’ profiles and appointments.
3. **Home Page:** Featuring community posts and activities map.
4. **Notifications Page:** For managing and receiving reminders and notifications.

### Mockups

![Mockup 1](/mockups/Capstone-mock ups-1.jpg)
![Mockup 2](/mockups/Capstone-mock ups-2.jpg)
![Mockup 3](/mockups/Capstone-mock ups-3.jpg)


### Data

- **Users:** Store information such as id, name, email, and password.
- **Pets:** Each pet profile contains id, user_id, name, type, breed, dob, allergies, and medical history.
- **Appointments:** Details include id, pet_id, type (e.g., grooming, vet visit), date_time, and location.

### Endpoints

- `/api/auth/login` and `/api/auth/register` for authentication.
- `/api/pets` for managing pet profiles (GET, POST, PUT, DELETE).
- `/api/appointments` for scheduling and managing appointments (GET, POST, PUT, DELETE).
- `/api/posts` for community posts (GET, POST).

### Auth

Authentication will be handled through JSON Web Tokens (JWT), ensuring secure login and access control. Users must log in to view and manage pet profiles, schedule appointments, and participate in the community posts section.

## Roadmap

The project is scoped as a series of sprints focusing on backend setup, frontend development, integration, and testing phases. Initial sprints will focus on setting up the backend server, database, and authentication system. Subsequent sprints will implement frontend components, followed by integration with the backend and extensive testing.

## Nice-to-haves

- **User Profile Customization:** Allowing users to add profile pictures and customize their profiles.
- **In-App Notifications:** Real-time alerts within the app for appointments and community interactions.
- **Social Sharing:** Enable sharing of posts to social media platforms directly from the app.
