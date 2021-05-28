import { useEffect, FC, useState, FormEvent, ChangeEvent } from 'react'
import { io } from 'socket.io-client'
import Container from './Container'

const socket = io('http://localhost:3100')

const Chat: FC = () => {
  const [lines, setLines] = useState([])
  const [message, setMessage] = useState<string>('')
  const [name, setName] = useState<string>('')
  useEffect(() => {
    socket.on('broadcastMessage', reciveMessage)
    return () => {
      socket.close()
    }
  }, [])

  const reciveMessage = ({
    name,
    message,
  }: {
    name: string
    message: string
  }) => {
    setLines((prev) => [...prev, `${name}: ${message}`])
  }
  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    socket.emit('sendMessage', { name, message })
    setMessage('')
  }

  return (
    <div>
      <Container chatLines={lines} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleName} />
        <input type="text" value={message} onChange={handleMessage} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Chat
