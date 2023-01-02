import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
// import { TextInput } from "react-native-paper";

import { icons, SIZES, COLORS, FONTS } from "../constants";
import { baseURL } from "./const";

const Home = ({ navigation }) => {
  const location = {
    latitude: 1.5573478487252896,
    longitude: 110.35568783282145,
  };
  const [isLoading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantLocation, setRestaurantLocation] = useState(location);
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [searchText, setSearchText] = React.useState("");
  // CATEGORY API Calling Here

  const getCategories = async () => {
    try {
      const response = await fetch(`${baseURL}/categories`);
      const json = await response.json();

      setCategoryData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategories();
    // getRestaurents();
  }, []);

  const getRestaurents = async ({ categoryId, text }) => {
    let url;
    if (categoryId) {
      url = `${baseURL}/restaurants?categories_eq=${categoryId}`;
    }
    if (!categoryId && text) {
      url = `${baseURL}/restaurants?title_contains=${text}`;
      console.log({ url, cat: !categoryId, text });
    }
    if (categoryId && text) {
      url = `${baseURL}&title_contains=${text}`;
    }
    try {
      const res = await axios(url);
      // const json = await response.json();

      setRestaurantData(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const initialCurrentLocation = {
    streetName: "Comsats University Lahore",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );
  function onSelectCategory(category) {
    setSelectedCategory(category);
    getRestaurents({ categoryId: category.id });
  }

  function getCategoryNameById(id) {
    let category = categories?.filter((a) => a.id == id);

    if (category.length > 0) return category[0]?.name;

    return "";
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}
          >
            <Image
              source={{
                uri: item.icon,
              }}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    //HomeScreen Starts Here from here
    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <StatusBar />
        <Text style={{ ...FONTS.h1 }}>Main </Text>
        <Text style={{ ...FONTS.h2 }}>Categories</Text>

        <FlatList
          data={categoryData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
    //to here
  }

  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() =>
          navigation.navigate("Restaurant", {
            item,
            currentLocation,
            restaurantLocation,
          })
        }
      >
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
          </View>
        </View>

        {/* Restaurant Info */}
        <Text style={{ ...FONTS.body2 }}>{item.title}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
          }}
        >
          {/* Rating */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

          {/* Categories */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            {item?.categoryData?.map((categoryId) => {
              return (
                <View style={{ flexDirection: "row" }} key={categoryId}>
                  <Text style={{ ...FONTS.body3 }}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}></Text>
                </View>
              );
            })}

            {/* Price */}
            {[1, 2, 3].map((priceRating) => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}
              >
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurantData}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 20,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        // inlineImageLeft=""
        style={{
          padding: 12,
          //   flex: 1,
          marginTop: 20,
          marginRight: 20,
          marginLeft: 20,
          backgroundColor: COLORS.white,
          borderWidth: StyleSheet.hairlineWidth,
          borderRadius: 12,
        }}
        placeholder="Search any restaurent here"
        value={searchText}
        onChangeText={(text) => {
          //   console.log(text);
          setSearchText(text);
          getRestaurents({ text: text });
        }}
      />
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
