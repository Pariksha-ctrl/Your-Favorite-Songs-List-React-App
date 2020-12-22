import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


// View - map to UI View or an Android View
export default function App() {

  // to handle the lengthy text
  const pressHandle = () => console.log("Text is Pressed!")


  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={pressHandle}>Hello React Native</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
