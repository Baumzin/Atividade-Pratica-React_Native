import { StyleSheet, View } from "react-native";
import Title from "./src/components/Title";
import FormIMC from "./src/components/FormIMC";

//App.js serve para a estrutura geral do Aplicativo, por isso só importamos o que é necessário para
//a estilização e a visibilidade do que estivermos fazendo em outros arquivos

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffea',
  },
});
