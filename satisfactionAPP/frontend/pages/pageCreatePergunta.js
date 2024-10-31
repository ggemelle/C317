import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Inatel from "../assets/inatel.png";

const PageCreatePergunta = ({route, navigation }) => {

  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const ano = dataAtual.getFullYear();
  const dataFormatada = `${ano}-${mes}-${dia}`;
  const { employeeId } = route.params;
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);
  const [responseValues] = useState([1, 2, 3, 4, 5]); // Respostas pré-definidas

  // Função para calcular ENPS
  const calculateENPS = () => {
    const totalVotes = questions.length;
    const promoters = questions.filter(q => q.score > 90).length;
    const detractors = questions.filter(q => q.score <= 60).length;
    return ((promoters - detractors) / totalVotes) * 100;
  };

  // Função para adicionar uma pergunta com submétricas e nota fixa de 100
  const addQuestion = () => {
    const fixedScore = 100;

    const newQuestion = {
      question,
      score: fixedScore,
      submetrics: [100, 80, 60, 40, 20].map((impact) => ({
        impact,
        adjustedValue: (fixedScore * impact) / 100,
      }))
    };

    setQuestions([...questions, newQuestion]);
    setQuestion(''); // Limpa o campo da pergunta
  };



  // Função para salvar a pesquisa e calcular o ENPS
  const handleSaveSurvey = async () => {
    if (!title.trim()) {
      alert('Por favor, insira um título para a pesquisa');
      return;
    }
  
    const enps = calculateENPS();
  
    const researchData = {
      date: dataFormatada,
      name: title,
      employee_id: employeeId
    };
  
    try {
      const response = await fetch(`http://10.0.2.2:3333/researches`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: researchData.date,
          name: researchData.name,
          employee_id: researchData.employee_id
        }),
      });
  
      if (response.ok) {
        const jsonResponse = await response.json();
        const researchId = jsonResponse.insertId;
  
        // Agora, faça a requisição para a rota "/question" para cada pergunta criada
        for (const questionObj of questions) {
          await fetch(`http://10.0.2.2:3333/questions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              description: questionObj.question,
              weight: "6",
              research_id: researchId,
              employee_id: employeeId
            }),
          });
        }
      // Volte para a tela anterior após salvar todas as perguntas
      console.log('Pesquisa inserida com sucesso')
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
      
      {/* Campo para o título da pesquisa */}
      <TextInput style={styles.input} placeholder="Título da Pesquisa" value={title} onChangeText={setTitle} />
      
      {/* Campo para adicionar perguntas */}
      <TextInput style={styles.input} placeholder="Digite sua pergunta" value={question} onChangeText={setQuestion} />
      
      <TouchableOpacity style={styles.button} onPress={addQuestion}>
        <Text style={styles.buttonText}>Adicionar Pergunta</Text>
      </TouchableOpacity>

      {/* Lista de perguntas e suas submétricas */}
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.questionItem}>{item.question}</Text>
            <Text>Submétricas:</Text>
            {item.submetrics.map((sub, index) => (
              <Text key={index}>Submétrica {index + 1}: {sub.adjustedValue.toFixed(2)}%</Text>
            ))}
          </View>
        )}
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
