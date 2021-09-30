const Discord = require("discord.js")
const client = new Discord.Client()
require("dotenv").config()
const axios = require("axios")
const { stripIndent } = require('common-tags');
const p = '!'

client.on("ready", async() => {
    console.log(`${client.user.tag} is fucking online`)
})

client.on("message", async(message) => {
    if (message.content === `${p}dellstats`) {
        axios({
            url: "http://10.0.0.30:999/stats",
            method: 'GET',
            followRedirect: true,
            maxRedirects: 5,
            headers: {
                "password": process.env.dellpassword
            },
        }).then(response => {
            const systeminfo = stripIndent`
            servername   : ${response.data.info.servername}
            cpu model    : ${response.data.info.cpu}
            cpu load     : ${response.data.info.cpuload}
            cpu cores    : ${response.data.info.cputhreads}
            ram total    : ${response.data.info.memtotal}
            ram used     : ${response.data.info.memused}
            disk total   : ${response.data.info.disktotal}
            disk used    : ${response.data.info.diskused}
            network in   : ${response.data.info.netrx}
            network out  : ${response.data.info.nettx}
            os info      : ${response.data.info.oslogofile}
            os uptime    : ${response.data.info.osuptime}
            `;
            const dellembed = new Discord.MessageEmbed()
            .setDescription(`\`\`\`yaml\n${systeminfo}\`\`\``)
            .setColor('#121212')
            message.channel.send(dellembed)
        })
        
    }

})



client.login(process.env.token)