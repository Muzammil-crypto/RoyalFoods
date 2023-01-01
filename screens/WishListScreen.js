import React from "react";
import { View, Text } from "react-native";
import { Favourits } from "../components/Favourits";

export const WishListScreen = ({ route, navigation }) => {
  const [favourit, setFavourit] = React.useState([]);
  const List = [];
  React.useEffect(() => {
    let { item } = route?.params;

    setFavourit(item);

    console.log("Favourit DATA", favourit[0]);
  });
  List.push(favourit);

  console.log("Favourite STATE DATA", { List });

  return (
    <View>
      {/* <Text>okokokkoko</Text> */}
      {List?.map((item, i) => {
        return (
          <>
            {/* key ={i} */}
            {/* <Text>{item?.name}okokokk</Text> */}
            <Favourits favourit={item} />
          </>
        );
      })}
    </View>
  );
};
