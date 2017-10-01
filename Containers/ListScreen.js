import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

const testImage = 'https://ichef.bbci.co.uk/news/660/media/images/82232000/jpg/_82232395_dog.jpg';

class ListScreen extends React.Component {
    static navigationOptions = {
      title: 'Surf up, woo!',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <FlatList
          style={styles.container}
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

  const mapStateToProps = (state) => {
    return {
      spots: state.spots
    }
  }

  export default connect(mapStateToProps)(ListScreen);