import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PageEditPesquisa = ({ route }) => {
  // Recebe o título e pergunta inicial da pesquisa através das props de rota
  const [titulo, setTitulo] = React.useState(route.params?.titulo || '');
  const [pergunta, setPergunta] = React.useState(route.params?.pergunta || '');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Pesquisa</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Título da Pesquisa"
        value={titulo}
        onChangeText={setTitulo}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Digite sua pergunta"
        value={pergunta}
        onChangeText={setPergunta}
      />
      
      <TouchableOpacity style={styles.button} onPress={() => {/* Lógica para salvar */}}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D8DAD6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#004aad',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default PageEditPesquisa;
