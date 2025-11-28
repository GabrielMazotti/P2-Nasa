import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export default function ListaFotos({ fotos }) {
  return (
    <FlatList
      data={fotos}
      scrollEnabled={false}
      style={{ width: '100%' }}
      contentContainerStyle={styles.container}
      keyExtractor={(item, index) => item.data?.[0]?.nasa_id || index.toString()}
      renderItem={({ item }) => {
        const imagem = item.links ? item.links[0].href : null;
        if (!imagem) return null;

        return (
          <View style={styles.cardFotos}>
            <Text style={styles.titulo}>{item.data[0].title}</Text>

            <Image
              source={{ uri: imagem }}
              style={{ width: 300, height: 300, borderRadius: 10 }}
            />

            {item.data[0].description && (
              <Text style={styles.titulo}>{item.data[0].description}</Text>
            )}
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: "wrap",
    padding: 20,
    gap: 20,
  },
  cardFotos: {
    marginBottom: 20,
    alignItems: 'center',
  },
  titulo: {
    marginTop: 10,
    fontSize: 16,
    width: 300,
    textAlign: "center",
  },
});
