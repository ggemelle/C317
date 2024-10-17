import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Inatel from "./assets/inatel.png";
import Lupa from "./assets/lupa.png";
import PageAdminRespostas from './pages/pageAdminRespostas';
import PageCreateUser from './pages/pageCreateUser'; // Importar a tela de criação de usuário

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEntrar = async () => {
    if (!email || !password) {
      setMensagem('Preencha os campos de email e senha.');
      return;
    }

    try {
      const response = await fetch(`http://10.0.2.2:3333/employee?email=${email}&password=${password}`, {
        method: 'GET',  // Método da requisição
        headers: {
          'Content-Type': 'application/json',  // Define o tipo de conteúdo como JSON
        },
      });

      // Verificando a resposta
      if (response.status == 200) {
        const jsonResponse = await response.json();  // Se a resposta for JSON
        const employeeName = jsonResponse.employee_name;

        setMensagem(`Login realizado com sucesso!, Bem-vindo, ${employeeName}`);
        console.log(jsonResponse);  // Apenas para verificar a resposta
      } else if (response.status == 404) {
        const errorResponse = await response.json();
        alert('O email ou senha estão incorretos');
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
        <Text style={styles.bemVindo}>Bem-vindo</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setSenha}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleEntrar}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateUser')}>
          <Text style={styles.buttonText}>CADASTRAR-SE</Text>
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
