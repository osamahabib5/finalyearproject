import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import Svg, { Line } from "react-native-svg";

import { Content, Card, CardItem, Text } from "native-base";

const NTCPDiamondScreen = () => {
  const [value, setValue] = useState("");

  var technology = [
    { label: "Super-high", value: "Super-high" },
    { label: "High", value: "High" },
    { label: "Medium", value: "Medium" },
    { label: "Low", value: "Low" },
  ];

  var pace = [
    { label: "Regular", value: "Regular" },
    { label: "Fast", value: "Fast" },
    { label: "Time-critical", value: "Time-critical" },
    { label: "Blitz", value: "Blitz" },
  ];

  var complexity = [
    { label: "Assembly", value: "Assembly" },
    { label: "System", value: "System" },
    { label: "Array", value: "Array" },
  ];

  var novelty = [
    { label: "Derivative", value: "Derivative" },
    { label: "Platform", value: "Platform" },
    { label: "Breakthrough", value: "Breakthrough" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <CardItem header bordered style={{ backgroundColor: "#33CCFF" }}>
        <Text style={styles.textTitleStyle}>Create New Diamond</Text>
      </CardItem>

      <CardItem bordered>
        <View style={styles.viewStyle}>
          <View>
            <View
              style={{
                paddingLeft: 145,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "sans-serif-light",

                  fontStyle: "italic",
                  paddingLeft: 30,
                  color: "#B4BFC3",
                }}
              >
                Technology
              </Text>
              <RadioForm
                radio_props={technology}
                initial={-1}
                onPress={(value) => {
                  setValue(value);
                  console.log(value);
                }}
                buttonColor={"#33CCFF"}
                buttonSize={10}
                selectedButtonColor={"#33CCFF"}
                labelStyle={{
                  fontFamily: "sans-serif-light",

                  fontSize: 7,
                }}
                style={{}}
              />
            </View>
            <View style={styles.secondView}>
              <View
                style={{
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "sans-serif-light",

                    fontStyle: "italic",
                    paddingLeft: 30,
                    paddingBottom: 5,
                    color: "#B4BFC3",
                  }}
                >
                  Novelty
                </Text>
                <RadioForm
                  radio_props={novelty}
                  initial={-1}
                  formHorizontal={true}
                  labelHorizontal={false}
                  onPress={(value) => {
                    setValue(value);
                    console.log(value);
                  }}
                  buttonColor={"#33CCFF"}
                  buttonSize={10}
                  selectedButtonColor={"#33CCFF"}
                  labelStyle={{
                    fontFamily: "sans-serif-light",

                    fontSize: 7,
                  }}
                />
              </View>

              <View
                style={{
                  marginLeft: 40,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "sans-serif-light",

                    fontStyle: "italic",
                    paddingLeft: 30,
                    paddingBottom: 5,
                    color: "#B4BFC3",
                  }}
                >
                  Complexity
                </Text>
                <RadioForm
                  radio_props={complexity}
                  initial={-1}
                  formHorizontal={true}
                  labelHorizontal={false}
                  onPress={(value) => {
                    setValue(value);
                    console.log(value);
                  }}
                  buttonColor={"#33CCFF"}
                  buttonSize={10}
                  selectedButtonColor={"#33CCFF"}
                  labelStyle={{
                    fontFamily: "sans-serif-light",

                    fontSize: 7,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                paddingLeft: 145,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "sans-serif-light",

                  fontStyle: "italic",
                  paddingLeft: 30,
                  color: "#B4BFC3",
                }}
              >
                Pace
              </Text>
              <RadioForm
                radio_props={pace}
                initial={-1}
                onPress={(value) => {
                  setValue(value);
                  console.log(value);
                }}
                buttonColor={"#33CCFF"}
                buttonSize={10}
                selectedButtonColor={"#33CCFF"}
                labelStyle={{
                  fontFamily: "sans-serif-light",

                  fontSize: 7,
                }}
                style={{}}
              />
            </View>
          </View>
        </View>
      </CardItem>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: "#fff",
  },
  secondView: {
    flexDirection: "row",
  },
  textTitleStyle: {
    fontFamily: "sans-serif-light",
    color: "#fff",
    paddingLeft: 80,
  },
  diamond: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    transform: [{ rotate: "45deg" }],
    position: "absolute",
  },
});

NTCPDiamondScreen.navigationOptions = {
  headerTitle: () => (
    <Image
      source={require("../../assets/splash_modified.png")}
      style={{
        width: 45,
        height: 45,
        alignSelf: "center",
      }}
    />
  ),
};

export default NTCPDiamondScreen;
