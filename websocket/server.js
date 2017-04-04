let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

io.on('connection', function(socket){
    console.log(`A client with id : [${socket.id}] has been jinedjoined the chat` )
    io.emit('message', 'you successfully join to the chat');
});

http.listen(7654, () => {
    console.log('I am Up Now')
})