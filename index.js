const Client = require('./src/Client');
require('dotenv/config');
const { Intents } = require('discord.js');
const client = new Client({ disableMentions: "everyone", ws: { intents: new Intents(Intents.ALL) } });

client.loadEvents('./src/events');
client.login(process.env.token);