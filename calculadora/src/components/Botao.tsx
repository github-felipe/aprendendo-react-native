import { Pressable, StyleSheet, Text } from "react-native";
interface BotaoProps {
  rotulo: string;
  aoTocar: () => void;
  cor?: string;
  colunas?: number;
}
export function Botao({
  rotulo,
  aoTocar,
  cor = "#334155",
  colunas = 1,
}: BotaoProps) {
  return (
    <Pressable
      onPress={aoTocar}
      style={({ pressed }) => [
        styles.botao,
        { flex: colunas, backgroundColor: cor, opacity: pressed ? 0.6 : 1 },
      ]}
    >
      <Text style={styles.rotulo}>{rotulo}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  botao: {
    height: 72,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  rotulo: {
    color: "#F8FAFC",
    fontSize: 28,
  },
});
