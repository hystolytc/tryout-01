let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/index.html');
// })

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('text from phone '+ msg)
    // io.emit('chat message', msg);
  });
});

http.listen(7654, () => {
    console.log('I am Up Now')
})