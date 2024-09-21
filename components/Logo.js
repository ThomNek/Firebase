import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = ({ uri }) => {
  return <Image source={{ uri }} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 100, // Kích thước logo
    height: 100, // Kích thước logo
    marginBottom: 20,
  },
});

export default Logo;
