import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function FotosDoDia({ historicoFotosDia, formatarData }) {
  return (
    <>

      <Text style={styles.fotosDiaTitulo}>Fotos do Dia</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollFotosDia}
      >
        {historicoFotosDia.map((item, i) => (
          <View key={i} style={styles.cardFotosDia}>
            <Image
              source={{ uri: item.imagem }}
              style={styles.cardImagem}
            />
            <Text style={styles.cardLabel}>{formatarData(item.data)}</Text>
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
    height: "83%",
    width: "100%",
    borderRadius: 10,
  },
  cardLabel: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
  },
});
