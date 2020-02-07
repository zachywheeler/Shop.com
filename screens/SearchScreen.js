import React, { useState } from "react";
import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import useShopResults from "../hooks/useShopResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen({ handleBarCodeScanned }) {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useShopResults();
  if (!results) {
    return null;
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ResultsList title="Products" result={results} />
    </View>
  );
}
SearchScreen.navigationOptions = {
  title: "Shop.com"
};
