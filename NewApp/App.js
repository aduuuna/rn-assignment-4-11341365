import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Login from "./components/Login";
import Home from "./components/Home";
import Frame from "./components/Frame";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginTop: 30,
    justifyContent: "space-evenly",
  },
});
