import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';

const PageRespondeUser = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View style={styles.androidLarge1}>
      <Text style={[styles.pergunta1, styles.perguntaTypo]}>PERGUNTA 1 :</Text>
      <View style={[styles.androidLarge1Child, styles.androidLayout]} />
      <Text style={[styles.pergunta2, styles.perguntaTypo]}>PERGUNTA 2 :</Text>
      <View style={[styles.androidLarge1Item, styles.androidLayout]} />
      <Text style={[styles.pergunta3, styles.perguntaTypo]}>PERGUNTA 3 :</Text>
      <View style={[styles.androidLarge1Inner, styles.androidLayout]} />
      <Text style={[styles.pergunta4, styles.perguntaTypo]}>PERGUNTA 4 :</Text>
      <View style={[styles.rectangleView, styles.androidLayout]} />
      <Image
        style={styles.images1Icon}
        resizeMode="cover"
        source={require('./images-1.png')}
      />
      <Image
        style={styles.magnifyingGlassElementBackIcon}
        resizeMode="cover"
        source={require('./magnifying-glass-element-back-to-school-icon-set-png-1.png')}
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
    height: 65,
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
});

export default PageRespondeUser;