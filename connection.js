require("dotenv").config()
const mongoose = require("mongoose")
const MONGO = process.env.MONGO || "mongodb://localhost:27017/database"

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

mongoose.connect(MONGO, config)

mongoose.connection
.on("open", () => console.log("STATUS", "Connected to Mongo"))
.on("close", () => console.log("STATUS", "Disconnected from Mongo"))
.on("error", (error) => console.log("Error, error"))

module.exports = mongoose