import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Lupa from "../assets/lupa.png";

const PageAdminRespostas = ({ route }) => {
  const { research_id } = route.params;
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:3333/questions?research_id=${research_id}`);
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
        } else {
          console.error('Erro ao buscar perguntas:', response.status);
        }
      } catch (error) {
        console.error('Erro ao conectar à API:', error);
      }
    };

    const fetchAnswers = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:3333/results?research_id=${research_id}`);
        if (response.ok) {
          const data = await response.json();
          setAnswers(data);
        } else {
          console.error('Erro ao buscar respostas:', response.status);
        }
      } catch (error) {
        console.error('Erro ao conectar à API para buscar respostas:', error);
      }
    };

    fetchQuestions();
    fetchAnswers();
  }, [research_id]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Lupa} />
      <Text style={styles.title}>CAPTALIS</Text>

      {questions.map((question) => (
        <View key={question.question_id} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.question_description}</Text>

          {answers[question.question_id] ? (
            <View style={styles.answerContainer}>
              <Text style={styles.answerText}>Muito bom: {answers[question.question_id]["Muito bom"] || 0}</Text>
              <Text style={styles.answerText}>Bom: {answers[question.question_id]["Bom"] || 0}</Text>
              <Text style={styles.answerText}>Regular: {answers[question.question_id]["Regular"] || 0}</Text>
              <Text style={styles.answerText}>Ruim: {answers[question.question_id]["Ruim"] || 0}</Text>
              <Text style={styles.answerText}>Muito ruim: {answers[question.question_id]["Muito ruim"] || 0}</Text>
            </View>
          ) : (
            <Text style={styles.answerText}>Nenhuma resposta disponível</Text>
          )}
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 30,
    fontFamily: 'Cursive',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  questionContainer: {
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#004aad',
    borderRadius: 10,
    padding: 15,
  },
  questionText: {
    fontSize: 18,
    color: '#fff',
  },
  answerContainer: {
    marginTop: 10,
  },
  answerText: {
    fontSize: 16,
    color: '#ff0',
  },
});

export default PageAdminRespostas;
