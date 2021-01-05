import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function AddSongCategoryItem({ submitHandler }) {
  const [songItem, setSongItem] = useState("");

  const changeHandler = (val) => {
    setSongItem(val);
  };

  return (
    <View>
      <TextInput
        style={styles.inputSongItem}
        placeholder="add new song..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(songItem)}
        title="add new song"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputSongItem: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
