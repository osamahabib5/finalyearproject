import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, Divider } from 'react-native-paper';
import { ListItem } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

//for user's personal info setting will see as the app progress whether there is a need for this screen


const AccountScreen = () => {
  const list = [
    {
      name: 'MUHAMMAD HARIS',
      avatar_url: 'https://cdn.iconscout.com/icon/free/png-256/account-269-866236.png'
    },
    {
      name: 'CREATE NEW DIAMOND',
      avatar_url: 'data:image/jpeg;base64,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'
    },
    {
      name: 'MY DIAMONDS',
      avatar_url: 'https://cdn3.vectorstock.com/i/1000x1000/21/32/list-page-flat-icon-vector-7952132.jpg'
    },
    {
      name: 'LOG OUT',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNTDEQDIWNJ1NitqpkRylnllTNinqBps4M6fRaYaPgSJWgVo&s'
    },
  ]
  return (

    <View>
      <Image source={require('./LogoImage/splash_modified.png')} style={{
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: 60
      }} />

      {/* <View style={{
        alignSelf: 'center',
        marginTop: 30
      }}>
        <Text style={styles.menuitems}>MUHAMMAD HARIS</Text>
        <Divider />
        <Text style={styles.menuitems}>CREATE NEW DIAMONDS</Text>
        <Divider />
        <Text style={styles.menuitems}>MY DIAMONDS</Text>
        <Divider />
        <Text style={styles.menuitems}>LOGOUT</Text>
        <Divider />
      </View> */}
      <View style={styles.list}>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              bottomDivider

            />
          ))
        }
      </View>
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

const styles = StyleSheet.create({
  list: {
    marginTop: 30
  }
});

export default AccountScreen;
