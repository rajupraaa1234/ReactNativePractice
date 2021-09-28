import React,{useState,useEffect} from "react";
import {Button, Text,View} from 'react-native';
import { add } from "react-native-reanimated";


// const Profile = () =>{
//     // console.warn(props)
   
// }

function Profile(){
    const[data,setData] = useState(0);
    
    useEffect(()=>{
        if(data==5){
            console.warn("done")
        }
    })
    function add(){
         setData(data+1)
    }
   
    return(
        <View>
            <Text>{data}</Text>

            <Button title="click" onPress={()=>add()}/>
        </View>
    )
}

export default Profile;