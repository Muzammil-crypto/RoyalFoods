import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  AsyncStorage,
} from "react-native";
import { data } from "../Auth/LoginScreen";
import { getData, storeData } from "../Auth/LoginScreen";
// export const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem("@storage_Key");
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     return e;
//   }
// };
export const getDataAll = async () => {
  const token = await getData("@storage_Key");
  console.log(token);
  return token;
};
export default UserProfile = ({ navigation }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getDataAll().then((data) => setUser(data));
  }, []);
  console.log({ user: user.user.email });
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJEPTWyBFmA-tV5bF0QTSH2JbM1Do6TB6Zw&usqp=CAU",
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{user.user.username}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>{user.user.email}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoText}>(123) 456-7890</Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.bioText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = {
  headerContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  headerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
  infoText: {
    fontSize: 16,
    marginLeft: 8,
  },
  bioText: {
    fontSize: 16,
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
};