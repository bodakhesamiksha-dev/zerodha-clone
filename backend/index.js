require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const { UserModel } = require("./models/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();


// ================= CORS =================

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://zerodha-frontend-1nbf.onrender.com",
      "https://zerodha-dashboard-ox82.onrender.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());
app.use(cookieParser());


//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });

//   res.send("Done!");
// });


// ================= OLD HOLDINGS CODE =================

// app.get("/addHoldings", async (req, res) => {

//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });

//   res.send("Done!");
// });


// ================= AUTHENTICATION =================

const authenticateUser = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Not authenticated",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();

  } catch (error) {
    console.log("Authentication error:", error);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};


// ================= HOLDINGS =================

app.get("/allHoldings", authenticateUser, async (req, res) => {
  try {

    const allHoldings = await HoldingsModel.find({
      userId: req.user.userId,
    });

    res.json(allHoldings);

  } catch (error) {

    console.log("Holdings error:", error);

    res.status(500).json({
      message: "Error fetching holdings",
    });
  }
});


// ================= POSITIONS =================

app.get("/allPositions", authenticateUser, async (req, res) => {
  try {

    const allPositions = await PositionsModel.find({
      userId: req.user.userId,
    });

    res.json(allPositions);

  } catch (error) {

    console.log("Positions error:", error);

    res.status(500).json({
      message: "Error fetching positions",
    });
  }
});


// ================= NEW ORDER =================

app.post("/newOrder", authenticateUser, async (req, res) => {

  try {

    const newOrder = new OrdersModel({
      userId: req.user.userId,
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();


    // If order is BUY, add/update holding

    if (req.body.mode === "BUY") {

      const existingHolding = await HoldingsModel.findOne({
        userId: req.user.userId,
        name: req.body.name,
      });


      // Stock already exists

      if (existingHolding) {

        const oldQty = existingHolding.qty;
        const oldAvg = existingHolding.avg;

        const newQty = Number(req.body.qty);
        const newPrice = Number(req.body.price);

        const totalQty = oldQty + newQty;

        const newAvg =
          (oldQty * oldAvg + newQty * newPrice) / totalQty;

        existingHolding.qty = totalQty;
        existingHolding.avg = newAvg;
        existingHolding.price = newPrice;

        await existingHolding.save();

      }

      // New stock

      else {

        const newHolding = new HoldingsModel({
          userId: req.user.userId,
          name: req.body.name,
          qty: Number(req.body.qty),
          avg: Number(req.body.price),
          price: Number(req.body.price),
          net: "0.00%",
          day: "0.00%",
        });

        await newHolding.save();
      }
    }

    res.send("Order saved");

  } catch (error) {

    console.log(error);

    res.status(500).send("Error saving order");
  }
});


// ================= ORDERS =================

app.get("/allOrders", authenticateUser, async (req, res) => {

  try {

    const allOrders = await OrdersModel.find({
      userId: req.user.userId,
    });

    res.json(allOrders);

  } catch (error) {

    console.log("Orders error:", error);

    res.status(500).json({
      message: "Error fetching orders",
    });
  }
});


// ================= SIGNUP =================

app.post("/api/auth/signup", async (req, res) => {

  try {

    const { name, email, password } = req.body;


    // Check all fields

    if (!name || !email || !password) {

      return res.status(400).json({
        message: "All fields are required",
      });
    }


    // Password validation

    if (password.length < 6) {

      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }


    // Check existing user

    const existingUser = await UserModel.findOne({
      email: email.toLowerCase(),
    });


    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });
    }


    // Hash password

    const hashedPassword = await bcrypt.hash(password, 10);


    // Create user

    const newUser = await UserModel.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });


    // Create JWT token

    const token = jwt.sign(
      {
        userId: newUser._id,
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );


    // Store JWT in cookie

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });


    res.status(201).json({
      message: "Signup successful",

      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });

  } catch (error) {

    console.log("Signup error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});


// ================= LOGIN =================

app.post("/api/auth/login", async (req, res) => {

  try {

    const { email, password } = req.body;


    // Check fields

    if (!email || !password) {

      return res.status(400).json({
        message: "Email and password are required",
      });
    }


    // Find user

    const user = await UserModel.findOne({
      email: email.toLowerCase(),
    });


    if (!user) {

      return res.status(401).json({
        message: "Invalid email or password",
      });
    }


    // Compare password

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );


    if (!passwordMatch) {

      return res.status(401).json({
        message: "Invalid email or password",
      });
    }


    // Create JWT token

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );


    // Store JWT in cookie

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });


    // Send response

    res.status(200).json({
      message: "Login successful",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

    console.log("Login error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});


// ================= CHECK AUTH =================

app.get("/api/auth/me", authenticateUser, async (req, res) => {

  try {

    const user = await UserModel.findById(
      req.user.userId
    ).select("-password");


    if (!user) {

      return res.status(401).json({
        message: "User not found",
      });
    }


    res.status(200).json({
      authenticated: true,
      user: user,
    });

  } catch (error) {

    console.log("Me API error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});


// ================= LOGOUT =================

app.post("/api/auth/logout", (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(200).json({
      message: "Logout successful",
    });

  } catch (error) {
    console.log("Logout error:", error);

    res.status(500).json({
      message: "Logout failed",
    });
  }
});


// ================= START SERVER =================

app.listen(PORT, () => {

  console.log("App started");

  mongoose.connect(uri);

  console.log("db connect");
});