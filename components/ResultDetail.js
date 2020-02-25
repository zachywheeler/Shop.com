import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {Html5Entities} from 'html-entities'

const ResultDetail = ({ result }) => {
  const entities = new Html5Entities()
 
  return (
    
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image.sizes[2].url }} />
      <View style={styles.container2}>
        <Text style={styles.titleText}>{entities.decode(result.name)}</Text>
        <Text>
          {result.minimumPriceString} {entities.decode(result.brand)}
        </Text>
        <Text 
        style={styles.descr}
        numberOfLines ={3}
        >{entities.decode(result.shortDescription)}/></Text>
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
    marginVertical: 0,
    marginHorizontal: 15,
    backgroundColor: "#fff"
  },
  image: {
    width: "45%",
    height: 200,
    borderRadius: 4,
    marginHorizontal: 10,
    marginTop: 10

  },
  titleText: {
    flexDirection: "row",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  container2: {
    width: "45%",
    marginVertical: 0,
    height: 200,
    marginLeft: 20
  },
  descr: {
    fontSize: 11,
    marginTop: 0
  }
});
export default ResultDetail;
