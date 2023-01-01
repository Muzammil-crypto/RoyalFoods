import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../constants";

export const Favourits = () => {
  //   return (
  //     <TouchableOpacity
  //       style={{ marginBottom: SIZES.padding * 2 }}
  //       onPress={() =>
  //         navigation.navigate("Restaurant", {
  //           item,
  //           currentLocation,
  //           restaurantLocation,
  //         })
  //       }
  //     >
  //       {/* Image */}
  //       <View
  //         style={{
  //           marginBottom: SIZES.padding,
  //         }}
  //       >
  //         <Image
  //           source={{ uri: item.image }}
  //           resizeMode="cover"
  //           style={{
  //             width: "100%",
  //             height: 200,
  //             borderRadius: SIZES.radius,
  //           }}
  //         />
  //         <View
  //           style={{
  //             position: "absolute",
  //             bottom: 0,
  //             height: 50,
  //             width: SIZES.width * 0.3,
  //             backgroundColor: COLORS.white,
  //             borderTopRightRadius: SIZES.radius,
  //             borderBottomLeftRadius: SIZES.radius,
  //             alignItems: "center",
  //             justifyContent: "center",
  //             ...styles.shadow,
  //           }}
  //         >
  //           <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
  //         </View>
  //       </View>
  //       {/* Restaurant Info */}
  //       <Text style={{ ...FONTS.body2 }}>{item.title}</Text>
  //       <View
  //         style={{
  //           marginTop: SIZES.padding,
  //           flexDirection: "row",
  //         }}
  //       >
  //         {/* Rating */}
  //         <Image
  //           source={icons.star}
  //           style={{
  //             height: 20,
  //             width: 20,
  //             tintColor: COLORS.primary,
  //             marginRight: 10,
  //           }}
  //         />
  //         <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
  //         {/* Categories */}
  //         <View
  //           style={{
  //             flexDirection: "row",
  //             marginLeft: 10,
  //           }}
  //         >
  //           {item?.categoryData?.map((categoryId) => {
  //             return (
  //               <View style={{ flexDirection: "row" }} key={categoryId}>
  //                 <Text style={{ ...FONTS.body3 }}>
  //                   {getCategoryNameById(categoryId)}
  //                 </Text>
  //                 <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}></Text>
  //               </View>
  //             );
  //           })}
  //           {/* Price */}
  //           {[1, 2, 3].map((priceRating) => (
  //             <Text
  //               key={priceRating}
  //               style={{
  //                 ...FONTS.body3,
  //                 color:
  //                   priceRating <= item.priceRating
  //                     ? COLORS.black
  //                     : COLORS.darkgray,
  //               }}
  //             >
  //               $
  //             </Text>
  //           ))}
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
};
