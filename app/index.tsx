import BotaoFokus from "@/componentes/BotaoFokus";
import { IconPause, IconPlay } from "@/componentes/Icons";
import MenuItem from "@/componentes/MenuItem";
import TextoFooter from "@/componentes/TextoFooter";
import Timer from "@/componentes/Timer";
import { useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

const pomodoro = [
  {
    id: "focus",
    initialTime: 25 * 60,
    imagem: require("./pomodoro.png"),
    texto: "Foco",
  },
  {
    id: "curto",
    initialTime: 5 * 60,
    imagem: require("./curto.png"),
    texto: "Pausa curta",
  },
  {
    id: "longo",
    initialTime: 15 * 60,
    imagem: require("./longo.png"),
    texto: "Pausa longa",
  }
]

export default function Index() {

  const [context, setContext] = useState(pomodoro[0]);
  const timerRef = useRef<number | null>(null);
  const [timeRunning, setTimeRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].initialTime);

  const clear = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimeRunning(false);
    }
  }

  const toogleTimer = () => {
    if (timerRef.current) {
      clear();
      return
    }
    const id = setInterval(() => {
      setTimeRunning(true);
      setSeconds(prev => {
        if (prev === 0) {
            alert("Cronometro Finalizado!");
            setSeconds(context.initialTime);
            clear();
          }
        return prev - 1;
      });
    }, 1000);
    timerRef.current = id;
  }

  const toogleContext = (
    newContext: { id: string; initialTime: number; imagem: any; texto: string; }
      ) => {
        setContext(newContext);
        setSeconds(newContext.initialTime);
        clear();
      };

  return (
    <View
      style={styles.container}
    >
      <Image source={context.imagem} />
      <View style={styles.action}> 
        <View style={styles.context}>
          {pomodoro.map(item => (
            <MenuItem 
              key={item.id}
              ativo={context.id === item.id}
              onPress={() => toogleContext(item)}
              display={item.texto}
            />
          ))}
        </View>
        <Timer totalSegundos={seconds} />
        <BotaoFokus texto={timeRunning ? "Pausar" : "Começar"} icon={timeRunning ? <IconPlay /> : <IconPause /> } onPress={() => toogleTimer()} />
      </View>
      <View style={styles.footer} >
        <TextoFooter display="Projeto fictício e sem fins comerciais." />
        <TextoFooter display="Desenvolvido por Alura." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  action: {
    backgroundColor: "#14448080",
    width: "80%",
    padding: 24,
    borderWidth: 2,
    borderColor: "#144480",
    borderRadius: 32,
    gap: 32
  },
  context:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  footer: {
    width: "80%",
  }
})
