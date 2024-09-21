import React from 'react';
import { SafeAreaView, StyleSheet, View as RNView } from 'react-native';

/**
 * Custom View component
 * @param {object} props - Các thuộc tính được truyền từ parent component
 * @returns JSX.Element
 */
const View = ({ isSafe, style, children, ...rest }) => {
  // Nếu isSafe được đặt thành true, sử dụng SafeAreaView, nếu không thì RNView
  if (isSafe) {
    return (
      <SafeAreaView style={[styles.safeArea, style]} {...rest}>
        {children}
      </SafeAreaView>
    );
  }

  return (
    <RNView style={[style]} {...rest}>
      {children}
    </RNView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Đảm bảo component chiếm toàn bộ không gian có sẵn
  },
});

export default View;
