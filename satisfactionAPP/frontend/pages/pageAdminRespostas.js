import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Inatel from "../assets/inatel.png";

const PageAdminRespostas = () => {
  // Simulação de dados de respostas de pesquisas
  const respostasPesquisas = [
    { id: '1', pesquisa: 'PESQUISA 1', resposta: 'Resposta da pesquisa 1' },
    { id: '2', pesquisa: 'PESQUISA 2', resposta: 'Resposta da pesquisa 2' },
    { id: '3', pesquisa: 'PESQUISA 3', resposta: 'Resposta da pesquisa 3' },
    { id: '4', pesquisa: 'PESQUISA 4', resposta: 'Resposta da pesquisa 4' },
  ];

  // Função para renderizar cada item da lista de respostas
  const renderItem = ({ item }) => (
    <View style={styles.pesquisaContainer}>
      <Text style={styles.pesquisaNome}>{item.pesquisa}</Text>
      <Text style={styles.pesquisaResposta}>{item.resposta}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.satisfactionapp}>SatisfactionAPP</Text>
      <Text style={styles.verResultadoDe}>Ver resultado de pesquisas disponíveis</Text>

      <FlatList
        data={respostasPesquisas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaContainer}
      />

      <Image style={styles.images1Icon} source={Inatel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8DAD6',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    paddingTop: 20, // Margem superior
  },
  satisfactionapp: {
    fontSize: 42,
    fontFamily: 'Inspiration-Regular',
    color: '#fff',
    marginBottom: 20, // Margem inferior
  },
  verResultadoDe: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    marginBottom: 20, // Margem inferior
  },
  listaContainer: {
    paddingHorizontal: 20,
    flexGrow: 1, // Faz com que a lista ocupe o espaço disponível
  },
  pesquisaContainer: {
    backgroundColor: '#3d3838',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  pesquisaNome: {
    fontSize: 18,
    fontFamily: 'Inter-Black',
    color: '#fff',
  },
  pesquisaResposta: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    marginTop: 5, // Espaço entre o nome e a resposta
  },
  images1Icon: {
    width: 140,
    height: 40,
    marginBottom: 20, // Margem inferior para afastar da parte inferior
  },
});

export default PageAdminRespostas;
