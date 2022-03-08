import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class MeteorScreen extends Component {
    render() {
        return (
            <View>
           <View 
          style={{ width:100 , height:100,  marginLeft:100,marginTop:200}}>
          <Button 
            title="1 glass of water"  
            color = "red"
            onPress={() => Alert.alert('Play Sound 1')} />
        </View>

          <View 
          style={{ width:100 , height:100,marginLeft:100,}}>
          <Button 
            title="3 glass of water"  
            color = "red"
            onPress={() => Alert.alert('Play Sound 1')} />
        </View>

        <View 
          style={{ width:100 , height:100,marginLeft:100}}>
          <Button 
            title="6 glass of water"  
            color = "red"
            onPress={() => Alert.alert('Play Sound 1')} />
        </View>

           </View>
        )
    }
}