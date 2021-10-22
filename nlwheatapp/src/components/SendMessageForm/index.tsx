import React, { useState } from 'react';
import {TextInput, TextInputBase, View} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';
import { styles } from './styles';

export function SendMessageForm(){
  //Criando estado para armazenar o conteúdo da mensagem no TextInput
  const [message, setMessage] = useState('')

  //Criando estado para verificar se a mensagem está sendo enviada
  const [sendingMessage, setSendingMessage] = useState(false)

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
        editable={!sendingMessage}/>
      <Button 
          title="ENVIAR MENSAGEM" 
          backgroundColor={COLORS.PINK} 
          color={COLORS.WHITE}/>
    </View>
  );
}