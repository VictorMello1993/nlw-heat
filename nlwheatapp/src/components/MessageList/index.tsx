import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Message } from '../Message';

export function MessageList() {
  const message = {
    id: '1',
    text: 'mensagem de teste',
    user: {
      name: 'Fulano',
      avatar_url: 'https://github.com/VictorMello1993.png',
    }
  }

  return (
    // ScrollView => Elemento que possui rolagem quando tiver muitos itens na tela
    // View => Não possui rolagem
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}

      // O teclado do celular desaparece quando usuário clicar na listagem de mensagens
      keyboardShouldPersistTaps="never">
      <Message data={message}/>
      <Message data={message}/>
      <Message data={message}/>
    </ScrollView>
  );
}