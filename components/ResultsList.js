import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, result, navigation }) => {
  if (!result.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Product", { id: item.id })}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => "key" + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20
  }
});

export default withNavigation(ResultsList);
