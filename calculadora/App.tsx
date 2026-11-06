import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { calcular, formatar, Operador } from "./src/calcular";
import { Botao } from "./src/components/Botao";
import { Visor } from "./src/components/Visor";
const COR_OPERADOR = "#F59E0B";
const COR_LIMPAR = "#EF4444";
export default function App() {
  const [visor, setVisor] = useState("0");
  const [primeiro, setPrimeiro] = useState<number | null>(null);
  const [operador, setOperador] = useState<Operador | null>(null);
  const [novoNumero, setNovoNumero] = useState(true);
  function digitar(digito: string) {
    if (novoNumero || visor === "0") {
      setVisor(digito);
      setNovoNumero(false);
    } else {
      setVisor(visor + digito);
    }
  }
  function digitarPonto() {
    if (novoNumero) {
      setVisor("0.");
      setNovoNumero(false);
    } else if (!visor.includes(".")) {
      setVisor(visor + ".");
    }
  }
  function escolherOperador(op: Operador) {
    if (visor === "Erro") {
      return;
    }
    setPrimeiro(Number(visor));
    setOperador(op);
    setNovoNumero(true);
  }
  function igual() {
    if (primeiro === null || operador === null) {
      return;
    }
    const resultado = calcular(primeiro, Number(visor), operador);
    setVisor(formatar(resultado));
    setPrimeiro(null);
    setOperador(null);
    setNovoNumero(true);
  }
  function limpar() {
    setVisor("0");
    setPrimeiro(null);
    setOperador(null);
    setNovoNumero(true);
  }
  const conta =
    primeiro !== null && operador !== null
      ? `${formatar(primeiro)} ${operador}`
      : "";
  return (
    <View style={styles.tela}>
      <Visor conta={conta} valor={visor} />
      <View style={styles.teclado}>
        <View style={styles.linha}>
          <Botao rotulo="C" cor={COR_LIMPAR} colunas={3} aoTocar={limpar} />
          <Botao
            rotulo="/"
            cor={COR_OPERADOR}
            aoTocar={() => escolherOperador("/")}
          />
        </View>
        <View style={styles.linha}>
          <Botao rotulo="7" aoTocar={() => digitar("7")} />
          <Botao rotulo="8" aoTocar={() => digitar("8")} />
          <Botao rotulo="9" aoTocar={() => digitar("9")} />
          <Botao
            rotulo="*"
            cor={COR_OPERADOR}
            aoTocar={() => escolherOperador("*")}
          />
        </View>
        <View style={styles.linha}>
          <Botao rotulo="4" aoTocar={() => digitar("4")} />
          <Botao rotulo="5" aoTocar={() => digitar("5")} />
          <Botao rotulo="6" aoTocar={() => digitar("6")} />
          <Botao
            rotulo="-"
            cor={COR_OPERADOR}
            aoTocar={() => escolherOperador("-")}
          />
        </View>
        <View style={styles.linha}>
          <Botao rotulo="1" aoTocar={() => digitar("1")} />
          <Botao rotulo="2" aoTocar={() => digitar("2")} />
          <Botao rotulo="3" aoTocar={() => digitar("3")} />
          <Botao
            rotulo="+"
            cor={COR_OPERADOR}
            aoTocar={() => escolherOperador("+")}
          />
        </View>
        <View style={styles.linha}>
          <Botao rotulo="0" colunas={2} aoTocar={() => digitar("0")} />
          <Botao rotulo="." aoTocar={digitarPonto} />
          <Botao rotulo="=" cor={COR_OPERADOR} aoTocar={igual} />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 16,
    paddingTop: 56,
  },
  teclado: {
    gap: 12,
  },
  linha: {
    flexDirection: "row",
    gap: 12,
  },
});
