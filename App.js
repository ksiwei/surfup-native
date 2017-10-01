
import React from 'react';
import { Provider } from 'react-redux'
import RootContainer from './Containers/RootContainer'
import store from './Redux/CreateStore';

export default App = () => (
  <Provider store={store}>
    <RootContainer />
  </Provider>
)