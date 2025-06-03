import BotaoFokus from "@/componentes/BotaoFokus";
import { IconPause, IconPlay } from "@/componentes/Icons";
import MenuItem from "@/componentes/MenuItem";
import Timer from "@/componentes/Timer";
import { useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import Footer from "@/componentes/Footer";
import ContainerPrincipal from "@/componentes/CotainerPrincipal";

const pomodoro = [
  {
    id: "focus",
    initialTime: 25 * 60,
    imagem: require("../assets/images/pomodoro.png"),
    texto: "Foco",
  },
  {
    id: "curto",
    initialTime: 5 * 60,
    imagem: require("../assets/images/curto.png"),
    texto: "Pausa curta",
  },
  {
    id: "longo",
    initialTime: 15 * 60,
    imagem: require("../assets/images/longo.png"),
    texto: "Pausa longa",
  }
]

export default function Pomodoro() {

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
    <ContainerPrincipal>
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
      <Footer />
    </ContainerPrincipal>
  );
}

const styles = StyleSheet.create({
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
  }
})