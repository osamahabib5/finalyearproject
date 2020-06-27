import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//for user's personal info setting will see as the app progress whether there is a need for this screen
const AccountScreen = () => {
  return (
    <View>
      <Text>Account Screen</Text>
    </View>
  );
};

AccountScreen.navigationOptions = {
  title: "My Account",
  tabBarIcon: (
    <MaterialCommunityIcons
      name="account"
      size={27}
      color="#B4BFC3"
      style={{ marginTop: 10, marginBottom: 3 }}
    />
  ),
};

const styles = StyleSheet.create({});

export default AccountScreen;
