import React from "react";
import {Text,View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

import Account from "../BottumNavigationPage/Account";
import Profile from "../BottumNavigationPage/Profile";




// const Drawer = createDrawerNavigator();
function AccountScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Account/>
      </View>
    );
  }
  
  function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Profile/>
      </View>
    );
  }

// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//         defaultStatus="open"
//             screenOptions={{
//             drawerType: isLargeScreen ? 'permanent' : 'back',
//             drawerStyle: isLargeScreen ? null : { width: '100%' },
//             overlayColor: 'transparent',
//         }}
//     >
        
//       <Drawer.Screen name="Account" component={AccountScreen} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//     </Drawer.Navigator>
//   );
// }

// export default function DrawerPage() {
//     return(
//         <Drawer.Navigator
//         defaultStatus="open"
//             screenOptions={{
//             drawerType: isLargeScreen ? 'permanent' : 'back',
//             drawerStyle: isLargeScreen ? null : { width: '100%' },
//             overlayColor: 'transparent',
//         }}
//         initialRouteName="AccountScreen"
//      >
        
//       <Drawer.Screen name="Account" component={AccountScreen} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//      </Drawer.Navigator>
//     )
//   }
  export default function DrawerPage() {
    return (
        <View>
          <Text>DashBoard</Text>
        </View>

      // <NavigationContainer>
      //   <Drawer.Navigator initialRouteName="AccountScreen">
      //       <Drawer.Screen name="Account" component={AccountScreen} />
      //       <Drawer.Screen name="Profile" component={ProfileScreen} />
      //   </Drawer.Navigator>
      // </NavigationContainer>
    );
  }