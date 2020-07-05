import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper'
const RecommendationScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.diamond}>
          <Image source={require('./LogoImage/splash_modified.png')}
            style={{
              width: 80,
              height: 80
            }} />
        </View>

        <View>
          <Text style={{
            fontSize: 20,
            color: '#1598a1',
            alignItems: 'flex-start',
            marginLeft: 10
          }}>Your Diamond: </Text>
        </View>

        <View style={styles.box}>

        </View>

        <View style={styles.recommendationsbox}>
          <Text style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 5
          }}>Recommendations</Text>
        </View>

        <View style={{ alignSelf: 'flex-end' }}>
          <Button mode="contained" onPress={() => console.log('Pressed')}
            style={{
              height: 40,
              width: 300,
              marginRight: 30,
              marginTop: 10,
              backgroundColor: '#1598a1'
            }}>
            VIEW MY PROJECTS
        </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  diamond: {
    marginTop: 50,
    alignItems: 'center'
  }
  , container: {
    flex: 1
  },
  box: {
    width: 335,
    height: 150,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 1

  },
  recommendationsbox: {
    marginTop: 30,
    marginLeft: 13,
    borderColor: 'black',
    borderWidth: 1,
    width: 335,
    height: 250,
    backgroundColor: '#1598a1'
  }
});

export default RecommendationScreen;
