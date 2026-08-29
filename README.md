#  Zerodha Clone - Stock Trading Platform

A full-stack stock trading platform inspired by Zerodha, built using React, Node.js, Express.js and MongoDB.

This project is developed for educational and portfolio purposes.

---

##  Features

###  Authentication & Authorization

- User Signup
- User Login
- User Logout
- Password hashing
- JWT-based authentication
- Protected dashboard
- User-specific data
- Multiple-user authorization
- Logged-in user's name and email

###  Trading Dashboard

- Dashboard
- Stock Watchlist
- BUY stock functionality
- Orders
- Holdings
- Positions
- Funds
- Apps
- User Profile

###  UI

- Clean landing page
- Responsive dashboard
- Zerodha-inspired interface
- Profile dropdown
- Order management UI
- Buy order window

---

##  Tech Stack

### Frontend

- React.js
- JavaScript
- HTML
- CSS
- Axios
- React Router

### Backend

- Node.js
- Express.js
- JWT
- bcrypt
- Mongoose

### Database

- MongoDB

### Tools

- Git
- GitHub
- VS Code
- MongoDB Compass

---

##  Project Structure

```text
zerodha-clone/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   └── landing_page/
│   │       ├── about/
│   │       ├── home/
│   │       ├── login/
│   │       ├── signup/
│   │       └── ...
│   └── package.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   │   └── components/
│   │       ├── Apps.js
│   │       ├── BuyActionWindow.js
│   │       ├── Dashboard.js
│   │       ├── Funds.js
│   │       ├── Holdings.js
│   │       ├── Orders.js
│   │       ├── Positions.js
│   │       ├── ProtectedRoute.js
│   │       ├── WatchList.js
│   │       └── ...
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── schemas/
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md