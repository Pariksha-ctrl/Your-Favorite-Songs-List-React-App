import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SongCategory({ item, pressHandler }) {
  return (
    //onPress={() => pressHandler(item.key)}
    <TouchableOpacity>
      <Text style={styles.item}>{item.songName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
