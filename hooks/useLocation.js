import { useEffect, useState } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default () => {
  const [location, setLocation] = useState();
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert("Insufficient permissions", [{ text: "Okay" }]);
      return false;
    }
    return true;
  };
  const Locationhandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const local = await Location.getCurrentPositionAsync();
    const zip = await Location.reverseGeocodeAsync(local.coords);
    setLocation(zip[0].postalCode);
  };
  useEffect(() => {
    Locationhandler();
  }, []);
  return [location];
};
