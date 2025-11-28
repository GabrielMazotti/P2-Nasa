import { View, Text, Image, Linking, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.titulo}>Desenvolvedores</Text>

      <View style={styles.dev}>
        <Image
          source={require("../assets/minhaFoto.jpeg")}
          style={styles.foto}
        />
        <Text>Gabriel Oliveira do Santos Mazotti</Text>

        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://www.linkedin.com/in/gabriel-mazotti-2a40b8277/")}
        >
          LinkedIn
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  dev: {
    marginTop: 20,
    alignItems: "center",
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  link: {
    color: "blue",
  },
});
