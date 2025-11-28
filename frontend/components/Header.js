import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/NASA_logo.svg')}
        style={styles.logo}
      />
      <Text style={styles.headerTitulo}>NASA Explorer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
