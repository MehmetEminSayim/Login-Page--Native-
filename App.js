import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Button, FlatList } from 'react-native'

import AsyncStorage from "@react-native-async-storage/async-storage";
import Route from "./src/Route"
import MainStore from "./src/MainStore";
import { Provider } from "mobx-react";


export default class App extends React.Component{

  componentDidMount = async () => {
    // AsyncStore yönetimi
    //AsyncStorage.setItem('appName', 'LoginPage');
    /*AsyncStorage.getItem('appName').then((res)=>{
      console.log(res)
    })
    const appName = await AsyncStorage.getItem('appName');
    console.log(appName);*/

    //Mobx Yönetimi
    console.log(MainStore.name);


  }

  render(){
    return <Provider MainStore ={MainStore} ><Route/></Provider>
  }
}




