import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadComplaint extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Read Story</Text>
                <Text>Switch between the tabs to see the focused property</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});