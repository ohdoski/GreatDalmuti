import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

const port = process.env.PORT || 3100
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
)

io.on('connection', (socket) => {
  console.log(`a user connected ${socket.id}`)

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('sendMessage', ({ name, message }) => {
    console.log(`name: ${name}`)
    console.log(`message: ${message}`)
    io.emit('broadcastMessage', { name, message })
  })
})

server.listen(port, () => {
  console.log(`listening on *:${port}`)
})
