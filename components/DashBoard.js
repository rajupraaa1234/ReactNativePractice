import React,{Component} from 'react';

import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



//Declare Functional Component

// const App = () => {
//   const data = "Some Data"
//   return (
//      <View>
//         {/* <Login/> */}
        
//         {/* send data one component to another (props) */}
//              <Home data={data} />
//      </View>
//   );
// };

// Declare Class Component


class DashBoard extends Component{
   constructor(){
     super();
     this.state={
       data : "State data object",
       name : "",
       mydata : {
           dob : "june",
           email : "rajupraaa1234@gmail.com"
       }
     }
   }
   UpdateStateData(){
     this.setState({data:"Changed Data"})
   }
   render(){
    function login() {
      alert("Inside Function")
    }
     return (
         <View style={{margin:10}}>
           <ScrollView>
           <Text style={{fontSize:40}} >Hello Class Component and {this.state.data}</Text>
           
           <Button onPress={login} title="Click" />
           
           <View style={{marginTop:10}}>
           <Button 
              title="Update state data"
              onPress={()=>this.UpdateStateData()}
              />
           </View>

           <View style={{marginTop:10}}>
             <Text style={MyStyle.style1}>{this.state.name}</Text>
           </View>
           <View style={{marginTop:10}}>
             <Text style={[MyStyle.style1,MyStyle.style2]}> First Style </Text>
           </View>

           <View style={{marginTop:10}}>
             <TextInput 
                placeholder = "Enter your fullname"
                onChangeText ={(e)=>{this.setState({name:e})}}
             />
           </View>
 
           <View style={{marginTop:10}}>
           <Button 
              title="get Input Data"
              onPress={()=>{alert(this.state.name)}}
              />
           </View>

           <View style={{marginTop:10}}>
           <Button 
              title="Go Login Page"
               onPress={()=>
                this.props.navigation.navigate('Login',this.state.mydata)
               }
              />
           </View>
           
           <View style={{marginTop:10}}>
           <Button 
              title="Go Navigation Page"
               onPress={()=>
                this.props.navigation.navigate('About')
               }
              />
           </View>

           <View style={{marginTop:10}}>
           <Button 
              title="Go Drawer Page"
               onPress={()=>
                this.props.navigation.navigate('Drawer')
               }
              />
           </View>

           <View style={{marginTop:10}}>
           <Button 
              title="Go FlatList Page"
               onPress={()=>
                this.props.navigation.navigate('FlatListPage')
               }
              />
           </View>

           <View style={{marginTop:10}}>
           <Button 
              title="Go Api Page"
               onPress={()=>
                this.props.navigation.navigate('ApiPage')
               }
              />
           </View>

           <View style={{marginTop:10}}>
           <Button 
              title="PaginationPage"
                onPress={()=>
                  this.props.navigation.navigate('PagiationPage')
                }
              />
           </View>
           <View style={{marginTop:10}}>
           <Button 
              title="RecyclerPage"
                onPress={()=>
                  this.props.navigation.navigate('RecyclerPage')
                }
              />
           </View>
           <View style={{marginTop:10}}>
           <Button 
              title="ApiNetworking"
                onPress={()=>
                  this.props.navigation.navigate('ApiNetworkingScreen')
                }
              />
           </View>
           </ScrollView>
         </View> 
     )
   }
}

const MyStyle = StyleSheet.create({
  style1 : {
       color : 'green',
       backgroundColor : 'yellow',
  },
  style2 : {
       fontSize : 25,
  }
});
export default DashBoard;
