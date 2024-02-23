import { StyleSheet, Text, View } from "react-native";
import Main from "./src/navigation/Main";


export default function App() {
  return <Main />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
});
