# FindMyNest

FindMyNest is a full-stack property search web application designed to simplify the property buying and selling process. Users can create property listings, explore available properties with advanced search filters, and contact owners directly via automated email communication.

## Features

- **User Authentication**: Secure login, signup, and logout.
- **Property Listings**: Add, view, and manage detailed property posts.
- **Advanced Search**: Filter properties by location, price, and more.
- **Google Maps Integration**: Visualize property locations.
- **Owner Contact**: Automated email communication via EmailJS.

## Tech Stack

### Client

- **React.js**: Component-based UI development.
- **Redux Toolkit (RTK) & RTK Query**: State management and efficient API integration.
- **Material-UI (MUI)**: Modern UI components for responsive design.
- **GSAP**: Smooth animations for enhanced user experience.

### Server

- **Node.js**: Scalable server-side framework.
- **Express.js**: Lightweight and fast web server.
- **Prisma ORM**: Database modeling and query management.
- **MongoDB**: NoSQL database for flexible data storage.

### APIs & Libraries

- **Google Maps API**: Interactive map integration.
- **EmailJS**: Automated email sending for direct user communication.

## Run Locally

Clone the project

```bash
  git clone https://github.com/SharadSaha/findmynest.git
```

Go to the project directory

```bash
  cd findmynest
```

Install dependencies

```bash
  cd client
  npm install
  cd ../api
  npm install

```

### Environment Variables

To configure the application, follow these steps to set up the required environment variables:

1. **Create a `.env` file** in the `api`, as well as in the `client` directory.
2. **Add the following variables** to the `.env` file in `client` folder:

- `DATABASE_URL`: MongoDB connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase`).
- `JWT_KEY`: Your JWT secret key.
- `PORT`: The port on which the server will run.

3. **Add the following variables** to the `.env` file in `api` folder:
   - `VITE_GOOGLE_MAPS_API_KEY`: Your Google maps API key.
   - `VITE_API_URL`: The backend API url.

Start the server

- In `api` folder:

```bash
  node app.js
```

Start the client

- In `client` folder:

```bash
  npm run dev
```

## Deployment

- Live Website: [https://findmynest-jhn3.vercel.app/]
- GitHub Repository: [https://github.com/SharadSaha/findmynest]

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
