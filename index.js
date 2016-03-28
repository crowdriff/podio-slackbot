const config = require('./app/config');
const Botkit = require('botkit');

const controller = Botkit.slackbot({
  debug: false
});

const bot = controller.spawn({
  token: config.slack.token
});

bot.startRTM((err, bot, payload) => {
  if(err) {
    throw new Error('Could not connect to Slack');
  }
});

controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], (bot, message) => {
  console.log('hearing stuff');

  bot.reply(message, 'Oh hi there');

});
