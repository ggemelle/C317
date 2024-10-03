import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

const PagePesquisaUser = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View style={styles.androidLarge1}>
      <View style={[styles.androidLarge1Child, styles.androidLayout]} />
      <Text style={[styles.pesquisa1, styles.pesquisaFlexBox]}>
        PESQUISA 1
      </Text>
      <View style={[styles.androidLarge1Item, styles.androidLayout]} />
      <Text style={[styles.pesquisa2, styles.pesquisaFlexBox]}>
        PESQUISA 2
      </Text>
      <View style={[styles.androidLarge1Inner, styles.androidLayout]} />
      <Text style={[styles.pesquisa3, styles.pesquisaFlexBox]}>
        PESQUISA 3
      </Text>
      <View style={[styles.rectangleView, styles.androidLayout]} />
      <Text style={[styles.pesquisa4, styles.pesquisaFlexBox]}>
        PESQUISA 4
      </Text>
      <Text style={[styles.pesquisasDisponiveis, styles.pesquisaFlexBox]}>
        Pesquisas disponíveis
      </Text>
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
      <Text
        style={[styles.satisfactionapp, styles.pesquisaFlexBox]}
        adjustsFontSizeToFit
        numberOfLines={1}>
        SatisfactionAPP
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  androidLayout: {
    height: 65,
    width: 300,
    backgroundColor: '#3d3838',
    left: 30,
    position: 'absolute',
  },
  pesquisaFlexBox: {
    textAlign: 'left',
    color: '#fff',
    position: 'absolute',
  },
  androidLarge1Child: {
    top: 312,
  },
  pesquisa1: {
    top: 326,
    fontFamily: 'Inter-Regular',
    fontSize: 30,
    color: '#fff',
    left: 43,
  },
  androidLarge1Item: {
    top: 408,
  },
  pesquisa2: {
    top: 422,
    fontFamily: 'Inter-Regular',
    fontSize: 30,
    color: '#fff',
    left: 43,
  },
  androidLarge1Inner: {
    top: 509,
  },
  pesquisa3: {
    top: 518,
    fontFamily: 'Inter-Regular',
    fontSize: 30,
    color: '#fff',
    left: 43,
  },
  rectangleView: {
    top: 610,
  },
  pesquisa4: {
    top: 625,
    fontFamily: 'Inter-Regular',
    fontSize: 30,
    color: '#fff',
    left: 43,
  },
  pesquisasDisponiveis: {
    top: 231,
    left: 20,
    fontFamily: 'Inter-Regular',
    fontSize: 30,
    color: '#fff',
  },
  images1Icon: {
    top: 743,
    left: 87,
    width: 187,
    height: 52,
    position: 'absolute',
  },
  magnifyingGlassElementBackIcon: {
    top: 79,
    left: 203,
    width: 117,
    height: 134,
    position: 'absolute',
  },
  satisfactionapp: {
    top: 25,
    left: 76,
    fontSize: 64,
    fontFamily: 'Inspiration-Regular',
    width: 196,
    height: 78,
  },
  androidLarge1: {
    backgroundColor: '#b72805',
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});

export default PagePesquisaUser;