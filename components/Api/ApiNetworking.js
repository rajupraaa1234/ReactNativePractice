//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { color } from 'react-native-reanimated';
import { useStores } from '../mobx/hooks';
// create a component



const ApiNetworking = () => {

    const{loginStore} = useStores();

    console.log(`My Login data : ${loginStore.LoginedUser}`)


    const onPutPress = () =>{
        console.log("onPutPress");
        const requestOption = {
            method: 'PUT',
            headers: {
               Accept: 'application/json',
              'Content-Type': 'application/json',      /// Here you can add heder as you like 
              'Authorization' : 'somthing'
            },
            body: JSON.stringify({
              firstParam: 'enter your new Value',                 /// Here you can add your body as your requirment
              secondParam: 'yourOtherValue'
            })
        };
        fetch('https://mywebsite.com/endpoint/',requestOption)
        .then((response) => response.json())
        .then((json)=>{
           console.log('Fetch Api Response',json);
        })
        .catch((error)=>{
           console.log(error); 
        });
    }
    const onPOSTPress = () =>{
        console.log("onPOSTPress");
        const requestOption = {
            method: 'POST',
            headers: {
               Accept: 'application/json',
              'Content-Type': 'application/json',      /// Here you can add heder as you like 
              'Authorization' : 'somthing'
            },
            body: JSON.stringify({
              firstParam: 'yourValue',                 /// Here you can add your body as your requirment
              secondParam: 'yourOtherValue'
            })
        };
        fetch('https://mywebsite.com/endpoint/',requestOption)
        .then((response) => response.json())
        .then((json)=>{
           console.log('Fetch Api Response',json);
        })
        .catch((error)=>{
           console.log(error); 
        });
    }
    const onGETPress = () =>{
        console.log("onGETPress");
        const requestOption = {
            method: 'GET',
            headers: {
               Accept: 'application/json',
              'Content-Type': 'application/json',      /// Here you can add heder as you like 
              //'Authorization' : 'somthing'
            },
        };
        fetch('https://reactnative.dev/movies.json',requestOption)
        .then((response) => response.json())
        .then((json)=>{
           console.log('Fetch Api Response',json.movies);
        })
        .catch((error)=>{
           console.log(error); 
        });
    }
    const onDeletePress = () =>{
        console.log("onDeletePress");
        const requestOption = {
            method: 'POST',
            headers: {
               Accept: 'application/json',
              'Content-Type': 'application/json',      /// Here you can add heder as you like 
              'Authorization' : 'somthing'
            },
        };
        fetch('https://mywebsite.com/endpoint/',requestOption)
        .then((response) => response.ok)      ////In Delete it will return true false only
        .catch((error)=>{
           console.log(error); 
        });
    }

    const onMobxPress = () =>{
        loginStore.setUser("raju kumar");
    }


    return (
        <View style={styles.container}>
            <View style={styles.Btn} >
                  <Button title="PUT"  onPress={onPutPress}/>
            </View>
            <View style={styles.Btn} > 
                  <Button title="GET"  onPress={onGETPress}/>
            </View>

            <View style={styles.Btn}>
                  <Button title="DELETE"  onPress={onDeletePress}/>
            </View>
           
            <View  style={styles.Btn}>
                  <Button title="POST" onPress={onPOSTPress}/>
            </View>
            
            <View style={styles.Btn}>
                  <Button title="Mobx Save data" onPress={onMobxPress}/>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      
    },
    Btn:{
        marginTop:10,
        padding:20,
    }
});

//make this component available to the app
export default ApiNetworking;
