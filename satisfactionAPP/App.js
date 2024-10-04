import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Inatel from "./assets/inatel.png";
import Lupa from "./assets/lupa.png";

const App = () => {
  const { width, height } = Dimensions.get('window');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.androidLarge1}>
      <View style={styles.androidLarge1Child} />
      <View style={[styles.androidLarge1Item, styles.androidLayout]}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#999"
          value={usuario}
          onChangeText={setUsuario}
        />
      </View>
      <View style={[styles.androidLarge1Inner, styles.androidLayout]}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <Text style={[styles.entrar, styles.ouFlexBox]}>ENTRAR</Text>
      <Text style={[styles.cadastrarSe, styles.senhaTypo]}>CADASTRAR-SE</Text>
      <Text style={[styles.ou, styles.ouFlexBox]}>OU</Text>
      <Text style={[styles.senha, styles.senhaTypo]}>SENHA</Text>
      <Text style={[styles.usurio, styles.senhaTypo]}>USUÁRIO</Text>
      <Text style={[styles.bemVindo, styles.ouFlexBox]}>Bem-vindo</Text>
      <Image
        style={styles.magnifyingGlassElementBackIcon}
        resizeMode="cover"
        source={Lupa}
      />
      <Text style={[styles.satisfactionapp, styles.ouFlexBox]}>SatisfactionAPP</Text>
      <Image
        style={styles.images1Icon}
        resizeMode="cover"
        source={Inatel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLayout: {
    height: 30,
    width: 160,
    backgroundColor: '#fff',
    left: 98,
    position: 'absolute',
  },
  input: {
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    color: '#000',
  },
  ouFlexBox: {
    textAlign: 'left',
    color: '#fff',
    position: 'absolute',
  },
  senhaTypo: {
    width: 100,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    position: 'absolute',
  },
  androidLarge1Child: {
    top: 269,
    left: 56,
    backgroundColor: '#3d3838',
    width: 250,
    height: 335,
    position: 'absolute',
  },
  androidLarge1Item: {
    top: 384,
  },
  androidLarge1Inner: {
    top: 443,
  },
  entrar: {
    top: 515,
    left: 151,
    width: 52,
    height: 15,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    fontSize: 12,
  },
  cadastrarSe: {
    top: 576,
    left: 128,
    height: 20,
  },
  ou: {
    top: 546,
    left: 165,
    width: 32,
    height: 19,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    fontSize: 12,
  },
  senha: {
    top: 423,
    height: 15,
    left: 98,
    width: 100,
  },
  usurio: {
    top: 364,
    height: 35,
    left: 98,
    width: 100,
  },
  bemVindo: {
    top: 296,
    left: 123,
    fontSize: 20,
    width: 122,
    height: 33,
    fontFamily: 'Inter-Regular',
    color: '#fff',
  },
  magnifyingGlassElementBackIcon: {
    top: 120,
    left: 189,
    width: 117,
    height: 134,
    position: 'absolute',
  },
  satisfactionapp: {
    top: 38,
    left: 62,
    fontSize: 50,
    fontFamily: 'Inspiration-Regular',
    width: 270,
    height: 220,
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

export default App;
