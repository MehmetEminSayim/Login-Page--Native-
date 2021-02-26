import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Button, FlatList } from 'react-native'

import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import {createDrawerNavigator } from "react-navigation-drawer"

import Login from "./screens/Login"
import Register from "./screens/Register"


const AuthStack = createStackNavigator({
  Login:{
    screen:Login,
    navigationOptions : {
      headerShown : false
    }
  },
  Register : {
    screen : Register,
    navigationOptions : {
      headerShown : false
    }
  }
})





export default createAppContainer(AuthStack)
