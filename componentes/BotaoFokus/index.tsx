import { Pressable, StyleSheet, Text } from "react-native";

interface BotaoFokusProps {
  texto: string;
  onPress?: () => void;
  icon?: React.ReactNode;
}

const BotaoFokus = ({ texto, onPress, icon }: BotaoFokusProps) => {
  return (
    <Pressable style={styles.botao} onPress={onPress}>
        {icon && icon}
        <Text style={styles.botaoText}>
            {texto}
        </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#B872FF",
    padding: 8,
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  botaoText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#021123",
  }
})


export default BotaoFokus;