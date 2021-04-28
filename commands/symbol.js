const Discord = require('discord.js')
const { symbols } = require('../symbols.json')

module.exports.run = (client, message, args) => {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)]
    const file = symbol.files[Math.floor(Math.random() * symbol.files.length)]

    message.lineReply('Un symbole classique du communisme :\n\n__' + symbol.name + '__', {files: [file]})
}

module.exports.help = {
    name: 'symbol'
}