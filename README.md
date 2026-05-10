# School Management API

A RESTful API built using **Node.js**, **Express.js**, and **MySQL** to manage school data.
The API allows users to:

* Add new schools
* Retrieve schools sorted by proximity to a user’s location

---

# Tech Stack

* Node.js
* Express.js
* MySQL
* mysql2
* dotenv
* Postman

---

# Features

* Add School API
* List Schools API
* Input validation
* Distance-based sorting using geographical coordinates
* MySQL database integration
* REST API architecture

---

# Project Structure

```txt
school-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── schoolController.js
│
├── routes/
│   └── schoolRoutes.js
│
├── utils/
│   └── distanceCalculator.js
│
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/school-management-api.git
```

```bash
cd school-management-api
```

---

## 2. Install Dependencies

```bash
npm install
```

---

# MySQL Database Setup

## Create Database

```sql
CREATE DATABASE school_management;
```

## Use Database

```sql
USE school_management;
```

## Create Schools Table

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=school_management
```

---

# Run the Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# API Endpoints

---

## 1. Add School

### Endpoint

```http
POST /addSchool
```

### Request Body

```json
{
  "name": "Delhi Public School",
  "address": "New Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}
```

### Success Response

```json
{
  "success": true,
  "message": "School added successfully"
}
```

---

## 2. List Schools

### Endpoint

```http
GET /listSchools?latitude=28.61&longitude=77.20
```

### Success Response

```json
{
  "success": true,
  "schools": [
    {
      "id": 1,
      "name": "Delhi Public School",
      "address": "New Delhi",
      "latitude": 28.7041,
      "longitude": 77.1025,
      "distance": "12.43 km"
    }
  ]
}
```

---

# Distance Calculation

The API uses the **Haversine Formula** to calculate geographical distance between the user's coordinates and school coordinates.

---

# Postman Collection

The exported Postman collection is available inside the `postman` folder of this repository.

---

# Future Improvements

* JWT Authentication
* Swagger Documentation
* Pagination
* School Search
* Sequelize ORM
* Docker Support

---

# Author

Rishi Raj

---

# License

This project is for educational and assessment purposes.
