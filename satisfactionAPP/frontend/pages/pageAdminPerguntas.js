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
          onPress={() => navigation.navigate('PageCreatePergunta')} // Navegação correta para criar pesquisa
        >
          <Text style={styles.buttonText}>Adicionar uma pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('EditarPesquisa')} // Se a tela de editar pesquisa já existir
        >
          <Text style={styles.buttonText}>Editar uma pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('ExcluirPesquisa')} // Se a tela de excluir pesquisa já existir
        >
          <Text style={styles.buttonText}>Excluir uma pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('VisualizarPesquisas')} // Se a tela de visualização de pesquisas já existir
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
    backgroundColor: '#D8DAD6',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3d3838',
    borderRadius: 10,
    padding: 15,
    width: '80%',
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
    marginBottom: 20,
  },
});

export default PageAdminPerguntas;
