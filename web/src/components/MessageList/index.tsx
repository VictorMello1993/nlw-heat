import styles from "./styles.module.scss";
import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api'
import { useEffect, useState } from "react";

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

export function MessageList() {
  //Gerenciamento de estados do componente MessageList
  const [messages, setMessages] = useState<Message[]>([])

  //Chamando a API
  useEffect(() => {
    api.get<Message[]>('messages/last3').then(response => {
      setMessages(response.data)
    })
  }, [])

  return (
    <div className="messageListWrapper">
      <img src={logoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        {messages.map(msg => {
          return (
            <li key={msg.id} className={styles.message}>
              <p className={styles.messageContent}>{msg.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={msg.user.avatar_url} alt={msg.user.name}></img>
                </div>
                <span>{msg.user.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}