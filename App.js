import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import NTCPDiamondScreen from "./src/screens/NTCPDiamondScreen";
import ProjectAndCompanyDetailsScreen from "./src/screens/ProjectAndCompanyDetailsScreen";
import ProjectsWithSimilarDiamondScreen from "./src/screens/ProjectsWithSimilarDiamondScreen";
import ProjectsWithSimilarIndustryScreen from "./src/screens/ProjectsWithSimilarIndustryScreen";
import RecommendationScreen from "./src/screens/RecommendationScreen";
import ViewProjectsScreen from "./src/screens/ViewProjectsScreen";
import ViewMyDiamondsScreen from "./src/screens/ViewMyDiamondsScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ViewProjectDetailScreen from "./src/screens/ViewProjectDetailScreen";
import { setNavigator } from "./src/navigationRef";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as UserProvider } from "./src/context/UserContext";
import { MaterialIcons } from "@expo/vector-icons";
import Head from "./src/components/Head";

const createProjectFlow = createStackNavigator(
  {
    //ProjectAndCompanyDetails: ProjectAndCompanyDetailsScreen,
    NTCPDiamond: NTCPDiamondScreen,
    //Recommendation: RecommendationScreen,
    //ProjectsWithSimilarIndustryScreen: ProjectsWithSimilarIndustryScreen,
    //ProjectsWithSimilarDiamond: ProjectsWithSimilarDiamondScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontFamily: "sans-serif-light",
        color: "#B4BFC3",
      },
    },
  }
);

createProjectFlow.navigationOptions = {
  title: "New Project",
  tabBarIcon: (
    <MaterialIcons
      name="create-new-folder"
      size={28}
      color="#B4BFC3"
      style={{ marginTop: 10 }}
    />
  ),
};

const viewProjectsFlow = createStackNavigator(
  {
    ViewProjects: ViewProjectsScreen,
    ViewProjectDetail: ViewProjectDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontFamily: "sans-serif-light",
        color: "#B4BFC3",
      },
    },
  }
);

viewProjectsFlow.navigationOptions = {
  title: "Projects",
  tabBarIcon: (
    <MaterialIcons
      name="view-list"
      size={32}
      color="#B4BFC3"
      style={{ marginTop: 10 }}
    />
  ),
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
  }),
  mainFlow: createBottomTabNavigator({
    viewProjectsFlow,
    createProjectFlow,
    ViewMyDiamonds: ViewMyDiamondsScreen,
    Account: AccountScreen,
  }),
});
//viewprojects screen mein drawer
//navigator lga skte hain same example type wala

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <UserProvider>
      <AuthProvider>
        <View style={{ flex: 1 }}>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </View>
      </AuthProvider>
    </UserProvider>
  );
};
