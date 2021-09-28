import React, { Component } from 'react';  
import axios from 'axios'
import { AppRegistry, FlatList,  
    StyleSheet, Text, View,Alert } from 'react-native';  

  
export default class ApiPage extends Component {  
  
    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };  
    //handling onPress action  
    getListViewItem = (item) => {  
        Alert.alert(item.title);  
    }  

    constructor(){
        super();
        this.state ={
            data : []
        }
    }
    componentDidMount(){
        this.callApi();
    }
    
    async callApi(){

        // api calling using fetch

        // let resp =await fetch("https://reactnative.dev/movies.json");
        // let respJson = await resp.json();
        // this.setState({data:respJson.movies})


        // api calling using axios
        let resp =await axios.get("https://reactnative.dev/movies.json");
        console.log(resp.data.movies)
        this.setState({data:resp.data.movies})


    }

  
    render() {  
        return (  
            <View style={styles.container}>  
                <FlatList  
                   data = {this.state.data}
                    renderItem={({item}) =>  
                        <Text style={styles.item}  
                              onPress={this.getListViewItem.bind(this, item)}>{item.title}</Text>
                            } 
                    ItemSeparatorComponent={this.renderSeparator}  
                />  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },  
})  
  
  
AppRegistry.registerComponent('AwesomeProject', () => FlatListPage);  