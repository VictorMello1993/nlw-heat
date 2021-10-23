import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Message, MessageProps } from '../Message';
import { api } from '../../services/api';
import {io} from 'socket.io-client';
import { MESSAGES_EXAMPLE} from '../../utils/messages'

const socket = io(String(api.defaults.baseURL));

let messagesQueue: MessageProps[] = MESSAGES_EXAMPLE;

//Carregando a lista de 3 últimas mensagens em tempo real, com socket.io
socket.on('new_message', (newMessage) => {
  // Gambiarra para "resolver" o warning onde cada elemento da mensagem a ser enviada e renderizada via socket
  // "Warning: Each child in a list should have a unique "key" prop."
  newMessage.id = `fkid-${Math.random().toString(36).slice(2)}`
  
 messagesQueue.push(newMessage); 
})

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  //Exibindo as 3 últimas mensagens
  useEffect(() => {
    async function fetchMessages(){
      const messagesResponse = await api.get<MessageProps[]>('/messages/last3');
      setCurrentMessages(messagesResponse.data)
    }

    fetchMessages();
  }, [])

  //Administrando as mensagens que estão chegando na listagem em tempo real, carregando-as de tempos em tempos pelo temporizador
  useEffect(() => {
   const timer = setInterval(() => {
     if(messagesQueue.length > 0){
       setCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]])
       messagesQueue.shift()
     }
   }, 3000)

   return () => clearInterval(timer);
  }, [])

  return (
    // ScrollView => Elemento que possui rolagem quando tiver muitos itens na tela
    // View => Não possui rolagem
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}

      // O teclado do celular desaparece quando usuário clicar na listagem de mensagens
      keyboardShouldPersistTaps="never">
      {currentMessages.map((message) => <Message key={message.id} data={message}/>)}
      
    </ScrollView>
  );
}