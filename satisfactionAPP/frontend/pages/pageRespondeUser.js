import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Lupa from "../assets/lupa.png";

const PageRespondeUser = () => {
  const { width, height } = Dimensions.get('window');
  const [selectedValues, setSelectedValues] = useState({
    pergunta1: '',
    pergunta2: '',
    pergunta3: '',
    pergunta4: '',
  });

  const handleSelectValue = (pergunta, value) => {
    setSelectedValues({
      ...selectedValues,
      [pergunta]: value,
    });
  };

  const options = ['Muito bom', 'Bom', 'Regular', 'Ruim', 'Muito ruim'];

  return (
    <View style={styles.container}>
      <Image style={styles.magnifyingGlassElementBackIcon} resizeMode="contain" source={Lupa} />
      <Text style={styles.title}>CAPTALIS</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>PERGUNTA 1 (Peso 20) :</Text>
        <View style={styles.optionsContainer}>
          {options.map((label, index) => (
            <TouchableOpacity
              key={label}
              style={[
                styles.optionButton,
                selectedValues.pergunta1 === label && styles.optionButtonSelected,
              ]}
              onPress={() => handleSelectValue('pergunta1', label)}
            >
              <Text style={styles.optionButtonText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Repita o bloco acima para PERGUNTA 2, PERGUNTA 3 e PERGUNTA 4 */}
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
    width: 80, // Ajuste para caber o texto
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
