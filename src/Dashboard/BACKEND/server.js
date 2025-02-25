const express=require("express");
const cors = require("cors");
require("dotenv").config();
const connectdb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const donorRoutes = require("./routes/donorRoutes")

connectdb();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users",userRoutes);
app.use('/api/donors', donorRoutes);
const PORT =process.env.PORT || 8000

app.listen(PORT,()=>console.log(`Server is running port ${PORT}`));