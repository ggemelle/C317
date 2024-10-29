import { useNavigation } from '@react-navigation/native'; // Importando hook de navegação
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Inatel from "../assets/inatel.png";
import Lupa from "../assets/lupa.png";

const PagePesquisaUser = () => {
  const { width } = Dimensions.get('window');
  const navigation = useNavigation(); // Hook de navegação

  // Lista de pesquisas disponíveis
  const [pesquisas, setPesquisas] = useState([
    { id: '1', nome: 'PESQUISA 1', peso: 20 },
    { id: '2', nome: 'PESQUISA 2', peso: 10 },
    { id: '3', nome: 'PESQUISA 3', peso: 20 },
    { id: '4', nome: 'PESQUISA 4', peso: 50 },
  ]);

  const handlePesquisaSelecionada = (id) => {
    console.log(`Pesquisa selecionada: ${id}`);
    // Navegar para a página "pageRespondeUser" passando o ID da pesquisa como parâmetro
    navigation.navigate('pageRespondeUser', { pesquisaId: id });
  };

  // Função que renderiza cada item da lista de pesquisas
  const renderPesquisaItem = ({ item }) => (
    <TouchableOpacity
      style={styles.pesquisaItem}
      onPress={() => handlePesquisaSelecionada(item.id)}
    >
      <Text style={styles.pesquisaText}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.androidLarge1}>
      <Image style={styles.magnifyingGlassElementBackIcon} resizeMode="contain" source={Lupa} />
      <Text style={[styles.satisfactionapp]}>
        CAPTALIS
      </Text>

      <Text style={[styles.pesquisasDisponiveis]}>
        Pesquisas disponíveis
      </Text>

      <FlatList
        data={pesquisas}
        renderItem={renderPesquisaItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.pesquisaList}
      />

      <Image
        style={styles.images1Icon}
        resizeMode="cover"
        source={Inatel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLarge1: {
    backgroundColor: '#D8DAD6',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center', // Alinhando ao centro
    justifyContent: 'flex-start', // Conteúdo começa no topo
    paddingTop: 20,
  },
  pesquisasDisponiveis: {
    fontFamily: 'Inter-Regular',
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    marginTop: 20,
  },
  pesquisaList: {
    paddingHorizontal: 20,
  },
  pesquisaItem: {
    height: 65,
    width: 300,
    backgroundColor: '#004aad',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  magnifyingGlassElementBackIcon: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  pesquisaText: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Inter-Regular',
  },
  images1Icon: {
    width: 187,
    height: 52,
    marginTop: 30,
  },
  satisfactionapp: {
    fontSize: 40,
    color: '#fff',
    fontFamily: 'Inter-Regular',
    marginBottom: 30,
  },
});

export default PagePesquisaUser;
