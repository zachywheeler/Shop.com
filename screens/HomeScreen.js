import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import WebView from "react-native-webview";

const removeHeaders =
  'document.querySelector("#header").style.display = "none"; ' +
  'document.querySelector("#main-content").style.top = "0"; ' +
  'document.querySelect(".js-download-app-banner download-app-banner").style.display ="none"; ' +
  'document.querySelect(".download-app-banner").style.display ="none";';
function HomeScreen({ navigation }) {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const webviewRef = useRef(null);

  backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack();
  };

  frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward();
  };

  return (
    <>
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <WebView
        javaScriptEnabled
        injectedJavaScript={
          "function injectRules() {" + removeHeaders + "};injectRules();"
        }
        source={{uri: 'https://shop.com'}}
        style={styles.web}
        startInLoadingState={true}
        ref={webviewRef}
        onNavigationStateChange={navState => {
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
          setCurrentUrl(navState.url);
        }}
      />
      <View style={styles.tabBarContainer}>
        <TouchableOpacity onPress={backButtonHandler}>
          <Text style={styles.button}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={frontButtonHandler}>
          <Text style={styles.button}>Forward</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  tabBarContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#00a8ca"
  },
  button: {
    color: "white",
    fontSize: 24
  },
  container: {
    flex: 1
  },
  web: {
    flex: 1,
    marginTop: 0
  }
});

HomeScreen.navigationOptions = {
  header: null
};
export default HomeScreen;
