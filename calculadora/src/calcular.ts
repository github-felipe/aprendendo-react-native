export type Operador = "+" | "-" | "*" | "/";
export function calcular(a: number, b: number, operador: Operador): number {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
export function formatar(valor: number): string {
  if (!Number.isFinite(valor)) {
    return "Erro";
  }
  return String(Number(valor.toFixed(10)));
}
