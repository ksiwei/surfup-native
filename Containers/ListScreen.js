import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'

const testImage = 'https://ichef.bbci.co.uk/news/660/media/images/82232000/jpg/_82232395_dog.jpg';

class ListScreen extends React.Component {
    static navigationOptions = {
      title: 'Surf up, woo!',
    };
    render() {
      const { navigate } = this.props.navigation;
      const AnimatedList = Animatable.createAnimatableComponent(FlatList)
      return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}></TextInput>
          </View>
          <AnimatedList
            animation="bounceInUp"
            duration={800}
            delay={100}
            style={styles.locationContainer}
            data={this.props.spots.locations}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  key={item.key}
                  style={styles.item}
                  onPress={ () => { navigate('Detail', { location: item.name })} }>
                  <View>
                    <Image source={{ uri: item.image }}
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
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    inputContainer: {
      backgroundColor: '#D6ECF4',
      shadowColor: '#D6ECF4',
      shadowOffset: {
        x: 10,
        y: 10,
      },
      shadowOpacity: .8,
      shadowRadius: 3,
      marginHorizontal: 10,
      marginTop: 20,
      marginBottom: 20,
    },
    input: {
      height: 60,
      color: '#fff',
      borderBottomColor: '#fff',
    },
    locationContainer: {
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

  const mapStateToProps = (state) => {
    return {
      spots: state.spots
    }
  }

  export default connect(mapStateToProps)(ListScreen);