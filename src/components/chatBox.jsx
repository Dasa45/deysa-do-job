import { useState } from 'react'
import './ChatBox.css'

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Olá! Como posso ajudar?' }
  ])
  const [input, setInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { sender: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    try {
      const response = await fetch("https://deysa-do-job.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      })

      const data = await response.json()
      const botMessage = { sender: 'bot', text: data.reply }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error)
    }
  }

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
