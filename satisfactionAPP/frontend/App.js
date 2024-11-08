// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Inatel from "./assets/inatel.png";
import Lupa from "./assets/lupa.png";
import PageAdminPerguntas from './pages/pageAdminPerguntas';
import PageAdminRespostas from './pages/pageAdminRespostas';
import PageCreatePergunta from './pages/pageCreatePergunta';
import PageCreateUser from './pages/pageCreateUser';
import PageEditPesquisa from './pages/PageEditPesquisa';
import PagePesquisaAdminRespostas from './pages/pagePesquisaAdminRespostas';
import PagePesquisaUser from './pages/pagePesquisaUser';
import PagePesquisaUserEdit from './pages/pagePesquisaUserEdit';
import PageRespondeUser from './pages/pageRespondeUser'; // Importe a nova tela

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
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status == 200) {
        const jsonResponse = await response.json();
        const employeeName = jsonResponse.employee_name;
        const employeeType = jsonResponse.employee_type;
        const employeeId = jsonResponse.employee_id;

        setMensagem(`Login realizado com sucesso!, Bem-vindo, ${employeeName}`);
        if (employeeType === 'admin') {
          navigation.navigate('PageAdminPerguntas', { employeeId });
        } else if (employeeType === 'user') {
          navigation.navigate('PagePesquisaUser', { employeeId });
        }
      } else if (response.status == 404) {
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
      <Text style={styles.satisfactionapp}>CAPTALIS</Text>

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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateUser" component={PageCreateUser} options={{ title: 'Criar Usuário' }} />
        <Stack.Screen name="PageAdminPerguntas" component={PageAdminPerguntas} options={{ title: 'Page Admin Perguntas' }} />
        <Stack.Screen name="PagePesquisaUser" component={PagePesquisaUser} options={{ title: 'Pesquisa de Usuário' }} />
        <Stack.Screen name="PageCreatePergunta" component={PageCreatePergunta} options={{ title: 'Criar Pesquisa' }} />
        <Stack.Screen name="pageRespondeUser" component={PageRespondeUser} options={{ title: 'Responda à Pesquisa' }} />
        <Stack.Screen name="PageEditPesquisa" component={PageEditPesquisa} options={{ title: 'Edite à Pesquisa' }} />
        <Stack.Screen name="PagePesquisaUserEdit" component={PagePesquisaUserEdit} options={{ title: 'Pesquisa de Usuário' }} />
        <Stack.Screen name="PagePesquisaAdminRespostas" component={PagePesquisaAdminRespostas} options={{ title: 'Pesquisa de Usuário' }} />
        <Stack.Screen name="PageAdminRespostas" component={PageAdminRespostas} options={{ title: 'Pagina do admin' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  androidLarge1: {
    backgroundColor: '#D8DAD6',
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
    fontFamily: 'Cursive',
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
    backgroundColor: '#004aad',
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
