import { useEffect, useState } from "react";
import shop from "../api/shop";

export default () => {
  let [results, setResults] = useState([]);
  let [errorMsg, setError] = useState("");

  const searchApi = async searchTerm => {
    try {
      const response = await shop.get("/products?", {
        params: {
          publisherId: "TEST",
          locale: "en_US",
          term: searchTerm,
          perPage: 25
        }
      });
      newFunction(setResults, response);
    } catch (err) {
      console.log(err);
      setError("Something went wrong1");
    }
  };

  return [searchApi, results, errorMsg];
};
function newFunction(setResults, response) {
  setResults(response.data.products);
}
