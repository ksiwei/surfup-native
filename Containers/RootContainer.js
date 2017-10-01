import { StackNavigator } from 'react-navigation';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';

export default RootContainer = StackNavigator({
    Home: { screen: ListScreen },
    Detail: { screen: DetailScreen }
  });