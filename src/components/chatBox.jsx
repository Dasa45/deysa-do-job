import { useState } from 'react'
import './ChatBox.css'

export default function ChatBox() {
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Olá! Como posso ajudar?' }])
  const [input, setInput] = useState('')

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { sender: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])

    setInput('')

    const response = await fetch("https://deysa-do-job.vercel.app/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message })
})

    })

    const data = await response.json()
    const botMessage = { sender: 'bot', text: data.reply }
    setMessages((prev) => [...prev, botMessage])
  }

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Digite sua pergunta..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  )
}
