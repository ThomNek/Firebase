import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignupScreen from './screens/SignupScreen'; // Import trực tiếp từ file SignupScreen.js
import LoginScreen from './screens/LoginScreen';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
