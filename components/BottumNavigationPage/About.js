import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from './Account';
import Profile from './Profile';

class About extends React.Component{
    render(){
        return(
            <View>
                <Text>About Screen page</Text>
            </View>
        )
    }
}

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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Account" component={AccountScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarBadge: 3 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
