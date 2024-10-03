import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PageAdminPerguntas = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.magnifyingGlassElementBackIcon} source="magnifying-glass-element-back-to-school-icon-set-png 1.png" />
      <Text style={styles.satisfactionapp}>SatisfactionAPP</Text>
      <Text style={styles.adicionarUmaPesquisa}>Adicionar uma pesquisa</Text>
      <Text style={styles.editarUmaPesquisa}>Editar uma pesquisa</Text>
      <Text style={styles.excluirUmaPesquisa}>Excluir uma pesquisa</Text>
      <Text style={styles.visualizarPesquisas}>Visualizar pesquisas</Text>
      <Image style={styles.images1Icon} source="images 1.png" />
      <Image style={styles.androidLarge2ChildBackground} source="androidLarge2ChildBackground.png" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b72805',
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
  adicionarUmaPesquisa: {
    fontSize: 16,
    fontFamily: 'Inter-Black',
    left: '30%',
    top: '40%',
  },
  editarUmaPesquisa: {
    fontSize: 16,
    fontFamily: 'Inter-Black',
    left: '30%',
    top: '55%',
  },
  excluirUmaPesquisa: {
    fontSize: 16,
    fontFamily: 'Inter-Black',
    left: '30%',
    top: '70%',
  },
  visualizarPesquisas: {
    fontSize: 16,
    fontFamily: 'Inter-Black',
    left: '30%',
    top: '85%',
  },
  images1Icon: {
    width: 140,
    height: 40,
    top: '95%',
    left: '30%',
  },
  androidLarge2ChildBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default PageAdminPerguntas;