import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Inatel from "../assets/inatel.png";

const PageCreatePergunta = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [responseValues, setResponseValues] = useState([1, 2, 3, 4, 5]); // Respostas pré-definidas

  // Função para adicionar ou editar uma pergunta
  const handleAddOrEditQuestion = () => {
    if (question.trim()) {
      if (isEditing !== false) {
        const updatedQuestions = [...questions];
        updatedQuestions[editIndex] = { question, responses: responseValues.map((_, index) => ({ value: responseValues[index], text: `Resposta ${index + 1}` })) };
        setQuestions(updatedQuestions);
        setIsEditing(false);
      } else {
        setQuestions([...questions, { question, responses: responseValues.map((_, index) => ({ value: responseValues[index], text: `Resposta ${index + 1}` })) }]);
      }
      setQuestion('');
    }
  };

  // Função para iniciar a edição de uma pergunta
  const handleEditQuestion = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setQuestion(questions[index].question);
    // Presumindo que as respostas padrão sejam [1, 2, 3, 4, 5]
  };

  // Função para salvar a pesquisa
  const handleSaveSurvey = async () => {
    if (!title.trim()) {
      alert('Por favor, insira um título para a pesquisa');
      return;
    }

    if (questions.length === 0) {
      alert('Por favor, adicione pelo menos uma pergunta');
      return;
    }

    // Enviar as perguntas e o título da pesquisa para o backend
    try {
      const response = await fetch('http://10.0.2.2:3333/surveys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          questions,
        }),
      });

      if (response.status === 201) {
        alert('Pesquisa criada com sucesso!');
        navigation.goBack();
      } else {
        alert('Erro ao criar a pesquisa');
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      alert('Erro ao conectar com a API');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Pesquisa</Text>

      {/* Campo para o título da pesquisa */}
      <TextInput
        style={styles.input}
        placeholder="Título da Pesquisa"
        value={title}
        onChangeText={setTitle}
      />

      {/* Campo para adicionar perguntas */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua pergunta"
        value={question}
        onChangeText={setQuestion}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddOrEditQuestion}>
        <Text style={styles.buttonText}>{isEditing ? 'Editar Pergunta' : 'Adicionar Pergunta'}</Text>
      </TouchableOpacity>

      {/* Lista de perguntas adicionadas */}
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionContainer}>
            <TouchableOpacity onPress={() => handleEditQuestion(index)}>
              <Text style={styles.questionItem}>{item.question}</Text>
            </TouchableOpacity>
            <View style={styles.responseContainer}>
              {item.responses.map((response, respIndex) => (
                <View key={respIndex} style={styles.responseItem}>
                  <TextInput
                    style={styles.responseInput}
                    value={response.text}
                    onChangeText={(text) => {
                      const updatedResponses = [...questions];
                      updatedResponses[index].responses[respIndex].text = text;
                      setQuestions(updatedResponses);
                    }}
                  />
                  <Text style={styles.responseValue}>{response.value}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyList}>Nenhuma pergunta adicionada</Text>}
      />

      {/* Botão para salvar a pesquisa */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveSurvey}>
        <Text style={styles.buttonText}>Salvar Pesquisa</Text>
      </TouchableOpacity>

      {/* Imagem de marca da aplicação */}
      <Image style={styles.images1Icon} source={Inatel} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#b72805', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', 
  },
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff', 
  },
  button: {
    backgroundColor: '#3d3838',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#3d3838',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  questionContainer: {
    marginBottom: 15,
  },
  questionItem: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    color: '#000', 
  },
  responseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  responseItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  responseInput: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: 80,
    marginRight: 10,
  },
  responseValue: {
    fontSize: 16,
    color: '#000',
  },
  emptyList: {
    textAlign: 'center',
    color: '#fff', 
  },
  images1Icon: {
    width: 140,
    height: 40,
    marginTop: 20,
    alignSelf: 'center', 
  },
});

export default PageCreatePergunta;
