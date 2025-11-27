import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Busca({ busca, setBusca, buscar }) {
  return (
    <View style={styles.buscar}>
      <TextInput
        placeholder='Digite o que deseja buscar (exemplos: moon, earth etc)'
        style={styles.input}
        value={busca}
        onChangeText={setBusca}
      />

      <TouchableOpacity style={styles.botaoBuscar} onPress={buscar}>
        <Text style={{ color: "white" }}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buscar: {
    paddingHorizontal: "5%",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  botaoBuscar: {
    marginTop: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
