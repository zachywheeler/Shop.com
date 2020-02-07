import React from "react";
import { StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import useLocation from "../hooks/useLocation";

const removeHeaders =
  'document.querySelector("#header").style.display = "none"; ' +
  'document.querySelector("#main-content").style.top = "0"; ' +
  'document.querySelect(".js-download-app-banner download-app-banner").style.display ="none"; ' +
  'document.querySelect(".download-app-banner").style.display ="none";';
export default function LocalScreen() {
  const [location] = useLocation();
  return (
    <>
      <StatusBar hidden />
      <WebView
        javaScriptEnabled
        injectedJavaScript={
          "function injectRules() {" + removeHeaders + "};injectRules();"
        }
        source={{
          uri: "https://www.shop.com/shoplocal/search?queryLocation=" + location
        }}
        style={{ marginTop: 0 }}
      />
    </>
  );
}
LocalScreen.navigationOptions = {
  header: null
};
