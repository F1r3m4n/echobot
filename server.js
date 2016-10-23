var restify = require('restify');
var builder = require('botbuilder');

// Get secrets from server environment
//var botConnectorOptions = { 
//    appId: process.env.MY_APPID, 
//    appPassword: process.env.MY_APPSECRET 
//};

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.MY_APPID,
    appPassword: process.env.MY_APPSECRET
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

bot.dialog('/', function (session) {
    session.send("Hello World");
});

// Create bot
//var bot = new builder.BotConnectorBot(botConnectorOptions);
//bot.add('/', function (session) {
//    
//    //respond with user's message
//    session.send("You said " + session.message.text);
//});

// Setup Restify Server
//var server = restify.createServer();

// Handle Bot Framework messages
//server.post('/api/messages', bot.verifyBotFramework(), bot.listen());

// Serve a static web page
//server.get(/.*/, restify.serveStatic({
//	'directory': '.',
//	'default': 'index.html'
//}));

//server.listen(process.env.port || 3978, function () {
//    console.log('%s listening to %s', server.name, server.url); 
//});
