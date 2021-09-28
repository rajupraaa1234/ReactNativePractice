

import React from "react";
import {Button, Modal, Text,View,StyleSheet} from 'react-native';



class CustomModal extends React.Component{
    constructor(){
        super();
        this.state={
            flag : true
        }
    }
    render(){

     //  this.setState({flag:this.props.data});
        return(
            <View>
                <Modal visible={this.state.flag} transparent={true}  >
                    <View style={{backgroundColor:"#000000aa",flex:1}}>
                        <View style={MyModalStyle.style1} >
                             <Text style={{fontSize:50,padding:10,margin:20}}>Modal Text</Text>
                                <View style={{marginTop:60}}>
                                     <Button onPress={()=>{this.setState({flag:false})}}  title="Hide Modal"/>
                                </View>
                        </View>
                    </View> 
                </Modal>
            </View>
        )
    }
}

const MyModalStyle = StyleSheet.create({
    style1 : {
        marginTop:160,
        marginLeft:20,
        marginRight:20,
        marginBottom:160,
        flex:1,
        backgroundColor:"#ffffff",
        borderRadius:8,
        padding:20
    }
})

export default CustomModal;