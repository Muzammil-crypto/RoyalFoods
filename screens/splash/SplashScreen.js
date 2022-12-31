import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { COLORS } from "../../constants";

export const SplashScreen = ({ navigation }) => {
  return (
    <ImageBackground
      imageStyle={{
        opacity: 0.777,
        backgroundColor: "black",
      }}
      style={{
        height: "100%",
        justifyContent: "center",
        // marginVertical: 50,
      }}
      source={{
        uri: "https://i.pinimg.com/originals/f4/6d/ac/f46dac364207e409b17506fc4543bc0e.jpg",
      }}
    >
      <StatusBar />

      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <View style={styles.formContainer}>
            <Image
              source={require("../../assets/intro.png")}
              style={styles.logo}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.replace("RegisterScreen")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Continue </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: COLORS.white, // choose your own login screen background color
    // margin: 10,
    borderRadius: 18,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 170,
  },
  logo: {
    flex: 1,
    width: 300,
    height: 300,
    // alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white, // choose your own login screen text color
    marginTop: 10,
  },
  formContainer: {
    padding: 20,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    backgroundColor: "#dddddd", // choose your own input field background color
    marginBottom: 10,
    padding: 10,
    color: "#000000", // choose your own input field text color
  },
  button: {
    backgroundColor: COLORS.primary, // choose your own login button background color
    padding: 15,
    margin: 15,
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff", // choose your own login button text color
  },
});
