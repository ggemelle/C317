import React, { useState } from 'react';
import { Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Inatel from "./assets/inatel.png";
import Lupa from "./assets/lupa.png";

const App = () => {
  const { width, height } = Dimensions.get('window');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEntrar = () => {
    if (!usuario || !senha) {
      setMensagem('Preencha os campos de usuário e senha.');
      return;
    }

    // Exemplo de validação simples para email (pode ser melhorado)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(usuario)) {
      setMensagem('Por favor, insira um e-mail válido.');
      return;
    }

    // Se tudo estiver correto
    setMensagem('Login realizado com sucesso!');
    Alert.alert('Login realizado', `Usuário: ${usuario}`);
  };

  const handleCadastrar = () => {
    Alert.alert('Cadastro', 'Redirecionando para página de cadastro...');
  };

  return (
    <View style={styles.androidLarge1}>
      <View style={styles.androidLarge1Child} />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#999"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleEntrar}>
          <Text style={styles.entrar}>ENTRAR</Text>
        </TouchableOpacity>

        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
          <Text style={styles.cadastrarSe}>CADASTRAR-SE</Text>
        </TouchableOpacity>
      </View>

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
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    color: '#000',
    width: '50%',
    marginBottom: 10,
    alignSelf: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    //width: '60%',
    //backgroundColor: '#f07c00',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'center',
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
  container: {
    top: 384,
    alignItems: 'center', // centraliza os elementos no eixo horizontal
  },
  entrar: {
    color: '#fff',
    fontSize: 12,
  },
  cadastrarSe: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  mensagem: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
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
