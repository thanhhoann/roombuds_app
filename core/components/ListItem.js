import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  listItem_container: {
    backgroundColor: "lightgray",
    borderColor: "#eee",
    padding: 15,
    borderBottomWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  listItem_view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItem_text: {},
});

export default function ListItem({ item, delete_item }) {
  return (
    <TouchableOpacity style={styles.listItem_container}>
      <View style={styles.listItem_view}>
        <Text style={styles.listItem_text}>{item.text}</Text>
        <Icon
          name="remove"
          size={30}
          color="black"
          onPress={() => delete_item(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
}
