import { StyleSheet, Text } from "react-native";

interface TextoFooterProps {
    display: string;
}

const TextoFooter = ({display}: TextoFooterProps) => {
  return (
    <Text style={styles.footerText}>
        {display}
    </Text>
)
}

const styles = StyleSheet.create({
    footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  }
})

export default TextoFooter;