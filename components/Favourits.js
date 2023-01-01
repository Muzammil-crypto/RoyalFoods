import React from "react";
import { Component } from "react";
import { useState } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";

export const Favourits = ({ favourit, navigation }) => {
  //   const [itemComing, setItemComing] = useState([]);
  let { data } = favourit;

  return (
    // <Text>{favourit.name}</Text>
    <TouchableOpacity style={{ margin: SIZES.padding * 2 }}>
      {/* Image */}
      <View
        style={{
          marginBottom: SIZES.padding,
        }}
      >
        <Image
          source={{ uri: favourit?.photo }}
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
          <Text style={{ ...FONTS.h4 }}>Price: {favourit?.price}</Text>
        </View>
      </View>

      {/* Restaurant Info */}
      <Text style={{ ...FONTS.body2 }}>{favourit?.name}</Text>

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
        <Text style={{ ...FONTS.body3 }}>{favourit?.id}</Text>

        {/* Categories */}
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
          }}
        >
          {favourit?.categoryData?.map((categoryId) => {
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
                  priceRating <= favourit?.id ? COLORS.black : COLORS.darkgray,
              }}
            >
              $
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
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
