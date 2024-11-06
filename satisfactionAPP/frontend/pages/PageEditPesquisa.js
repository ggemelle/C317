import * as React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PageEditPesquisa = ({ route, navigation }) => {
  // Recebe o título, pergunta e nota inicial da pesquisa através das props de rota
  const [titulo, setTitulo] = React.useState(route.params?.titulo || '');
  const [pergunta, setPergunta] = React.useState(route.params?.pergunta || '');
  const [nota, setNota] = React.useState(route.params?.nota?.toString() || ''); // Novo campo para a nota

  // Função para excluir a pesquisa
  const handleDeleteSurvey = () => {
    Alert.alert(
      "Excluir Pesquisa",
      "Tem certeza de que deseja excluir esta pesquisa?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", style: "destructive", onPress: () => {
          // Lógica para excluir a pesquisa (exemplo de navegação para voltar)
          console.log('Pesquisa excluída');
          navigation.goBack();
        }}
      ]
    );
  };

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

      <TextInput
        style={styles.input}
        placeholder="Nota (1 a 10)"
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric" // Define o teclado numérico
      />
      
      <TouchableOpacity style={styles.button} onPress={() => {/* Lógica para salvar */}}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>

      {/* Botão para excluir a pesquisa */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteSurvey}>
        <Text style={styles.deleteButtonText}>Excluir Pesquisa</Text>
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
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d', // Cor vermelha para o botão de exclusão
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default PageEditPesquisa;
