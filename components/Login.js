import React from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity,
   } from 'react-native'

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            name : "",
            userpass : "",
            address : "",
            InvalidAdd : "",
        }
    }
    submit(){
        console.warn("all Value",this.state)
        console.log("all Value",this.state)
        console.log("degugging...");
        if(this.state.name.length==0){
           alert("Please enter your username")
           return;
        }
        if(this.state.userpass.length==0){
            alert("Please enter password")
            return;
        }
        if(this.state.address.length==0){
            alert("please enter address")
            return;
        }
    }
    check(text){
        this.setState({address:text})
        let rjx = /^[a-zA-Z]+$/
        if(!rjx.test(text)){
             this.setState({InvalidAdd:"Please enter valid address"});
        }else{
            this.setState({InvalidAdd:"Please enter valid address"});
        }
    }
    render(){

        Geolocation.getCurrentPosition(info => console.log(info.coords));
          //const data = this.props.navigation.state.params;
         // console.log(this.props);   //all data with json
        // console.log(this.props.route);    // all data with route
       //console.log(this.props.route.params.email); // data with email
        return(
            <View style ={{margin:10}}>
               <TextInput style={myStyle.style} placeholder ="Enter Username"
                          onChangeText = {(text)=>{this.setState({name:text})}}
                />

                <TextInput style={myStyle.style} placeholder ="Enter Password"
                          secureTextEntry={true}
                          onChangeText = {(text)=>{this.setState({userpass:text})}}
                          maxLength={8}
                />

                <TextInput style={myStyle.style} placeholder ="Enter Address"
                          onChangeText = {(text)=>{this.check(text)}}
                        //   keyboardType={'numeric'}
                />

                <View style={{marginTop:5}}>
                     <Text>{this.state.InvalidAdd}</Text>
                </View>

                <View style={{marginTop:10}}>
                     <Button onPress={()=>{this.submit()}} title="Submit" />
                </View> 
                

                <TouchableOpacity style={myStyle.button1} onPress={()=>{this.submit()}}>
                     <Text style={myStyle.TextContainer} >Submit</Text>
                </TouchableOpacity> 
            

                <View style={{marginTop:10}}>
                     <FontAwesome5 name={'git'} brand size={50}/>
                </View> 
                <FontAwesome5 name={'comments'} solid size={50} />  
                <Icon name="rocket" size={30} color="#900" /> 

                 
            </View>   
        )
    }
}

const myStyle = StyleSheet.create({
    style : {
        borderColor : 'skyblue',
        borderWidth : 2,
        marginVertical : 10,
        padding : 10
    },
    button1:{
       marginHorizontal:10,
       height:40,
       marginVertical:20,
       backgroundColor:'#5d57ff',
       justifyContent:'center',
       alignContent:'center',
       borderRadius:50,
    },
    TextContainer:{
        color:'white',
        marginHorizontal:20,
        alignSelf: "center",
        fontWeight:"bold",
        textTransform:"uppercase",   
    },


})


export default Login;