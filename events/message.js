const Discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports = async(client, message) => {
    if (message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    for (let i = 0; i < args.length; i++) {
        if (args[i].toLowerCase().replace(/[^a-zA-Z ]/g, '') === 'mon') message.lineReply('**__Notre__** ' + args[i + 1], {files: ['https://i.kym-cdn.com/photos/images/newsfeed/001/866/880/db1.png']})
    }

    const cleanMsg = message.content.toLowerCase().replace(/[^a-zA-Z ]/g, '')

    if (cleanMsg.includes('communisme')) message.lineReply({files: ['http://sovmusic.ru/m/ussr44.mp3']})
    if (cleanMsg.includes('capitalisme')) message.lineReply(`Ennemi de la nation détecté !`, {files: ['https://pbs.twimg.com/media/DEe2Vs8WsAAmAC0.jpg']})

    if (!message.content.startsWith(prefix)) return

    const command = args.shift();
    const cmd = client.commands.get(command)
    if (!cmd) return
    return cmd.run(client, message, args)
}