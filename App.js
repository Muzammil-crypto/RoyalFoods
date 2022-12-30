import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Restaurant, OrderDelivery } from "./screens";
import Tabs from "./navigation/tabs";
import { COLORS } from "./constants";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: COLORS.primary },
            headerTitleStyle: { color: COLORS.white },
            headerTitleAlign: "center",
            headerTitle: "Bawarchi Kitchen",
          }}
        />
        <Stack.Screen
          name="OrderDelivery"
          component={OrderDelivery}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: COLORS.primary },
            headerTitleStyle: { color: COLORS.white },
            headerTitleAlign: "center",
            headerTitle: "Bawarchi Kitchen",
          }}
        />
        {/* <Stack.Screen name="OrderDelivery" component={OrderDelivery} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
