import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.iconStyle} onPress={onTermSubmit} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchInput}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 50,
    margin: 15
  },
  searchInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginHorizontal: 10,
    flex: 1
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center"
  }
});
export default SearchBar;
