import {StyleSheet} from 'react-native'
import {COLORS} from '../../theme'
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

//Definindo regras de estilo de um componente (Equivalente ao CSS na versão web desktop)
// Em versões mobile, um componente já vem configurado com display flex por padrão
export const styles = StyleSheet.create({
  container: {
    flex: 1, //Container ocupa a tela inteira (equivalente a width: 100vw <=> ou width: 100% na versão web desktop)
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: getStatusBarHeight() + 17
  }
})