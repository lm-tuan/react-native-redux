
import React from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  View,
} from 'react-native';
import CountPage from './modules/count/count.page';
import { store } from './store';



const App = () => {

  return (
    <Provider store={store}>
      <View style={[styles.container, { flexDirection: "column", }]}>
          <CountPage />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
