import React from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";
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
import { COLORS } from "../constants";
export const Button = ({ route, title, ...props }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    marginTop: 100,
    backgroundColor: COLORS.primary, // choose your own login button background color
    padding: 15,
    alignItems: "center",
  },
});
