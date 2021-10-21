import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';

export function Header(){
  return (
    <View style={styles.container}>
      <LogoSvg/>
      <View style={styles.logoutButton}>

      </View>
      <TouchableOpacity>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
      <UserPhoto imageUri='https://github.com/VictorMello1993.png'/>
    </View>
  );
}