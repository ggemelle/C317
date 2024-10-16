import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import Lupa from "../assets/lupa.png";
import Inatel from "../assets/inatel.png";

const PageRespondeUser = () => {
  const {width, height} = Dimensions.get('window');

  // Pesos das perguntas
  const weights = {
    pergunta1: 20,
    pergunta2: 10,
    pergunta3: 20,
    pergunta4: 50,
  };

  // States para as opções selecionadas
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);

  // Função para calcular o total de pontos
  const calculateTotalPoints = () => {
    const totalPoints =
      (selectedOption1 ? selectedOption1 * weights.pergunta1 : 0) +
      (selectedOption2 ? selectedOption2 * weights.pergunta2 : 0) +
      (selectedOption3 ? selectedOption3 * weights.pergunta3 : 0) +
      (selectedOption4 ? selectedOption4 * weights.pergunta4 : 0);
    return totalPoints;
  };

  // Função para renderizar opções de múltipla escolha
  const renderOptions = (selectedOption, setSelectedOption) => {
    return [1, 2, 3, 4, 5].map((option) => (
      <TouchableOpacity
        key={option}
        style={[styles.optionButton, selectedOption === option && styles.selectedOption]}
        onPress={() => setSelectedOption(option)}
      >
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.androidLarge1}>
      {/* Pergunta 1 com peso */}
      <Text style={[styles.pergunta1, styles.perguntaTypo]}>
        PERGUNTA 1 (Peso {weights.pergunta1}) :
      </Text>
      <View style={[styles.androidLarge1Child, styles.androidLayout]}>
        <View style={styles.optionsContainer}>
          {renderOptions(selectedOption1, setSelectedOption1)}
        </View>
      </View>

      {/* Pergunta 2 com peso */}
      <Text style={[styles.pergunta2, styles.perguntaTypo]}>
        PERGUNTA 2 (Peso {weights.pergunta2}) :
      </Text>
      <View style={[styles.androidLarge1Item, styles.androidLayout]}>
        <View style={styles.optionsContainer}>
          {renderOptions(selectedOption2, setSelectedOption2)}
        </View>
      </View>

      {/* Pergunta 3 com peso */}
      <Text style={[styles.pergunta3, styles.perguntaTypo]}>
        PERGUNTA 3 (Peso {weights.pergunta3}) :
      </Text>
      <View style={[styles.androidLarge1Inner, styles.androidLayout]}>
        <View style={styles.optionsContainer}>
          {renderOptions(selectedOption3, setSelectedOption3)}
        </View>
      </View>

      {/* Pergunta 4 com peso */}
      <Text style={[styles.pergunta4, styles.perguntaTypo]}>
        PERGUNTA 4 (Peso {weights.pergunta4}) :
      </Text>
      <View style={[styles.rectangleView, styles.androidLayout]}>
        <View style={styles.optionsContainer}>
          {renderOptions(selectedOption4, setSelectedOption4)}
        </View>
      </View>

      {/* Pontuação Total */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total de Pontos: {calculateTotalPoints()}</Text>
      </View>

      {/* Imagens */}
      <Image
        style={styles.images1Icon}
        resizeMode="cover"
        source={Inatel}
      />
      <Image
        style={styles.magnifyingGlassElementBackIcon}
        resizeMode="cover"
        source={Lupa}
      />
      <Text style={styles.satisfactionapp}>SatisfactionAPP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  perguntaTypo: {
    height: 39,
    width: 263,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    left: 30,
    textAlign: 'left',
    color: '#fff',
    position: 'absolute',
  },
  androidLayout: {
    height: 100, // Ajuste para dar mais espaço aos botões
    width: 300,
    backgroundColor: '#fff',
    left: 30,
    position: 'absolute',
  },
  pergunta1: {
    top: 221,
  },
  androidLarge1Child: {
    top: 240,
  },
  pergunta2: {
    top: 351,
  },
  androidLarge1Item: {
    top: 370,
  },
  pergunta3: {
    top: 481,
  },
  androidLarge1Inner: {
    top: 500,
  },
  pergunta4: {
    top: 611,
  },
  rectangleView: {
    top: 630,
  },
  images1Icon: {
    top: 735,
    left: 87,
    width: 187,
    height: 52,
    position: 'absolute',
  },
  magnifyingGlassElementBackIcon: {
    top: 80,
    left: 198,
    width: 117,
    height: 134,
    position: 'absolute',
  },
  satisfactionapp: {
    top: 26,
    left: 71,
    fontSize: 64,
    fontFamily: 'Inspiration-Regular',
    width: 196,
    height: 78,
    textAlign: 'left',
    color: '#fff',
    position: 'absolute',
  },
  androidLarge1: {
    backgroundColor: '#b72805',
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  optionButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 20,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedOption: {
    backgroundColor: '#f0a500',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  totalContainer: {
    position: 'absolute',
    top: 700,
    left: 30,
  },
  totalText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default PageRespondeUser;
