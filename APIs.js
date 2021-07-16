const axios = require("axios");

const BASE_URL = "https://google-trends.p.rapidapi.com"
const BASE_URL_2 = "https://google-trends-related-search.p.rapidapi.com/"

module.exports = {
    getTrends: (reqId, country, results, trendsDate) => {

        axios({
            method: 'GET',
            url: BASE_URL + `/api/v1/DailyTrendingSearches/${reqId}/${country}/${results}/${trendsDate}`,
            headers: {
                'x-rapidapi-key': 'f1119f81ccmsha50c5709e0b126fp10dce2jsnfdc1bbd9a593',
                'x-rapidapi-host': 'google-trends.p.rapidapi.com'
            },
            })
            .then(function (response) {
                const result = response.data
                console.log(result.googleTrendingSearchList[0].trendingSearchTitle.searchTitle)
                console.log(result.googleTrendingSearchList[1].trendingSearchTitle.searchTitle)
                console.log(result.googleTrendingSearchList[2].trendingSearchTitle.searchTitle)
                console.log(result.googleTrendingSearchList[3].trendingSearchTitle.searchTitle)
                console.log(result.googleTrendingSearchList[4].trendingSearchTitle.searchTitle)
                console.log(result.googleTrendingSearchList[5].trendingSearchTitle.searchTitle)
                console.log(result.googleTrendingSearchList[6].trendingSearchTitle.searchTitle)
                console.log(result.googleTrendingSearchList[7].trendingSearchTitle.searchTitle)
                console.log(result.googleTrendingSearchList[8].trendingSearchTitle.searchTitle)
                console.log(result.googleTrendingSearchList[9].trendingSearchTitle.searchTitle) 
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function (results) {
                res.json(results)
            })
        },

    getOtherTrends: (entry, lastDayNumber, countryCode) => {

            axios({
                method: 'GET',
                url: BASE_URL_2 + `/api/v1/DailyTrendingSearches/${entry}/${lastDayNumber}/${countryCode}/`,
                headers: {
                    'x-rapidapi-key': 'f1119f81ccmsha50c5709e0b126fp10dce2jsnfdc1bbd9a593',
                    'x-rapidapi-host': 'google-trends-related-search.p.rapidapi.com'
                },
                params: {
                    keyword: entry,
                    timerange: lastDayNumber,
                    geo: countryCode
                  }
                })
                .then(function (response) {
                    const result = response.data
                    console.log(result) 
                })
                .catch(function (error) {
                    console.log(error)
                })
                .then(function () {})
            },

    getSentimentAnalyzer: (entry) => {
            
            axios({
                method: 'GET',
                url: 'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/',
                params: {
                    text: entry
                },
                headers: {
                    'x-rapidapi-key': 'f1119f81ccmsha50c5709e0b126fp10dce2jsnfdc1bbd9a593',
                    'x-rapidapi-host': 'twinword-sentiment-analysis.p.rapidapi.com'
                }
            })
                .then(function (response) {
                    const result = response.data
                    console.log(result.score)
                    console.log(result.keywords) 
                })
                .catch(function (error) {
                    console.log(error)
                })
                .then(function () {})
    }
}
