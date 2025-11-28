import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function FiltroAno({ anoAtual, buscarAno }) {
  return (
    <View style={styles.filtro}>
      <View style={styles.botoesAno}>
        {["2020", "2021", "2022", "2023", "2024"].map((ano) => (
          <TouchableOpacity key={ano} style={styles.botaoAno} onPress={() => buscarAno(ano)}>
            <Text style={{ color: "white" }}>{ano}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.botaoAnoAtual} onPress={() => buscarAno(anoAtual)}>
        <Text style={{ textAlign: "center", color: "white" }}>{anoAtual}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  filtro: {
    marginTop: 20,
    paddingHorizontal: "5%",
    paddingBottom: 10,
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
    backgroundColor: "#007bff",
    borderRadius: 10,
    alignItems: "center",
  },
  botaoAnoAtual: {
    width: "100%",
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },
});
