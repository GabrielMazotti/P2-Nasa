import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, FlatList, Linking } from "react-native"
import { useState, useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import Header from "./components/Header"
import FotosDoDia from "./components/FotosDia"
import Busca from "./components/Busca"
import FiltroAno from "./components/FiltrosAno"
import Fotos from "./components/Fotos"
import Footer from "./components/Footer"


export default function App() {

  const [busca, setBusca] = useState('')
  const [fotos, setFotos] = useState([])
  const [historicoFotosDia, setHistoricoFotosDia] = useState([])
  const anoAtual = new Date().getFullYear()

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


  const gerarDataHoje = () => {
  const hoje = new Date()
  const ano = hoje.getFullYear()
  const mes = String(hoje.getMonth() + 1).padStart(2, "0")
  const dia = String(hoje.getDate()).padStart(2, "0")

  return `${ano}-${mes}-${dia}`
}

const formatarData = (data) => { 
  const partes = data.split("-") 
  const ano = partes[0] 
  const mes = partes[1] 
  const dia = partes[2] 
  return dia + "/" + mes + "/" + ano 
}


const buscarFotoDoDia = async () => {
  
  const dataHoje = gerarDataHoje()

  const salvo = await AsyncStorage.getItem("historico_apod")
  let historico = salvo ? JSON.parse(salvo) : []

 
  const existe = historico.find(item => item.data === dataHoje)
  if (!existe) {
    const resposta = await fetch(`http://localhost:3000/apod?date=${dataHoje}`)
    const dado = await resposta.json()

    historico.push({
      data: dataHoje,
      titulo: dado.title,
      descricao: dado.explanation,
      imagem: dado.url
    })

    
    await AsyncStorage.setItem("historico_apod", JSON.stringify(historico))
  }

  
  historico.sort((a, b) => new Date(b.data) - new Date(a.data))

  setHistoricoFotosDia(historico)
}

useEffect(() => {
  buscarFotoDoDia()
}, [])




  return (
    <ScrollView style={styles.main}>

      <View style={styles.main}>

        <Header />
       
        <FotosDoDia historicoFotosDia={historicoFotosDia} formatarData={formatarData} />

        <Busca busca={busca} setBusca={setBusca} buscar={buscar} />

        <FiltroAno anoAtual={anoAtual} buscarAno={buscarAno} />

        <Fotos fotos={fotos} />

        <Footer />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  }
})
