import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Lupa from "../assets/lupa.png";

const PageRespondeUser = ({ route }) => {
  const { research_id, employee_id } = route.params;
  const { width, height } = Dimensions.get('window');
  const [selectedValues, setSelectedValues] = useState({});
  const [questions, setQuestions] = useState([]);
  
  const options = ['Muito bom', 'Bom', 'Regular', 'Ruim', 'Muito ruim'];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:3333/questions?research_id=${research_id}`);
        if (response.ok) {
          const data = await response.json();
          setQuestions(data); // Atualiza o estado com as perguntas retornadas pela API
        } else {
          console.error('Erro ao buscar perguntas:', response.status);
        }
      } catch (error) {
        console.log(research_id);
        console.error('Erro ao conectar à API:', error);
      }
    };

    fetchQuestions();
  }, [research_id]);

  const handleSelectValue = (questionId, value) => {
    setSelectedValues({
      ...selectedValues,
      [questionId]: value,
    });
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
            {options.map((label) => (
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
});

export default PageRespondeUser;
