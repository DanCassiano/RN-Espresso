/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';



import setTestID from './utils'

const TestsId = {

}

const App = () => {
  return (
    <Fragment>
      <Text {...setTestID('testHelloWorld')}>Hello world!</Text>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity {...setTestID('testBtnAlert')} style={{ width: 300, height: 40, borderWidth: 3, borderColor: 'yellow' }} onPress={()=> Alert.alert('Alet box')} ><Text>Click here!</Text></TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
  
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
