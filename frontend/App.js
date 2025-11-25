import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Button } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.main}>

      <View style={styles.main}>

        {/* HEADER */}
        <View style={styles.header}>
          <Image
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" }}
            style={styles.logo}
          />
          <Text style={styles.headerTitulo}>NASA Explorer</Text>
        </View>

        <Text style={styles.sectionTitulo}>Fotos do Dia</Text>

        {/* FOTOS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollFotos}
        >
          {[1, 2, 3].map((i) => (
            <View key={i} style={styles.cardFotosDia}>
              <Image
                source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
                style={styles.cardImagem}
              />
              <Text style={styles.cardLabel}>Foto {i}</Text>
            </View>
          ))}
        </ScrollView>

        {/* BUSCA */}
        <View style={styles.buscar}>
          <TextInput
            placeholder="Digite o que deseja buscar"
            style={{ borderWidth: 1, padding: 10, marginTop: 20 }}
          />

           <TouchableOpacity style={styles.botaoBuscar}>
            <Text style={{color:"white"}}>Buscar</Text>
          </TouchableOpacity>
        </View>

        {/* FILTROS */}
        <View style={styles.filtro}>
          <View style={styles.botoesAno}>
            {["2020", "2021", "2022", "2023", "2024"].map((ano) => (
              <TouchableOpacity key={ano} style={styles.botaoAno}>
                <Text style={styles.filtroAnoTexto}>{ano}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.botaoAnoAtual}>
            <Text style={{textAlign:"center"}}>2025</Text>
          </TouchableOpacity>
        </View>

        {/* DETALHES DAS FOTOS */}
        <View style={styles.fotos}>
         <View style={styles.cardFotos}>
            <Text style={styles.titulo}>Titulo</Text>
              <Image
                source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
                style={{ width: 150, height: 100, borderRadius: 10 }}
              />
              <Text style={styles.titulo}>Descricao</Text>
            </View>
              <View style={styles.cardFotos}>
            <Text style={styles.titulo}>Titulo</Text>
              <Image
                source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
                style={{ width: 150, height: 300, borderRadius: 10 }}
              />
              <Text style={styles.titulo}>Descricao</Text>
            </View>
          </View>

        {/* DESENVOLVEDORES */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign:"center"}}>Desenvolvedores</Text>

          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
            <Text>Gabriel Oliveira do Santos Mazzoti</Text>
            <Text style={{ color: "blue" }} onPress={() => Linking.openURL("https://linkedin.com")}>
              LinkedIn
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  /* HEADER */
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1a1a",
    paddingVertical: 15,
  },
  logo: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  headerTitulo: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  /* SEÇÕES */
  sectionTitulo: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginLeft: "5%",
  },

  /* FOTOS DO DIA */
  scrollFotos: {
    marginTop: 15,
    paddingLeft: "5%",
  },
  cardFotosDia: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    width: 220,
    height: 270,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  cardImagem: {
    height: "70%",
    width: "100%",
    borderRadius: 10,
  },
  cardLabel: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
  },


  /* BUSCA */
  buscar: {
    paddingHorizontal: "5%",
    marginTop: 20,
  },
  botaoBuscar: {
    marginTop: 10,
    backgroundColor: "#007bff",
    color: "white",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  /* FILTROS */
  filtro: {
    marginTop: 20,
    paddingHorizontal: "5%",
    paddingBottom: 40,
    alignItems: "center",
    width: "100%",
  },

  botoesAno: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 15,
    width: "100%",
  },

  botaoAno: {
    width: "15%",
    padding: 12,
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    alignItems: "center",
  },

  anoText: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },

  botaoAnoAtual: {
    width: "100%",
    backgroundColor: "#e6e6e6",
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    textAlign: "center",
    justifyContent: "center"
  },

  /* FOTOS*/
  fotos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  cardFotos: {
    marginBottom: 40,
    alignItems: 'center'
  },
   titulo: {
    marginTop: 10,
    fontSize: 16,
    width: 300,
    textAlign: "center"
  }
});
