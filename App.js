import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Restaurant, OrderDelivery } from "./screens";
import Tabs from "./navigation/tabs";
import { COLORS } from "./constants";
import { LoginScreen } from "./screens/Auth/LoginScreen";
import { SplashScreen } from "./screens/splash/SplashScreen";
import { RegisterScreen } from "./screens/Auth/RegisterScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"SplashScreen"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: COLORS.primary },
            headerTitleStyle: { color: COLORS.white },
            headerTitleAlign: "center",
            headerTitle: "Login",
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: COLORS.primary },
            headerTitleStyle: { color: COLORS.white },
            headerTitleAlign: "center",
            headerTitle: "Login",
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: COLORS.primary },
            headerTitleStyle: { color: COLORS.white },
            headerTitleAlign: "center",
            headerTitle: "Login",
          }}
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
