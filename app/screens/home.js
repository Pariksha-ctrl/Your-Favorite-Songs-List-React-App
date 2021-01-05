import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("SongCategories");
  };

  return (
    <View>
      <Text styles={styles.titleText}>Home Screen</Text>
      <Button title="Go to song categories" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    color: "#000",
  },
});
