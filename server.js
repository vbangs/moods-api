require("dotenv").config
const express = require("express")
const {Schema, model} = require("./connection")
const morgan = require("morgan")
const cors = require("cors")
const APIs = require("./APIs")
const { getTrends } = require("./APIs")

const PORT = process.env.PORT || "3000"

const app = express()

app.use(express.json())

const TrendsApiCall = () => {
    try {
        console.log(APIs.getTrends('Ref12345', 'US', '20', '20210713'))
    } catch (error) {
        console.error(error)
    }
}
    
const TrendsApiCall2 = () => {
    try {
        const response = APIs.getOtherTrends('', 'last1day', 'US')
    } catch (error) {
        console.error(error)
    }
}

const SACall = () => {
    try {
        const response = APIs.getSentimentAnalyzer("")
    } catch (error) {
        console.error(error)
    }
}

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// Schema
const userInputSchema = new Schema ({
    country: String,
    date: String
})

// Models
const UserInput = model("UserInput", userInputSchema)

const testInput = [
    {country: "US", date: "20210713"}
]

app.get("/", (req, res) => {
    const data = APIs.getTrends('Ref12345', 'US', '20', '20210713')
    res.json({
        response: data
    })
})


// TrendsApiCall()
// TrendsApiCall2()
// SACall()

app.listen(3000, () => console.log("Listening on Port 3000"))