import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from "react-native";
import { COLORS } from "../../constants";
import { baseURL } from "../const";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [finalresponse, setResponse] = useState([]);

  const postUser = async () => {
    const response = await fetch(`${baseURL}/auth/local/register`, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        email: email,
        password: password,
      }),
    });
    const json = await response.json();

    setResponse(json);
    // navigation.navigate("RegisterScreen");
  };
  function onRegister() {
    console.log({ finalresponse: finalresponse.error, finalresponse });

    postUser();
  }
  if (finalresponse?.error) {
    return Alert.alert("Error Log", "Please enter valid credentials!", [
      {
        text: "Cancel",
        onPress: () => navigation.replace("RegisterScreen"),
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.replace("RegisterScreen") },
    ]);
  } else if (finalresponse?.jwt) {
    return Alert.alert("Congratulation:", "User is register successfully!", [
      {
        text: "Cancel",
        onPress: () => navigation.replace("LoginScreen"),
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.replace("LoginScreen") },
    ]);
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar />

      <View style={styles.logoContainer}>
        <Image source={require("../../assets/intro.png")} style={styles.logo} />
        <Text style={styles.title1}>Welcome</Text>
        <Text style={styles.title}>Please Register Yourself here!</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Text style={styles.linkText}>Already an account? Login!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onRegister} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // choose your own login screen background color
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  linkText: {
    fontSize: 10,
    alignSelf: "center",
    // fontWeight: "bold",
    color: COLORS.primary, // choose your own login screen text color
    // marginTop: 10,
  },
  logo: {
    marginVertical: 20,
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 18,
    // fontWeight: "bold",
    color: "#000000", // choose your own login screen text color
    marginTop: 10,
  },
  title1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000", // choose your own login screen text color
    marginTop: 10,
  },
  formContainer: {
    padding: 20,
  },
  input: {
    color: COLORS.darkgray,
    borderWidth: StyleSheet.hairlineWidth,
    height: 45,
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
    borderColor: COLORS.primary,
    marginVertical: 10, // choose your own input field text color
  },
  button: {
    borderRadius: 12,
    marginTop: 80,
    backgroundColor: COLORS.primary, // choose your own login button background color
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff", // choose your own login button text color
  },
});
