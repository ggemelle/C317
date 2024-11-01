import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Inatel from "../assets/inatel.png";
import Lupa from "../assets/lupa.png";

const PagePesquisaUserEdit = ({ route }) => {
  const { employeeId } = route.params;
  const navigation = useNavigation();

  const [pesquisas, setPesquisas] = useState([]);

  useEffect(() => {
    const fetchPesquisas = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:3333/researches?employee_id=${employeeId}`);
        if (response.ok) {
          const data = await response.json();
          setPesquisas(data); // Substitui pesquisas com o retorno da API
        } else {
          console.error('Erro ao buscar pesquisas:', response.status);
        }
      } catch (error) {
        console.error('Erro ao conectar à API:', error);
      }
    };

    fetchPesquisas();
  }, [employeeId]);

  const formatarData = (data) => {
    const dataObj = new Date(data);
    return `${dataObj.getDate().toString().padStart(2, '0')}/${
      (dataObj.getMonth() + 1).toString().padStart(2, '0')
    }/${dataObj.getFullYear()}`;
  };

  const handlePesquisaSelecionada = (research_id) => {

    console.log(`Pesquisa selecionada: ${research_id}`);
    navigation.navigate('PageEditPesquisa', {employeeId, research_id });
  };

  const renderPesquisaItem = ({ item }) => (
    <TouchableOpacity
      style={styles.pesquisaItem}
      onPress={() => handlePesquisaSelecionada(item.research_id)}
    >
      <Text style={styles.pesquisaText}>{item.research_name}</Text>
      <Text style={styles.pesquisaDate}>Data: {formatarData(item.research_date)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.androidLarge1}>
      <Image style={styles.magnifyingGlassElementBackIcon} resizeMode="contain" source={Lupa} />
      <Text style={styles.satisfactionapp}>CAPTALIS</Text>

      <Text style={styles.pesquisasDisponiveis}>Pesquisas disponíveis</Text>

      <FlatList
        data={pesquisas}
        renderItem={renderPesquisaItem}
        keyExtractor={(item) => item.research_id.toString()}
        contentContainerStyle={styles.pesquisaList}
      />

      <Image style={styles.images1Icon} resizeMode="cover" source={Inatel} />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLarge1: {
    backgroundColor: '#D8DAD6',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    height: 80,
    width: 300,
    backgroundColor: '#004aad',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  magnifyingGlassElementBackIcon: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  pesquisaText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Inter-Regular',
  },
  pesquisaDate: {
    fontSize: 14,
    color: '#e0e0e0',
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

export default PagePesquisaUserEdit;
