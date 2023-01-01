import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollView, View, Text, Image, AsyncStorage } from "react-native";
// import Button from "../../components/Button";
import { data, getData } from "../Auth/LoginScreen";

export const getDataAll = async ({ navigation }) => {
  const token = await getData("@storage_Key");
  console.log("ATA", token.user);
  return token;
};
export default UserProfile = ({ navigation }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // setUser(data);
    // console.log({ data: data });
    getData("@storage_Key").then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJEPTWyBFmA-tV5bF0QTSH2JbM1Do6TB6Zw&usqp=CAU",
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{user?.user?.username}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>{user?.user?.email}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>User From:</Text>
          <Text style={styles.infoText}>{user?.user?.created_at}</Text>
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
      {/* <Button
        onPress={() => navigation.replace("SplashScreen")}
        title={"Logout"}
      /> */}
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
