import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  header_view: {
    height: 100,
    padding: 20,
  },
  header_text: {
    textAlign: "center",
    fontSize: 40,
    letterSpacing: 10,
    fontWeight: "bold",
  },
});

export default function Header({ title }) {
  return (
    <View style={styles.header_view}>
      <Text style={styles.header_text}>{title}</Text>
    </View>
  );
}
