import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PageAdminRespostas = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.verResultadoDe}>Ver resultado de pesquisas disponíveis</Text>
      <Text style={styles.pesquisa1}>PESQUISA 1</Text>
      <Text style={styles.pesquisa2}>PESQUISA 2</Text>
      <Text style={styles.pesquisa3}>PESQUISA 3</Text>
      <Text style={styles.pesquisa4}>PESQUISA 4</Text>
      <Image style={styles.images1Icon} source="images 1.png" />
      <Image style={styles.magnifyingGlassElementBackIcon} source="magnifying-glass-element-back-to-school-icon-set-png 1.png" />
      <Text style={styles.satisfactionapp}>SatisfactionAPP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b72805',
  },
  verResultadoDe: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    left: '30%',
    top: '5%',
  },
  pesquisa1: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    left: '30%',
    top: '30%',
  },
  pesquisa2: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    left: '30%',
    top: '50%',
  },
  pesquisa3: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    left: '30%',
    top: '70%',
  },
  pesquisa4: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    left: '30%',
    top: '90%',
  },
  images1Icon: {
    width: 140,
    height: 40,
    top: '95%',
    left: '30%',
  },
  magnifyingGlassElementBackIcon: {
    width: 140,
    height: 140,
    top: '30%',
    left: '30%',
  },
  satisfactionapp: {
    fontSize: 42,
    fontFamily: 'Inspiration-Regular',
    left: '30%',
    top: '5%',
  },
});

export default PageAdminRespostas;