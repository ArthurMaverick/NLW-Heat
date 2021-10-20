import {api} from '../../services/api'
import io from 'socket.io-client'
import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'
import { useEffect, useState } from 'react'

type Message = {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

const messageQueue: Message[] = []
const socket = io('https://nlwheat.arthursantos.tech:2083')
socket.on('new_message', (newMessage: Message) => {
  messageQueue.push(newMessage)
})
export function MessageList () {
  const [messages, setMesssages] = useState<Message[]>([])


  useEffect(() => {
    const timer = setInterval(() => {
      if(messageQueue.length > 0) {
        setMesssages(prevState => [messageQueue[0], prevState[0], prevState[1]].filter(Boolean))

        messageQueue.shift()
      }
    },3000)
  }, [])

  useEffect(() => {
    api.get<Message[]>('messages/last3').then((messages) => {
      setMesssages(messages.data)
    })
  }, [])

  return (
    <div className={styles.MessageListWrapper}>
      <img src={logoImg} alt="Do While 2021" />

      <ul className={styles.messageList}>
        {messages.map(v => {
          return (
            <li key={v.id} className={styles.message}>
              <p className={styles.messageContent}>{v.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={v.user.avatar_url} alt={v.user.name} />
                </div>
                <span>{v.user.name}</span>
              </div>
            </li>
          )
        })}
        
      
      </ul>
    </div>
  )
}