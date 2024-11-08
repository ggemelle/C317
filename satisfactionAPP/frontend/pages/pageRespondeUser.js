import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Lupa from "../assets/lupa.png";

const PageRespondeUser = ({ route }) => {
  const { research_id, employeeId } = route.params;
  const { width, height } = Dimensions.get('window');
  const [selectedValues, setSelectedValues] = useState({});
  const [questions, setQuestions] = useState([]);
  
  const options = {
    'Muito bom': 5,
    'Bom': 4,
    'Regular': 3,
    'Ruim': 2,
    'Muito ruim': 1
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:3333/questions?research_id=${research_id}`);
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
          fetchExistingAnswers(data); // Chama a função para buscar respostas existentes após carregar as perguntas
        } else {
          console.error('Erro ao buscar perguntas:', response.status);
        }
      } catch (error) {
        console.error('Erro ao conectar à API:', error);
      }
    };

    const fetchExistingAnswers = async (questions) => {
      try {
        const initialValues = {};
        for (const question of questions) {
          const response = await fetch(`http://10.0.2.2:3333/answers?question_id=${question.question_id}&employee_id=${employeeId}`);
          if (response.ok) {
            const answers = await response.json();
            answers.forEach((answer) => {
              const label = Object.keys(options).find(key => options[key] === answer.answer_value);
              if (label) {
                initialValues[answer.question_id] = label;
              }
            });
          } else if (response.status === 404) {
            console.log(`Nenhuma resposta existente encontrada para a pergunta ${question.question_id}`);
            // Não faz nada para manter o botão desativado
          } else {
            console.error(`Erro ao buscar resposta para a pergunta ${question.question_id}:`, response.status);
          }
        }
        setSelectedValues(initialValues); // Define somente valores que foram encontrados
      } catch (error) {
        console.error('Erro ao conectar à API para buscar respostas:', error);
      }
    };

    fetchQuestions();
  }, [research_id, employeeId]);

  const handleSelectValue = (questionId, label) => {
    setSelectedValues({
      ...selectedValues,
      [questionId]: label,
    });
  };

  const submitAnswers = async () => {
    try {
      const responses = Object.entries(selectedValues).map(([questionId, label]) => ({
        answer_value: options[label],
        question_id: parseInt(questionId),
        research_id: research_id,
        employee_id: employeeId,
      }));
  
      for (const response of responses) {
        // Verifica se já existe uma resposta selecionada para usar PUT ou POST
        const existingAnswer = await fetch(`http://10.0.2.2:3333/answers?question_id=${response.question_id}&employee_id=${employeeId}`);
        
        if (existingAnswer.ok) {
          // Se a resposta já existe, usa o PUT para atualizar
          await fetch(`http://10.0.2.2:3333/answers`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(response),
          });
        } else if (existingAnswer.status === 404) {
          // Se não há resposta (404), usa o POST para criar uma nova
          await fetch('http://10.0.2.2:3333/answers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(response),
          });
        } else {
          console.error(`Erro ao verificar resposta existente para a pergunta ${response.question_id}:`, existingAnswer.status);
        }
      }
  
      Alert.alert('Sucesso', 'Respostas enviadas com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar à API para enviar respostas:', error);
      Alert.alert('Erro', 'Erro ao enviar respostas.');
    }
  };  

  return (
    <View style={styles.container}>
      <Image style={styles.magnifyingGlassElementBackIcon} resizeMode="contain" source={Lupa} />
      <Text style={styles.title}>CAPTALIS</Text>

      {questions.map((question) => (
        <View key={question.question_id} style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {question.question_description} (Peso {question.question_weight})
          </Text>
          <View style={styles.optionsContainer}>
            {Object.keys(options).map((label) => (
              <TouchableOpacity
                key={label}
                style={[
                  styles.optionButton,
                  selectedValues[question.question_id] === label && styles.optionButtonSelected,
                ]}
                onPress={() => handleSelectValue(question.question_id, label)}
              >
                <Text style={styles.optionButtonText}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.saveButton} onPress={submitAnswers}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8DAD6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 30,
    fontFamily: 'Cursive',
  },
  questionContainer: {
    marginBottom: 20,
    width: '100%',
  },
  questionText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  magnifyingGlassElementBackIcon: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  optionButtonSelected: {
    backgroundColor: '#004aad',
  },
  optionButtonText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#004aad',
    borderRadius: 25,
    width: '60%',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PageRespondeUser;
