import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import shop from "../api/shop";
import { WebView } from "react-native-webview";
import { withNavigation } from "react-navigation";

const removeHeaders =
  'document.querySelector("#header").style.display = "none"; ' +
  'document.querySelector("#main-content").style.top = "0"; ' +
  'document.querySelect(".js-download-app-banner download-app-banner").style.display ="none"; ' +
  'document.querySelect(".download-app-banner").style.display ="none";';

const ProductScreen = ({ navigation }) => {
  const [product, setProduct] = useState(null);
  const id = navigation.getParam("id");
  const getProduct = async id => {
    const response = await shop.get(`/products/${id}?`, {
      params: {
        publisherId: "TEST",
        locale: "en_US"
      }
    });
    setProduct(response.data);
  };
  useEffect(() => {
    getProduct(id);
  }, []);
  if (!product) {
    return null;
  }
  return (
    <View style={styles.container}>
      <WebView
        style={styles.web}
        source={{ uri: product.referralPageUrl }}
        javaScriptEnabled
        injectedJavaScript={
          "function injectRules() {" + removeHeaders + "};injectRules();"
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  web: {
    flex: 1
  }
});
ProductScreen.navigationOptions = {
  title: "Product Details"
};
export default withNavigation(ProductScreen);
