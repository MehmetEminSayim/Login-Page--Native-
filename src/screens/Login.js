import React, { Component } from 'react'
import { Text, View,SafeAreaView,Button,StyleSheet , Image ,TextInput,ScrollView} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressBook , faIgloo , faAddressCard } from '@fortawesome/free-solid-svg-icons'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Formik } from "formik"
import * as Yup from "yup"
import {observer,inject} from "mobx-react";

@inject("MainStore")
@observer

export default class Login extends Component {

  _handlersubmit = () =>{
    alert("form post edildi.")
  }
  componentDidMount() {

  }



  render() {
    return (
     <SafeAreaView style = {style.body} >
        <ScrollView>
          <View style = {style.header}>
            <Text style = {style.title}>Sing In</Text>
            <View>
              <Text>{this.props.MainStore.fullName}</Text>
              <TouchableOpacity onPress={ ()=>{ this.props.MainStore.setData("Metge","Yazılım") } }><Text>Değiştir</Text></TouchableOpacity>
            </View>

          </View>
          <View style = {style.logo_area}>
            <Image source={require('../assets/images/homelogo.png')}></Image>
          </View>
          <View style = {style.board}>
            <Formik
              initialValues={{
                  username : '',
                  password : ''
                }}
              validationSchema={Yup.object().shape({
                username:Yup.string().required("username bos birakilamaz"),
                password : Yup.string().required("password bos birakilamaz")
              })}
              onSubmit={this._handlersubmit}>
              {({values , handleSubmit , handleChange,errors}) =>(
                <View>
                  <View style={style.item}>
                    <TextInput
                      value={values.username}
                      onChangeText={handleChange('username')}
                      placeholder={"Username"}
                      style={style.input}></TextInput>
                    {(errors.username ) && <Text>{errors.username}</Text> }
                  </View>
                  <View style={style.item}>
                    <TextInput
                      value={values.password}
                      onChangeText={handleChange('password')}
                      secureTextEntry={true}
                      placeholder={"Password"}
                      style={style.input}></TextInput>
                    {(errors.password ) && <Text>{errors.password}</Text> }
                  </View>
                  <View style={[style.item, {
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    fontSize: 16,
                    fontWeight: "bold"
                  }]}>
                    <Text style={{ color: '#535464' }}>Forgot Your Password</Text>
                  </View>
                  <View style={style.item}>
                    <TouchableOpacity onPress={handleSubmit} style={style.button}>
                      <Text style={style.buttonText}> Login </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
              }
            </Formik>


            <View style = {[style.item, {flexDirection:'row' , justifyContent: 'center', alignItems:'center' , fontSize: 16 , fontWeight: "bold" } ]}>
              <Text style = {{ color: '#535464' }} >Or</Text>
            </View>

            <View style = {style.social}>
              <TouchableOpacity style = {style.social_item} >
                <FontAwesomeIcon icon={ faAddressBook } />
              </TouchableOpacity>

              <TouchableOpacity style = {style.social_item} >
                <FontAwesomeIcon icon={ faIgloo } />
              </TouchableOpacity>

              <TouchableOpacity style = {style.social_item} >
                <FontAwesomeIcon icon={ faAddressCard } />
              </TouchableOpacity>
            </View>

            <View style = {[style.item, { marginTop:10, flexDirection:'row' , justifyContent: 'center', alignItems:'center' , fontSize: 16 , fontWeight: "bold" } ]}>
              <TouchableOpacity
                onPress={()=>{ this.props.navigation.navigate('Register')  }}
              >
                <Text style = {{ color: '#535464' }} >Don't have an account? Sing up</Text>
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
