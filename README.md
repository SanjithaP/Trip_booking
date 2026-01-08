# Trip Package Booking System

A full-stack web application for booking travel packages. Users can browse available trips, check availability, make bookings, and manage their reservations.

## Tech Stack

**Frontend:**
- React 18.3.1
- React Router DOM 6.26.1
- Axios for API calls

**Backend:**
- Node.js with Express.js 4.21.1
- MongoDB with Mongoose 8.7.1
- CORS enabled

## Features

- Browse all available travel packages
- Search packages by location or name
- View detailed package information
- Make bookings with date selection
- View booking history
- Cancel bookings
- Input validation on both client and server side

## Project Structure

```
trip-booking/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
└── backend/
    ├── models/
    │   └── Place.js
    ├── routes/
    │   └── places.js
    ├── Server.js
    └── package.json
```

## Database Schema

### Place/Package Model
```javascript
{
  name: String (required)
  location: String (required)
  description: String (required)
  bestTimeToVisit: String (required)
  imageUrl: String (optional)
}
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/places | Get all packages |
| GET | /api/places/:id | Get specific package |
| POST | /api/places | Create new package |
| PUT | /api/places/:id | Update package |
| DELETE | /api/places/:id | Delete package |

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running locally

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start MongoDB service:
```bash
mongod
```

4. Run the server:
```bash
node Server.js
```

Server will start on http://localhost:3000

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React app:
```bash
npm start
```

App will open on http://localhost:3000

## How It Works

### Booking Flow
1. User browses available packages on the homepage
2. Clicks on a package to view details
3. Selects travel dates and number of travelers
4. System checks for conflicts and availability
5. Creates booking if validation passes
6. User receives confirmation

### Validation Logic
- Required fields are checked before submission
- Date validation ensures travel dates are in the future
- Prevents duplicate bookings for same user/package/date
- Capacity checks ensure package isn't overbooked

## Key Implementation Details

### Preventing Double Bookings
The system checks for existing bookings with the same user, package, and travel dates before creating a new booking. This is handled at the application level using database queries.

### Error Handling
- Try-catch blocks around all async operations
- Meaningful error messages returned to frontend
- Proper HTTP status codes (200, 201, 400, 404, 500)

### CORS Configuration
CORS is enabled to allow the React frontend to communicate with the Express backend during development.

## Future Enhancements

- User authentication with JWT
- Payment gateway integration
- Email notifications for booking confirmations
- Admin dashboard for package management
- Reviews and ratings system
- Advanced search filters (price range, duration)
- Booking modification functionality
- Image upload for packages

## Known Issues

- Currently using basic MongoDB schema, could be expanded for production
- No authentication implemented yet
- Date conflict checking is simple, needs more robust logic for production
- Images are stored as URLs, not uploaded to server

## Learning Outcomes

Through this project, I learned:
- Building RESTful APIs with Express.js
- Working with MongoDB and Mongoose ODM
- React component lifecycle and hooks
- API integration in React
- Error handling in full-stack applications
- Database schema design
- CORS and cross-origin requests

## Development Notes

This was built as a learning project to understand full-stack development concepts. The focus was on implementing core booking functionality and understanding how frontend and backend communicate through REST APIs.

The project demonstrates CRUD operations, data validation, and basic business logic for a booking system. In a production environment, additional features like authentication, payment processing, and more sophisticated availability checking would be necessary.

## License

This project is for educational purposes.
