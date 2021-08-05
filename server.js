require("dotenv").config
const express = require("express")
const {Schema, model} = require("./connection")
const morgan = require("morgan")
const cors = require("cors")
const APIs = require("./APIs")
const data = require("./seed")
const googleTrends = require('google-trends-api')

const PORT = process.env.PORT || "3000"

const app = express()

app.use(express.json())

const TrendsApiCall = () => {
    try {
        console.log(APIs.getTrends('US', '20210713'))
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

const googleCall = () => {
    try {
        const response = googleTrends.realTimeTrends({
            geo: 'US',
            category: 'all',
        }, function(err, results) {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
            } 
        });
    } catch (error) {
        console.error(error)
    }
}
googleCall()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// Schema
const userInputSchema = new Schema ({
    country: String,
    trendsDate: String
})

// Models
const UserInput = model("UserInput", userInputSchema)

const testInput = [
    {country: "US", trendsDate: "20210713"}
]

app.get("/data", (req, res) => {
    googleTrends.realTimeTrends({
        geo: 'US',
        category: 'all',
    }, function(err, results) {
        if (err) {
           console.log(err);
        } else {
          console.log(results);
          res.json(
            JSON.parse(results)
        )
        } 
    });
})


app.listen(3000, () => console.log(`Listening on Port ${PORT}`))