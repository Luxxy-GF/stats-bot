# stats-bot
This script hosts a discord bot to get data from the host for https://github.com/Luxxy-GF/Linux-Stats and display the stats

### Note 
this is using discord.js v12 this verison is not supported by discord.js i not looking to upgrade to discord.js v13 if you want to make a pull request for discord.js v13 verison of this bot i will add it to the repo

## Getting Started
These instructions will get the script up and running 

### Clone the repo,
```
git clone https://github.com/Luxxy-GF/stats-bot.git 
```

### Installing requirements 
```
npm i
```
This will install all needed packages

### Setting up config.json
copy the .env.template to .env and fill in the bot token from https://discord.dev and the password you set for your https://github.com/Luxxy-GF/Linux-Stats config

also change the ip to your host ip

### Starting the bot 
to start the bot you need a command from nodejs
```
node . 
```
this should start the bot