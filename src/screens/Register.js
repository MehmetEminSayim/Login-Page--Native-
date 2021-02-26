import React, { Component } from 'react'
import { Text, View,SafeAreaView,Button,StyleSheet , Image ,TextInput,ScrollView} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressBook , faIgloo , faAddressCard } from '@fortawesome/free-solid-svg-icons'
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class Login extends Component {

  render() {
    return (
      <SafeAreaView style = {style.body} >
        <ScrollView>
          <View style = {style.header}>
            <Text style = {style.title}>Register</Text>
          </View>
          <View style = {style.logo_area}>
            <Image source={require('../assets/images/homelogo.png')}></Image>
          </View>
          <View style = {style.board}>
            <View style = {style.item}>
              <TextInput
                placeholder = {"Username"}
                style = { style.input}></TextInput>
            </View>

            <View style = {style.item}>
              <TextInput
                secureTextEntry={true}
                placeholder = {"Password"}
                style = { style.input}></TextInput>
            </View>

            <View style = {style.item}>
              <TextInput
                secureTextEntry={true}
                placeholder = {"Repassword"}
                style = { style.input}></TextInput>
            </View>

            <View style = {[style.item, {flexDirection:'row' , justifyContent: 'flex-end', fontSize: 16 , fontWeight: "bold" } ]}>
              <Text style = {{ color: '#535464' }} ></Text>
            </View>

            <View style = {style.item}>
              <TouchableOpacity style = {style.button}>
                <Text style = {style.buttonText}> Create Account </Text>
              </TouchableOpacity>
            </View>

            <View style = {[style.item, {flexDirection:'row' , justifyContent: 'center', alignItems:'center' , fontSize: 16 , fontWeight: "bold" } ]}>
              <Text style = {{ color: '#535464' }} >Or</Text>
            </View>


            <View style = {[style.item, { marginTop:10, flexDirection:'row' , justifyContent: 'center', alignItems:'center' , fontSize: 16 , fontWeight: "bold" } ]}>
              <TouchableOpacity
                onPress={()=>{ this.props.navigation.navigate('Login')  }}
              >
                <Text style = {{ color: '#535464' }} >I have free account</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  body : {
    backgroundColor: 'white',
    flex : 1
  },
  header : {
    padding : 15,
    justifyContent:'center',
    alignItems:'center'
  },
  title : {
    fontWeight: '700',
    fontSize:20,
    color :'#535464'
  },
  logo_area : {
    alignItems: 'center',
    marginTop:20
  },
  board : {
    marginTop: 20,
    paddingHorizontal:30
  },
  input : {
    backgroundColor:'#F7F7F7',
    padding: 20
  },
  item : {
    marginBottom : 20
  },
  button : {
    backgroundColor : "#20C3AF",
    paddingVertical: 22,
    borderRadius:2,
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonText : {
    textAlign:'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '700'
  },
  social : {
    flexDirection : 'row',
    justifyContent:'space-between',
    marginBottom: 10
  },
  social_item : {
    padding: 10,
    width:100,
    height:60,
    borderWidth:1 ,
    borderColor : '#E2E2E0',
    justifyContent:'center',
    alignItems:'center'
  }
})
