import BotaoFokus from "@/componentes/BotaoFokus";
import ContainerPrincipal from "@/componentes/CotainerPrincipal";
import Footer from "@/componentes/Footer";
import { Link, router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ContainerPrincipal>
      <Image source={require('../assets/images/logo.png')} />
      <View style={styles.mainInicio}>
        <Text style={styles.textoInicio}>Otimize sua{'\n'} produtividade,{'\n'} <Text style={{ fontWeight: "bold" }}>mergulhe no que{'\n'} importa</Text></Text>
        <Image source={require('../assets/images/inicio.png')} style={styles.imageInicio} />
        <Link href={{pathname: './pomodoro'}} style={styles.link}>
          <Text style={styles.linkText}>Quero Iniciar!</Text>
        </Link>   
      </View>
      <Footer />
    </ContainerPrincipal>
  )
}

const styles = StyleSheet.create({
  mainInicio: {
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
  imageInicio: {
    width: 317,
    height: 266,
  },
  textoInicio: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 30,
    lineHeight: 39,
  },
  link: {
    width: "80%",
    backgroundColor: "#B872FF",
    padding: 8,
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  linkText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#021123",
  }
});