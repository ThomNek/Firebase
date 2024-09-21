import React from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Giả định bạn đang dùng react-native-vector-icons

const TextInput = ({ leftIconName, rightIcon, handlePasswordVisibility, ...props }) => {
  return (
    <View style={styles.container}>
      {leftIconName && <Icon name={leftIconName} size={20} style={styles.icon} />}
      <RNTextInput
        style={styles.input}
        {...props}
      />
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={20}
          onPress={handlePasswordVisibility}
          style={styles.icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  icon: {
    marginRight: 10,
  },
});

export default TextInput;
