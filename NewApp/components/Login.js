import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const Login = ({ navigation }, name, email) => {
  return (
    <View style={styles.LoginContainer}>
      <View style={styles.TextContainer}>
        <Text style={styles.Text1}>Jobizz</Text>
        <Text style={styles.Text2}>Welcome Back 👋</Text>
        <Text style={styles.Text3}>Let's log in. Apply to jobs!</Text>
      </View>
      <View style={styles.TextInputContainer}>
        <TextInput style={styles.TextInput1} placeholder="Name" />
        <TextInput style={styles.TextInput1} placeholder="Email" />
        <TouchableOpacity>
          <View style={styles.buttonView}>
            <Text style={styles.Text4}>Log in</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.LastContainer}>
        <View style={styles.viewLine}>
          <View style={styles.horizontalLine}></View>
          <Text style={styles.Text5}>Or continue with</Text>
          <View style={styles.horizontalLine}></View>
        </View>
        <View style={styles.iconsBox}>
          <TouchableOpacity>
            <FontAwesome
              style={styles.appleIcon}
              name="apple"
              size={32}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.googleIcon}
              source={require("../assets/google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5
              style={styles.facebookIcon}
              name="facebook"
              size={29}
              color="#356899"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.EnquiryText}>
          <Text style={styles.Text6}>Haven't an account?</Text>
          <TouchableOpacity>
            <Text style={styles.Text7}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginContainer: {
    display: "flex",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  TextContainer: {
    height: 100,
    width: 200,
    justifyContent: "space-evenly",
  },
  Text1: {
    color: "#356899",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 33,
    letterSpacing: 1,
  },
  Text2: {
    color: "#0d0d26",
    fontWeight: "900",
    fontSize: 24,
    lineHeight: 33.9,
    top: -10,
  },
  Text3: {
    fontFamily: "sans-serif",
    fontSize: 14,
    fontWeight: "100",
    opacity: 0.4,
    top: -10,
  },
  TextInputContainer: {
    height: 190,
    width: 320,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  TextInput1: {
    width: 300,
    borderWidth: 1,
    borderColor: "#AFB0B6",
    height: 45,
    paddingLeft: 20,
    borderRadius: 10,
  },
  buttonView: {
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "#356899",
  },
  Text4: {
    textAlign: "center",
    fontWeight: "900",
    color: "white",
    opacity: 0.8,
    fontSize: 16,
  },
  LastContainer: {
    height: 340,
    width: 320,
    alignItems: "center",
    marginTop: 20,
  },
  horizontalLine: {
    width: 80,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    marginVertical: 10,
  },
  viewLine: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  Text5: {
    fontSize: 13,
    TextAlign: "center",
    color: "black",
    marginRight: 20,
    marginLeft: 20,
    opacity: 0.4,
  },
  iconsBox: {
    width: 220,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  appleIcon: {
    alignSelf: "center",

    top: 3,
  },
  facebookIcon: {
    alignSelf: "center",
    top: 3,
  },
  googleIcon: {
    height: 31,
    width: 26,
    alignSelf: "center",
    top: 3,
  },
  EnquiryText: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  Text6: {
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.4,
  },
  Text7: {
    marginLeft: 10,
    color: "#356899",
    fontWeight: "700",
    fontSize: 14,
  },
});

export default Login;
