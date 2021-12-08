import * as React from "react";
import { View, Text,StyleSheet,Dimensions } from "react-native";
import Constants from 'expo-constants';
import Calculator from "./components/Calculator";
const App = () => {
  return (
    <View style={styles.container} >
      <Calculator/>
    </View>
  );
};
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  paddingTop:Constants.statusBarHeight
  }
})