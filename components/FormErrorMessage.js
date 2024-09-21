import React from 'react';
import { Text, StyleSheet } from 'react-native';

const FormErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 12,
  },
});

export default FormErrorMessage;
