var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.set('port', (process.env.PORT || 5000))
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .use(express.static(__dirname + '/public'))
  .get('/', (req, res) => res.render('pages/index'))
  .get('/register', (req, res) => res.render('pages/register'))
  .get('/officers', (req, res) => res.render('pages/officers'))
  .get('/poll', (req, res) => res.render('pages/poll'))
  .get('*', (req, res) => res.render('pages/404'))
  .listen(app.get('port'), () => {
    console.log("Node app is running at localhost:" + app.get('port'))
  });

  io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });
