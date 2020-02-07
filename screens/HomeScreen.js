import React from "react";
import { StatusBar } from "react-native";
import { WebView } from "react-native-webview";

const removeHeaders =
  'document.querySelector("#header").style.display = "none"; ' +
  'document.querySelector("#main-content").style.top = "0"; ' +
  'document.querySelect(".js-download-app-banner download-app-banner").style.display ="none"; ' +
  'document.querySelect(".download-app-banner").style.display ="none";';
export default function HomeScreen() {
  return (
    <>
      <StatusBar hidden />
      <WebView
        javaScriptEnabled
        injectedJavaScript={
          "function injectRules() {" + removeHeaders + "};injectRules();"
        }
        source={{ uri: "https://shop.com" }}
        style={{ marginTop: 0 }}
      />
    </>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
