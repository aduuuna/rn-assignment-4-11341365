import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const Frame = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <FontAwesome
          style={styles.Vector1}
          name="circle"
          size={51}
          color="#E74D89"
        />
        <FontAwesome5
          style={styles.vector2}
          name="basketball-ball"
          size={44}
          color="#B2215A"
        />
      </TouchableOpacity>
      <Text style={styles.App}>myDev App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fffdd0",
    padding: 30,
    width: "100%",
    height: "100%",
  },
  Vector1: {
    marginTop: 50,
  },
  vector2: {
    top: -49,
  },
  App: {
    fontSize: 12,
    top: -40,
    color: "black",
    fontStyle: "italic",
    letterSpacing: 2,
  },
});

export default Frame;
