/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 import DashBoardScreen from './components/DashBoard';
 import HomeScreen from './components/Home';
 import LoginScreen from './components/Login';
 import AboutScreen from './components/BottumNavigationPage/About';
 import DrawerScreen from './components/Draweravigation/DrawerPage';
 import FlatListScreen from './components/FlatListEx/FlatListPage';
 import ApiPageScreen from './components/Api/ApiPage';
 import PaginationPageScreen from './components/Pagination/PaginationPage';
 import RecyclerPageScreen from './components/RecyclerView/RecyclerPage';
 import ApiNetworkingScreen from './components/Api/ApiNetworking';

 const Stack = createNativeStackNavigator();
 
 const MyStack = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator>
      
         <Stack.Screen
           name="DashBoard"
           component={DashBoardScreen}
           options={{ title: 'DashBoard' }}
         />
          <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="About" component={AboutScreen} />
         <Stack.Screen name="Drawer" component={DrawerScreen}/>
         <Stack.Screen name="FlatListPage" component={FlatListScreen}/>
         <Stack.Screen name="ApiPage" component={ApiPageScreen}/>
         <Stack.Screen name="PagiationPage" component={PaginationPageScreen}/>
         <Stack.Screen name="RecyclerPage" component={RecyclerPageScreen}/>
         <Stack.Screen name="ApiNetworkingScreen" component={ApiNetworkingScreen}/>


       </Stack.Navigator>
     </NavigationContainer>
   );
 };

 export default MyStack;