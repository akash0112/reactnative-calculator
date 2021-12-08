import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";

const MyButton = ({ value ,handleclick,highlight}) => {
  return (
    <TouchableOpacity 
    style={[styles.btn,{backgroundColor: highlight?"#C0C":"red"}]}
    onPress={()=>handleclick(value)}
    >
      <Text style={styles.btntext}>{value}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  btn: {
    backgroundColor: "red",
    width:Dimensions.get('window').width/4,
    padding: 15,
  },
  btntext: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
});
