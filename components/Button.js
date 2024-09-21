import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ children, onPress, style, borderless }) => {
  return (
    <TouchableOpacity
      style={[styles.button, borderless && styles.borderless, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff', // Màu nền mặc định
    padding: 10,
    borderRadius: 8,
  },
  borderless: {
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Button;
