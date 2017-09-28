import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

const testImage = 'https://ichef.bbci.co.uk/news/660/media/images/82232000/jpg/_82232395_dog.jpg';
const Fixture = {
  locations: [
    { key: 1, name: 'Belhaven', lat: 0, lng: 0 },
    { key: 2, name: 'St Andrews', lat: 0, lng: 0 },
    { key: 3, name: 'Durness', lat: 0, lng: 0 }
  ]
};

export default class ListScreen extends React.Component {
    static navigationOptions = {
      title: 'Surf up, woo!',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <FlatList
          style={styles.container}
          data={Fixture.locations}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                key={item.key}
                style={styles.item}
                onPress={ () => { navigate('Detail', { location: item.name })} }>
                <View>
                  <Image source={{ uri: testImage }}
                    style={styles.itemImage}
                    resizeMode='stretch' />
                  <Text style={styles.itemText}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 22,
    },
    itemText: {
      color: '#000',
      fontSize: 22,
    },
    itemImage: {
      height: 200,
    }
  });