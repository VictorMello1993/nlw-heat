import React, { useState } from 'react';
import { Alert, Keyboard, TextInput, TextInputBase, View } from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';
import { styles } from './styles';

export function SendMessageForm() {
  //Criando estado para armazenar o conteúdo da mensagem no TextInput
  const [message, setMessage] = useState('')

  //Criando estado para verificar se a mensagem está sendo enviada
  const [sendingMessage, setSendingMessage] = useState(false)

  //Envio da mensagem ao back-end
  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if (messageFormatted.length > 0) {
      setSendingMessage(true);
      await api.post('/messages', { message: messageFormatted });

      setMessage('');
      Keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert('Mensagem enviada com sucesso.');      
    }
    else {
      Alert.alert('Escreva a mensagem para enviar.')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        style={styles.input}
        editable={!sendingMessage} />
      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </View>
  );
}