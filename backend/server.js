// Import the express module
import express from "express";
import cors from "cors";
import auth from "./src/routes/auth.routes.js";
import members from "./src/routes/members.routes.js";
import groups from "./src/routes/groups.routes.js";
import courses from "./src/routes/courses.routes.js";
import authMiddleware from "./src/middlewares/auth.middleware.js";

// Create an Express application
const app = express();

// Define the port to run the server on
const PORT = process.env.PORT || 5005;

app.use(cors()); // Use this after the variable declaration
app.use(express.json());

app.use("/auth", auth);
app.use("/members", authMiddleware, members);
app.use("/groups", authMiddleware, groups);
app.use("/courses", authMiddleware, courses);

app.use(express.static("public"));

// Make the application listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
