import React from "react";
import {Text,View} from 'react-native';


const Home = (props) =>{
    // console.warn(props)
    return(
        <View>
            <Text>Home Screen</Text>
            <Text>
                {props.data}
            </Text>
        </View>
    )
}

export default Home;