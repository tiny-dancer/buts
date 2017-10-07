var botBuilder = require('claudia-bot-builder');

var bot = botBuilder(function(message) {
    return 'Hello world!';
  }, { platforms: ['twilio'] });

  module.exports = bot;