import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import { Favourits } from "../components/Favourits";

export const WishListScreen = ({ route, navigation }) => {
  const [favourit, setFavourit] = React.useState([]);
  let { item } = route?.params || {};
  React.useEffect(() => {
    const items = favourit;
    if (item?.id) {
      setFavourit([...items, item]);
    }
  }, [item]);
  if (!favourit) {
    <ActivityIndicator />;
  } else
    return (
      <ScrollView>
        <View>
          {favourit.map((item, i) => {
            return (
              <>
                <Favourits favourit={item} />
              </>
            );
          })}
        </View>
      </ScrollView>
    );
};
