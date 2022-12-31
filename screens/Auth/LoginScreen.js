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
  StyleSheet,
  AsyncStorage,
} from "react-native";
import { COLORS } from "../../constants";
export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
    return value;
  } catch (e) {
    return e;
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return e;
  }
};
export var data = getData("@storage_Key");
export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [finalresponse, setResponse] = useState([]);
  const postUser = async () => {
    const response = await fetch("http://192.168.43.186:1337/auth/local", {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });
    const json = await response.json();
    const data = await storeData(json);

    const token = await getData("@storage_Key");

    setResponse(json);
    navigation.replace("Home");
  };
  function onLogin() {
    postUser();
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/intro.png")} // replace with your own logo image file
          style={styles.logo}
        />
        <Text style={styles.title1}>Welcome</Text>
        <Text style={styles.title}>Please login here!</Text>
      </View>
      <View style={styles.formContainer}>
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
            navigation.navigate("RegisterScreen");
          }}
        >
          <Text style={styles.linkText}>Don't have an account? Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onLogin} style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
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
    marginTop: 80,
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
    color: COLORS.primary, // choose your own login screen text color
    marginTop: 10,
  },
  linkText: {
    fontSize: 10,
    alignSelf: "center",
    // fontWeight: "bold",
    color: COLORS.primary, // choose your own login screen text color
    // marginTop: 10,
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
