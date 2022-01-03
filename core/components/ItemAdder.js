import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

export default function ItemAdder({ add_item }) {
  const [userInput, setUserInput] = useState("");

  const onChange = (userInput_value) => setUserInput(userInput_value);

  return (
    <View>
      <TextInput
        placeholder="Add something here ..."
        style={styles.input}
        onChangeText={onChange}
        value={userInput}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          add_item(userInput);
          setUserInput("");
        }}
      >
        <Icon name="add" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    padding: 8,
    margin: 5,
  },
  btn: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
