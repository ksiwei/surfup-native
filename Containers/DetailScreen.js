import React from 'react';
import { View, Text } from 'react-native';

export default class DetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.location,
    });
    
    render() {
      const { params } = this.props.navigation.state;
      
      return <View><Text>Explore {params.location}</Text></View>
    }
  }