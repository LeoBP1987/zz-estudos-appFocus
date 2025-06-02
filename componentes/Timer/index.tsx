import { StyleSheet, Text } from "react-native";

interface TimerProps {
    totalSegundos: number;
}

const Timer = ({totalSegundos}: TimerProps) => {

    const date = new Date(totalSegundos * 1000)
    const options: Intl.DateTimeFormatOptions = { minute: "2-digit", second: "2-digit" }

    return (
        <Text style={styles.timer}>
            {date.toLocaleTimeString('pt-BR', options)}
        </Text>
    )
}

const styles = StyleSheet.create({
  timer: {
    color: "#FFF",
    fontSize: 54,
    textAlign: "center",
    fontWeight: "bold",
  }
})

export default Timer;