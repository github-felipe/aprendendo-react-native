import { StyleSheet, Text, View } from "react-native";
interface VisorProps {
  conta: string;
  valor: string;
}
export function Visor({ conta, valor }: VisorProps) {
  return (
    <View style={styles.visor}>
      <Text style={styles.conta}>{conta}</Text>
      <Text style={styles.valor} numberOfLines={1} adjustsFontSizeToFit>
        {valor}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  visor: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 24,
  },
  conta: {
    color: "#94A3B8",
    fontSize: 24,
    minHeight: 32,
  },
  valor: {
    color: "#F8FAFC",
    fontSize: 64,
    fontWeight: "300",
  },
});
