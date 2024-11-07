import * as React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

const PageEditPesquisa = ({ route, navigation }) => {
  const { employeeId, research_id, research_name } = route.params;
  
  // Estados para título da pesquisa e perguntas
  const [titulo, setTitulo] = React.useState(research_name);
  const [questions, setQuestions] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:3333/questions?research_id=${research_id}`);
        
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setQuestions(data);
          } else {
            setErrorMessage('Nenhuma pergunta encontrada.');
          }
        } else if (response.status === 404) {
          setErrorMessage('Nenhuma pergunta encontrada.');
        } else {
          console.error('Erro ao buscar perguntas:', response.status);
        }
      } catch (error) {
        console.error('Erro ao conectar à API:', error);
      }
    };

    fetchQuestions();
  }, [research_id]);

  // Função para salvar as alterações
  const handleSaveChanges = async () => {
    const currentDate = new Date().toISOString().split('T')[0]; // Formata a data atual como aaaa-mm-dd

    const body = {
      date: currentDate,
      name: titulo,
      research_id: research_id,
    };

    try {
      const response = await fetch(`http://10.0.2.2:3333/researches`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'As alterações foram salvas com sucesso.');
        navigation.goBack();
      } else {
        console.error('Erro ao salvar alterações:', response.status);
        Alert.alert('Erro', 'Não foi possível salvar as alterações.');
      }
    } catch (error) {
      console.error('Erro ao conectar à API:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar as alterações.');
    }
  };

  // Função para excluir a pesquisa
  const handleDeleteSurvey = () => {
    Alert.alert(
      "Excluir Pesquisa",
      "Tem certeza de que deseja excluir esta pesquisa?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", style: "destructive", onPress: () => {
          console.log('Pesquisa excluída');
          navigation.goBack();
        }}
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Editar Pesquisa</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Título da Pesquisa"
        value={titulo}
        onChangeText={setTitulo}
      />
      
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : (
        questions.map((question, index) => (
          <View key={question.question_id} style={styles.questionContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua pergunta"
              value={question.question_description}
              onChangeText={(text) => {
                const newQuestions = [...questions];
                newQuestions[index].question_description = text;
                setQuestions(newQuestions);
              }}
            />

            <TextInput
              style={styles.input}
              placeholder="Nota (1 a 10)"
              value={question.question_weight.toString()}
              onChangeText={(text) => {
                const newQuestions = [...questions];
                newQuestions[index].question_weight = parseInt(text, 10);
                setQuestions(newQuestions);
              }}
              keyboardType="numeric"
            />
          </View>
        ))
      )}
      
      <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteSurvey}>
        <Text style={styles.deleteButtonText}>Excluir Pesquisa</Text>
      </TouchableOpacity>
    </ScrollView>
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
    backgroundColor: '#ff4d4d',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 15,
  },
  questionContainer: {
    marginBottom: 20,
  },
});

export default PageEditPesquisa;
