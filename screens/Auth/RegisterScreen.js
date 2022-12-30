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
} from "react-native";
import { COLORS } from "../../constants";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.container}>
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
          placeholder="Name"
          onChangeText={(text) => setEmail(text)}
          value={email}
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
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.button}
        >
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
