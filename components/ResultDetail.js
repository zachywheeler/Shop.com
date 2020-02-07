import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image.sizes[0].url }} />
      <View style={styles.container2}>
        <Text style={styles.titleText}>{result.name}</Text>
        <Text>
          {result.minimumPriceString} {result.brand}
        </Text>
        <Text style={styles.descr}>{result.shortDescription}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "#fff"
  },
  image: {
    width: "45%",
    height: 200,
    borderRadius: 4,
    marginHorizontal: 10
  },
  titleText: {
    flexDirection: "row",
    fontSize: 16,
    fontWeight: "bold"
  },
  container2: {
    width: "45%"
  },
  descr: {
    fontSize: 11,
    marginTop: 5
  }
});
export default ResultDetail;
