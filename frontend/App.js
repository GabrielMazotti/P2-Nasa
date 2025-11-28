import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, FlatList, Linking} from "react-native";
import { useState } from 'react';
import Header from "./components/Header";
import FotosDoDia from "./components/FotosDia";
import Busca from "./components/Busca";
import FiltroAno from "./components/FiltrosAno";
import Fotos from "./components/Fotos";
import Footer from "./components/Footer";


export default function App() {

  const [busca, setBusca] = useState('')
  const [fotos, setFotos] = useState([])
  const [historicoFotosDiaAtual, setHistoricoFotosDiaAtual] = useState([])
  const anoAtual = new Date().getFullYear();



  const buscar = async () => {
    if (busca === '') return
    const resposta = await fetch(`http://localhost:3000/search?termo=${busca}`)
    const dados = await resposta.json()
    const resultados = dados.items || []
    setFotos(resultados)
  }

  const buscarAno = async (ano) => {
    const resposta = await fetch(`http://localhost:3000/search-year?ano=${ano}`)
    const dados = await resposta.json()

    const resultados = dados.items || []
    setFotos(resultados)

  }




  return (
    <ScrollView style={styles.main}>

      <View style={styles.main}>

        <Header />

        <FotosDoDia fotos={historicoFotosDiaAtual} />

        <Busca busca={busca} setBusca={setBusca} buscar={buscar} />

        <FiltroAno anoAtual={anoAtual} buscarAno={buscarAno} />

        <Fotos fotos={fotos} />

        <Footer />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  }
});
