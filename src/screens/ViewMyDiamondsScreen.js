import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ViewMyDiamondsScreen = () => {
  return (
    <View>
      <Text>View My Diamonds Screen</Text>
    </View>
  );
};

ViewMyDiamondsScreen.navigationOptions = {
  title: "My Diamonds",
  tabBarIcon: (
    <FontAwesome
      name="diamond"
      size={22}
      color="#B4BFC3"
      style={{ marginTop: 8 }}
    />
  ),
};

const styles = StyleSheet.create({});

export default ViewMyDiamondsScreen;
