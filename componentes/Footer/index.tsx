import { StyleSheet, View } from "react-native";
import TextoFooter from "./TextoFooter";

const Footer = () => {
  return (
    <View style={styles.footer} >
        <TextoFooter display="Projeto fictício e sem fins comerciais." />
        <TextoFooter display="Desenvolvido por Alura." />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "80%",
  }
})

export default Footer;