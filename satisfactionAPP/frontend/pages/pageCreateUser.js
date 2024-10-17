import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Inatel from "../assets/inatel.png";
import Lupa from "../assets/lupa.png";

const PageCreateUser = () => {
  const { width, height } = Dimensions.get('window');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastrar = async() => {
    // Lógica para cadastro de usuário
    if (!usuario || !email || !senha || !confirmarSenha) {
      alert('Preencha todos os campos.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setMensagem('Por favor, insira um e-mail válido.');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    // Criação do objeto de dados para envio
    const userData = {
      name: usuario,
      type: "admin",
      email: email,
      password: senha
    };

    try {
      // Fazendo a requisição POST usando fetch
      const response = await fetch('http://10.0.2.2:3333/employee', {
        method: 'POST',  // Método da requisição
        headers: {
          'Content-Type': 'application/json',  // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify({
          name: userData.name,
          type: userData.type,
          email: userData.email,
          password: userData.password
        }),  // Enviando o corpo da requisição como JSON
      });

      // Verificando a resposta
      if (response.ok) {
        const jsonResponse = await response.json();  // Se a resposta for JSON
        alert('Usuário cadastrado com sucesso!');
        console.log(jsonResponse);  // Apenas para verificar a resposta
      } else {
        const errorResponse = await response.json();
        alert('Erro ao cadastrar usuário: ' + errorResponse.message);
      }
    } catch (error) {
      console.error('Erro ao conectar à API:', error);
      alert('Erro ao conectar à API');
    }
  };

  return (
    <View style={styles.androidLarge1}>
      <Image style={styles.magnifyingGlassElementBackIcon} resizeMode="contain" source={Lupa} />
      <Text style={styles.satisfactionapp}>SatisfactionAPP</Text>

      <View style={styles.formContainer}>
        <Text style={styles.bemVindo}>Crie sua conta</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#999"
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
          <Text style={styles.buttonText}>CADASTRAR-SE</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.images1Icon} resizeMode="contain" source={Inatel} />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLarge1: {
    backgroundColor: '#b72805',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  magnifyingGlassElementBackIcon: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  satisfactionapp: {
    fontSize: 40,
    fontFamily: 'Cursive', // Ajuste para uma fonte similar
    color: '#fff',
    marginVertical: 20,
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#3d3838',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  bemVindo: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: '90%',
    backgroundColor: '#b72805',  // Cor do botão em vermelho
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  images1Icon: {
    width: 150,
    height: 50,
    marginTop: 50,
  },
  mensagem: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default PageCreateUser;
