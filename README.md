# 10322210075
# Frontend Test Submission - URL Shortener

This repository contains the frontend code for a URL Shortener application. The project includes a form to shorten long URLs with optional custom codes and expiry dates, along with a statistics page to view analytics like clicks, IP address, device type, and more. It also implements a custom logging middleware.

## Folder Structure


## Features

- Shortens URLs with optional custom shortcodes.
- Allows setting a default or custom expiry date.
- Shows detailed analytics for each shortened URL.
- Includes client-side logging middleware that sends logs to a protected endpoint.
- Uses Material UI for styling and layout.
- Supports navigation between pages using React Router.

## Technologies Used

- React (with Vite)
- Material UI
- React Router
- Axios
- Custom Logging Middleware

## Setup Instructions

1. Clone the repository:

git clone https://github.com/your-username/10322210075.git

2. Navigate to the frontend directory:

cd 10322210075/Frontend\ Test\ Submission

markdown
Copy
Edit

3. Install dependencies:

npm install

markdown
Copy
Edit

4. Start the development server:

npm run dev

markdown
Copy
Edit

The application will run at `http://localhost:3000`.

## Project Assumptions

- The backend is pre-provided and includes the following endpoints:
- `POST /api/shorten` to shorten URLs.
- `GET /api/stats/:shortcode` to fetch statistics.
- `POST /api/logs` to receive logs from the frontend.
- The logging middleware is configured to send user actions and errors to the protected logs endpoint.

## Author

Name: [Ishani_Nag]  
Roll Number: 10322210075  
Track: Frontend
