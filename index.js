const readline = require('readline-sync')
const Parser = require('rss-parser')
const robots = {
    userInput: require('./robots/user-input.js'),
    text: require('./robots/text.js')
}

const TREND_URL = 'https://trends.google.com/trends/trendingsearches/daily/rss?geo=BR' 

async function start() {
    const content = {}

    content.searchTerm = await askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    //user-input
    await robots.text(content)

    async function askAndReturnSearchTerm() {
        response = readline.question('Type a Wikipidea search term or G to fecth google trends: ')

        return (response.toUpperCase() === 'G') ? await askAndReturnTrend() : response
    }

    async function askAndReturnTrend() {
        console.log('Plesase wait....')

        const trends = await getGoogleTrends()
        const choice = readline.keyInSelect(trends, 'Choose your trend: ')

        return trends[choice]
    }

    async function getGoogleTrends() {
        const parser = new Parser()
        const trends = await parser.parseURL(TREND_URL)
        return trends.items.map(({title}) => title)
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is','What is','The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(content)
}

start()