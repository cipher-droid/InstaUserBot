const user = process.env['username']
const pwd = process.env['password']

const Insta = require('./insta.js');
const client = new Insta.Client();

client.on('connect', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('messageCreate', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(user, pwd);