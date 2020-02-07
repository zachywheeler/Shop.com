import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import LocalScreen from "../screens/LocalScreen";
import ProductScreen from "../screens/ProductScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-home${focused ? "" : ""}` : "md-home"}
    />
  )
};

HomeStack.path = "";

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
    Product: ProductScreen
  },
  {
    initialRoute: "Search"
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

SearchStack.path = "";

const LocalStack = createStackNavigator(
  {
    Local: LocalScreen
  },
  config
);

LocalStack.navigationOptions = {
  tabBarLabel: "Local",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-business" : "md-business"}
    />
  )
};

LocalStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  LocalStack
});

tabNavigator.path = "";

export default tabNavigator;
