import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class DetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.location,
    });
    
    render() {
      const { params } = this.props.navigation.state;
      
      return (
        <View style={styles.container}>
            <Text>Explore {params.location}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  })