import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import MyButton from "./MyButton";

const Calculator = () => {
  const [display, setdisplay] = useState("");
  const [btnVals, setbtnVals] = useState([
    'C',0,'=','+',
      7, 8, 9,'÷',
      4, 5, 6,'x',
      1, 2, 3,'-'

    ]);
  const handleclick = (btnvalue) => {
    let result = display;
    if(btnvalue=="÷")
    {
        btnvalue = btnvalue.replace("÷", "/");
    }
    if(btnvalue=="x")
    {
        btnvalue = btnvalue.replace("x", "*");
    }
    if (btnvalue == "=") {
      result = String(eval(result));
    } else if (btnvalue == "C") {
      result = "";
    } else {
      if(result=="0")
      {
          result=""
      }
      else
      {
        result += btnvalue;
      }
    }

    setdisplay(result);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.list}>
        {btnVals.map((val, i) => {
          return <MyButton value={val} handleclick={handleclick} highlight={(i+1)%4==0}/>;
        })}
</View>
    </View>
  );
};

export default Calculator;
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
  },
  row: {
    flexDirection: "row"
  },
  display: {
    fontSize: 70,
    padding: 20,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
