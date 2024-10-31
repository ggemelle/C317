import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Inatel from "../assets/inatel.png";

const PageCreatePergunta = ({ route, navigation }) => {
  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const ano = dataAtual.getFullYear();
  const dataFormatada = `${ano}-${mes}-${dia}`;
  const { employeeId } = route.params;
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [score, setScore] = useState(''); // Novo campo para a nota
  const [questions, setQuestions] = useState([]);
  const submetricValues = [100, 80, 60, 40, 20]; // Valores fixos das submétricas

  // Função para adicionar uma pergunta
  const addQuestion = () => {
    const newScore = parseInt(score);

    const newQuestion = {
      question,
      score: newScore,
      submetrics: submetricValues
    };

    setQuestions([...questions, newQuestion]);
    setQuestion('');
    setScore(''); // Limpa o campo de nota
  };

  // Função para salvar a pesquisa
  const handleSaveSurvey = async () => {
    if (!title.trim()) {
      alert('Por favor, insira um título para a pesquisa');
      return;
    }

    try {
      const response = await fetch(`http://10.0.2.2:3333/researches`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: dataFormatada,
          name: title,
          employee_id: employeeId
        }),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        const researchId = jsonResponse.insertId;

        for (const questionObj of questions) {
          await fetch(`http://10.0.2.2:3333/questions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              description: questionObj.question,
              weight: questionObj.score, // Usa a nota definida pelo usuário
              research_id: researchId,
              employee_id: employeeId
            }),
          });
        }
        console.log('Pesquisa inserida com sucesso');
        navigation.goBack();
      } else if (response.status === 404) {
        alert('Falha ao criar pesquisa');
      }
    } catch (error) {
      console.error('Erro ao conectar à API:', error);
      alert('Erro ao conectar à API');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Pesquisa</Text>
      
      <TextInput style={styles.input} placeholder="Título da Pesquisa" value={title} onChangeText={setTitle} />
      
      <TextInput style={styles.input} placeholder="Digite sua pergunta" value={question} onChangeText={setQuestion} />

      <TextInput style={styles.input} placeholder="Peso (1 a 10)" value={score} onChangeText={setScore} keyboardType="numeric" />

      <TouchableOpacity style={styles.button} onPress={addQuestion}>
        <Text style={styles.buttonText}>Adicionar Pergunta</Text>
      </TouchableOpacity>

      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.questionItem}>{item.question} - Peso: {item.score}</Text>
            <Text>Submétricas:</Text>
            {item.submetrics.map((sub, index) => (
              <Text key={index}>Submétrica {index + 1}: {sub}%</Text>
            ))}
          </View>
        )}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveSurvey}>
        <Text style={styles.buttonText}>Salvar Pesquisa</Text>
      </TouchableOpacity>

      <Image style={styles.images1Icon} source={Inatel} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D8DAD6', 
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
    backgroundColor: '#004aad',
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
    backgroundColor: '#004aad',
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
  images1Icon: {
    width: 140,
    height: 40,
    marginTop: 20,
    alignSelf: 'center', 
  },
});

export default PageCreatePergunta;
