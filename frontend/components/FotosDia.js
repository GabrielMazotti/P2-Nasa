import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function FotosDoDia({ fotos }) {
  return (
    <>
      <Text style={styles.fotosDiaTitulo}>Fotos do Dia</Text>
      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.fotosDiaTitulo}
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
    </>
  );
}

const styles = StyleSheet.create({
  fotosDiaTitulo: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginLeft: "5%",
  },
  scrollFotosDia: {
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
});
