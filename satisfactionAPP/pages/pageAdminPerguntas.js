import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Inatel from "../assets/inatel.png";

const PageAdminPerguntas = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.satisfactionapp}>SatisfactionAPP</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('AdicionarPesquisa')} // Navegação para adicionar pesquisa
        >
          <Text style={styles.buttonText}>Adicionar uma pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('EditarPesquisa')} // Navegação para editar pesquisa
        >
          <Text style={styles.buttonText}>Editar uma pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('ExcluirPesquisa')} // Navegação para excluir pesquisa
        >
          <Text style={styles.buttonText}>Excluir uma pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('VisualizarPesquisas')} // Navegação para visualizar pesquisas
        >
          <Text style={styles.buttonText}>Visualizar pesquisas</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.images1Icon} source={Inatel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b72805',
    alignItems: 'center',
    justifyContent: 'flex-start', // O conteúdo começa no topo
    paddingTop: 20,
  },
  satisfactionapp: {
    fontSize: 42,
    fontFamily: 'Inspiration-Regular',
    marginTop: 20,
    color: '#fff',
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center', // Centraliza as opções verticalmente
    width: '100%', // Largura total para o container das opções
    alignItems: 'center', // Alinhamento horizontal
  },
  button: {
    backgroundColor: '#3d3838',
    borderRadius: 10,
    padding: 15,
    width: '80%', // Largura do botão
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Inter-Black',
    color: '#fff',
  },
  images1Icon: {
    width: 140,
    height: 40,
    marginBottom: 20, // Margem inferior para afastar da parte inferior
  },
});

export default PageAdminPerguntas;
