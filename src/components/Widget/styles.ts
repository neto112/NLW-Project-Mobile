import { StyleSheet } from "react-native";
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16,
  }
})