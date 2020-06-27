import React, { useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Container, Content, Card, CardItem, Text, Body } from "native-base";
import { Button } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import Head from "../components/Head";
import Spacer from "../components/Spacer";
import { Context as UserContext } from "../context/UserContext";

const ViewProjectsScreen = ({ navigation }) => {
  const { state, fetchAllProjects } = useContext(UserContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchAllProjects} />
      <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
        <Head headerText="Diamond" />
        <Button
          title="Current projects"
          type="solid"
          buttonStyle={{
            backgroundColor: "#B4BFC3",
            //marginHorizontal: 15,
          }}
          titleStyle={{ fontFamily: "sans-serif-light" }}
        />
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <Content padder>
                <Card>
                  <CardItem
                    header
                    bordered
                    style={{ backgroundColor: "#33CCFF" }}
                  >
                    <Text style={styles.textTitleStyle}>
                      {item.projectName}
                    </Text>
                  </CardItem>

                  <CardItem bordered>
                    <Body>
                      <Text style={styles.textStyle}>
                        {item.projectDescription}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem footer bordered>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("ViewProjectDetail", {
                          _id: item._id,
                        })
                      }
                    >
                      <Text
                        style={{
                          color: "#B4BFC3",
                          fontFamily: "sans-serif-light",
                        }}
                      >
                        View Details
                      </Text>
                    </TouchableOpacity>
                  </CardItem>
                </Card>
              </Content>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

ViewProjectsScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "sans-serif-light",
  },
  textTitleStyle: {
    fontFamily: "sans-serif-light",
    color: "#fff",
  },
  textStyle: {
    fontFamily: "sans-serif-light",
  },
});

export default ViewProjectsScreen;
