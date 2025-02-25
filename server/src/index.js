const express = require('express')
const { Server } = require('socket.io');

const app = express()
const io = new Server(server);

const port = 6969


io.on('connect', (socket) => {
    console.log('a user connected');
  });

app.listen(port, ()=>{
    console.log("listening on port")
})