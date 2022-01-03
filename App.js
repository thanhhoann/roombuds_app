import React, { useState, useEffect } from "react";
import { View, Alert, Text, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemAdder from "./core/components/ItemAdder";
import ListItem from "./core/components/ListItem";
import Header from "./core/UI/Header";
import { nanoid } from "nanoid";

import { random_id_generator } from "./core/libs/random_id_generator";
import { POST } from "./core/libs/POST";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://roombuds-e4b1e-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        for (let key in data) {
          let text = data[key].text;
          let id = data[key].id;
          setItems(() => {
            return [{ id: id, text }, ...items];
          });
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const delete_item = (id) => {
    setItems((items) => {
      return items.filter((item) => item.id != id);
    });
  };

  const add_item = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter a text or FUCK OFF !", { text: "OK" });
    } else {
      setItems(() => {
        POST({ id: nanoid(), text });
        return [{ id: nanoid(), text }, ...items];
      });
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header title="RoomBuds" />
        <ItemAdder add_item={add_item} />
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ListItem item={item} delete_item={delete_item} />
          )}
        />
      </View>
    </SafeAreaProvider>
  );
}
