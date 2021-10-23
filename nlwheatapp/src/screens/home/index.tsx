import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';
import { SendMessageForm } from '../../components/SendMessageForm';
import { useAuth } from '../../hooks/auth';
import { Platform } from '@unimodules/react-native-adapter';

export function Home() {
  const { user } = useAuth();
  return (
    <KeyboardAvoidingView style={{flex: 1}} 
                          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <Header />
        <MessageList />

        {/* RENDERIZAÇÃO CONDICIONAL */}
        {/* Se o usuário está logado, já acessa a lista de mensagens. */}
        {/* Caso contrário, acessa a tela onde está o botão de login do GitHub e terá que autenticar novamente */}
        {user ? <SendMessageForm /> : <SignInBox />}
      </View>
    </KeyboardAvoidingView>
  )
}