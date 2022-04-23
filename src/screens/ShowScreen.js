import React from "react";
import { Text } from "react-native";

const ShowScreen = ({ route }) => {
  const { title } = route.params;
  return <Text>{title}</Text>;
};

export default ShowScreen;
