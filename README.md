# 🏡 FindMyNest

**FindMyNest** is a cutting-edge full-stack property search web application built to revolutionize the property buying and selling experience. 🛠️ Users can effortlessly create property listings, explore available options using advanced filters, and directly connect with property owners through automated email communication 📩.

## ✨ Features

- 🔐 **User Authentication**: Secure login, signup, and logout for safe access.
- 🏘️ **Property Listings**: Add detailed posts with images, descriptions, and pricing.
- 🔍 **Advanced Search**: Seamlessly filter properties by location, price, size, and more.
- 🗺️ **Google Maps Integration**: Explore property locations with interactive maps.
- 📧 **Owner Contact**: Directly connect with owners via automated emails using EmailJS.

Experience a smarter, more efficient way to find your dream property with **FindMyNest**! 🚀

## 🛠️ Tech Stack

### 🌐 Client

- **React.js**: Component-based UI development.
- **Redux Toolkit (RTK) & RTK Query**: State management and efficient API integration.
- **Material-UI (MUI)**: Modern UI components for responsive design.
- **GSAP**: Smooth animations for enhanced user experience.

### 🔧 Server

- **Node.js**: Scalable server-side framework.
- **Express.js**: Lightweight and fast web server.
- **Prisma ORM**: Database modeling and query management.
- **MongoDB**: NoSQL database for flexible data storage.

### 🌍 APIs & Libraries

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

<img src="https://github.com/user-attachments/assets/3ab9a63c-667d-4b5d-ac57-caf0aada0d40" width="300px" height="250px" />
<img src="https://github.com/user-attachments/assets/1b4d58ad-024e-4cfb-bc01-039abb7f9691" width="300px" height="250px" />
<img src="https://github.com/user-attachments/assets/ecf4cc36-e9e4-4b61-b3f2-688c50871b7d" width="300px" height="250px" />
<img src="https://github.com/user-attachments/assets/b3d9ced5-1a63-43df-86d8-f3e58916a3cb" width="300px" height="250px" />
