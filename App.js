import { StackNavigator } from 'react-navigation';
import ListScreen from './Containers/ListScreen';
import DetailScreen from './Containers/DetailScreen';

export default App = StackNavigator({
  Home: { screen: ListScreen },
  Detail: { screen: DetailScreen }
});
