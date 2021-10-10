import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteComplaint from './screens/WriteComplaint';
import ReadComplaint from './screens/ReadComplaint';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component {
  render(){
    return(
      <SafeAreaProvider>
      <AppContainer />
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadComplaint: ReadComplaint,
  WriteComplaint: WriteComplaint
  
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ({focused})=>{
      const routeName = navigation.state.routeName;
      // console.log(routeName)
      if(routeName === "WriteComplaint"){
        // added the focused property to the icons.....
        let iconName
        return(
          iconName = focused
          ? <Image
          source={require("./assets/complaint-1.png")}
          style={{width:45, height:45}}
        />
        : <Image
          source={require("./assets/complaint.png")}
          style={{width:35, height:35}}
        />)
        
      }
      else if(routeName === "ReadComplaint"){
        let iconName
        return(
          iconName = focused
          ? <Image
          source={require("./assets/readC-1.png")}
          style={{width:40, height:40}}
        />
        : <Image
          source={require("./assets/readC.png")}
          style={{width:32, height:32}}
        />)
        
      }
    }
  })
}
  )

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
