import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import Lupa from "../assets/lupa.png";
import Inatel from "../assets/inatel.png";

const PageCreateUser = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View style={styles.androidLarge1}>
      <View style={styles.androidLarge1Child} />
      <Text style={[styles.email, styles.senhaTypo]}>EMAIL</Text>
      <View style={[styles.androidLarge1Item, styles.androidLayout]} />
      <Text style={[styles.confirmarSenha, styles.senhaTypo]}>
        CONFIRMAR SENHA
      </Text>
      <View style={[styles.androidLarge1Inner, styles.androidLayout]} />
      <View style={[styles.rectangleView, styles.androidLayout]} />
      <View style={[styles.androidLarge1Child1, styles.androidLayout]} />
      <Text style={[styles.cadastrarSe, styles.cadastrarSeFlexBox]}>
        CADASTRAR-SE
      </Text>
      <Text style={[styles.senha, styles.senhaTypo]}>SENHA</Text>
      <Text style={[styles.usurio, styles.senhaTypo]}>USUÁRIO</Text>
      <Image
        style={styles.magnifyingGlassElementBackIcon}
        resizeMode="cover"
        source={Lupa}
      />
      <Text
        style={[styles.satisfactionapp, styles.cadastrarSeFlexBox]}
        adjustsFontSizeToFit
        numberOfLines={1}>
        SatisfactionAPP
      </Text>
      <Image
        style={styles.images1Icon}
        resizeMode="cover"
        source={Inatel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  senhaTypo: {
    height: 15,
    left: 101,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    position: 'absolute',
  },
  androidLayout: {
    height: 30,
    width: 160,
    backgroundColor: '#fff',
    left: 101,
    position: 'absolute',
  },
  cadastrarSeFlexBox: {
    textAlign: 'left',
    color: '#fff',
    position: 'absolute',
  },
  androidLarge1Child: {
    top: 262,
    left: 56,
    backgroundColor: '#3d3838',
    width: 250,
    height: 335,
    position: 'absolute',
  },
  email: {
    top: 362,
    width: 100,
  },
  androidLarge1Item: {
    top: 377,
  },
  confirmarSenha: {
    top: 473,
    width: 150,
  },
  androidLarge1Inner: {
    top: 488,
  },
  rectangleView: {
    top: 323,
  },
  androidLarge1Child1: {
    top: 431,
  },
  cadastrarSe: {
    top: 569,
    left: 131,
    height: 20,
    width: 100,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    textAlign: 'left',
    color: '#fff',
  },
  senha: {
    top: 416,
    width: 100,
  },
  usurio: {
    top: 308,
    width: 100,
  },
  magnifyingGlassElementBackIcon: {
    top: 92,
    left: 189,
    width: 117,
    height: 134,
    position: 'absolute',
  },
  satisfactionapp: {
    top: 38,
    left: 62,
    fontSize: 64,
    fontFamily: 'Inspiration-Regular',
    width: 196,
    height: 78,
  },
  images1Icon: {
    top: 743,
    left: 87,
    width: 187,
    height: 52,
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

export default PageCreateUser;