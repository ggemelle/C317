import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Inatel from "../assets/inatel.png";
import Lupa from "../assets/lupa.png";

const PageAdminPerguntas = ({ route, navigation }) => {

  const { employeeId } = route.params; // Obtendo o userId

  return (
    <View style={styles.container}>
      <Image style={styles.magnifyingGlassElementBackIcon} resizeMode="contain" source={Lupa} />
      <Text style={styles.satisfactionapp}>CAPTALIS</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('PageCreatePergunta', {employeeId})} // Navegação correta para criar pesquisa
        >
          <Text style={styles.buttonText}>Adicionar uma pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('PagePesquisaUserEdit', {employeeId})}
        >
          <Text style={styles.buttonText}>Editar uma pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('PagePesquisaAdminRespostas', {employeeId})} // Navegação para a tela PagePesquisaUser ao visualizar pesquisas
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
  magnifyingGlassElementBackIcon: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#004aad',
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
