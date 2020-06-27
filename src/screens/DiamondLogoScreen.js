import React from "react";
import { View, StyleSheet, ActivityIndicator, Text, Image  } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const DiamondLogoScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <ActivityIndicator size="large" style={{ marginTop: 200 }} />
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});

export default DiamondLogoScreen;
