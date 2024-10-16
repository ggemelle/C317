import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Inatel from "./assets/inatel.png";
import Lupa from "./assets/lupa.png";
import PageAdminRespostas from './pages/pageAdminRespostas';
import PageCreateUser from './pages/pageCreateUser'; // Importar a tela de criação de usuário

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
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

  return (
    <View style={styles.androidLarge1}>
      <Image style={styles.magnifyingGlassElementBackIcon} resizeMode="contain" source={Lupa} />
      <Text style={styles.satisfactionapp}>SatisfactionAPP</Text>

      <View style={styles.formContainer}>
        <Text style={styles.bemVindo}>Bem-vindo</Text>
        
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
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateUser')}>
          <Text style={styles.buttonText}>CADASTRAR-SE</Text>
        </TouchableOpacity>

        {/* Botão para navegar para a página de pesquisa */}
        <TouchableOpacity style={styles.buttonTest} onPress={() => navigation.navigate('PageAdminRespostas')}>
          <Text style={styles.buttonText}>TESTE</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.images1Icon} resizeMode="contain" source={Inatel} />
    </View>
  );
};

// Função principal App que define a navegação entre as telas
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateUser" component={PageCreateUser} options={{ title: 'Criar Usuário' }} />
        <Stack.Screen name="PageAdminRespostas" component={PageAdminRespostas} options={{ title: 'Page Admin Respostas' }} />
      </Stack.Navigator>
    </NavigationContainer>
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
    fontFamily: 'Cursive', // Troque para uma fonte similar
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
    backgroundColor: '#b72805',  // Cor alterada para vermelho
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonTest: {
    width: '90%',
    backgroundColor: '#007BFF',  // Cor azul para diferenciar o botão de teste
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  mensagem: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  images1Icon: {
    width: 150,
    height: 50,
    marginTop: 50,
  },
});

export default App;
