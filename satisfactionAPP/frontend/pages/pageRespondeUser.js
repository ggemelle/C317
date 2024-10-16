import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PageRespondeUser = () => {
  const { width, height } = Dimensions.get('window');
  const [selectedValues, setSelectedValues] = useState({
    pergunta1: 0,
    pergunta2: 0,
    pergunta3: 0,
    pergunta4: 0,
  });

  const handleSelectValue = (pergunta, value) => {
    setSelectedValues({
      ...selectedValues,
      [pergunta]: value,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SatisfactionAPP</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>PERGUNTA 1 (Peso 20) :</Text>
        <View style={styles.optionsContainer}>
          {[1, 2, 3, 4, 5].map(value => (
            <TouchableOpacity
              key={value}
              style={[
                styles.optionButton,
                selectedValues.pergunta1 === value && styles.optionButtonSelected,
              ]}
              onPress={() => handleSelectValue('pergunta1', value)}
            >
              <Text style={styles.optionButtonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>PERGUNTA 2 (Peso 10) :</Text>
        <View style={styles.optionsContainer}>
          {[1, 2, 3, 4, 5].map(value => (
            <TouchableOpacity
              key={value}
              style={[
                styles.optionButton,
                selectedValues.pergunta2 === value && styles.optionButtonSelected,
              ]}
              onPress={() => handleSelectValue('pergunta2', value)}
            >
              <Text style={styles.optionButtonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>PERGUNTA 3 (Peso 20) :</Text>
        <View style={styles.optionsContainer}>
          {[1, 2, 3, 4, 5].map(value => (
            <TouchableOpacity
              key={value}
              style={[
                styles.optionButton,
                selectedValues.pergunta3 === value && styles.optionButtonSelected,
              ]}
              onPress={() => handleSelectValue('pergunta3', value)}
            >
              <Text style={styles.optionButtonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>PERGUNTA 4 (Peso 50) :</Text>
        <View style={styles.optionsContainer}>
          {[1, 2, 3, 4, 5].map(value => (
            <TouchableOpacity
              key={value}
              style={[
                styles.optionButton,
                selectedValues.pergunta4 === value && styles.optionButtonSelected,
              ]}
              onPress={() => handleSelectValue('pergunta4', value)}
            >
              <Text style={styles.optionButtonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b72805',  // Mesma cor de fundo usada na tela principal
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 30,
    fontFamily: 'Cursive', // Troque para uma fonte similar, se necessário
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
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButtonSelected: {
    backgroundColor: '#3d3838',
  },
  optionButtonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default PageRespondeUser;
