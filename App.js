// import { StatusBar } from 'expo-sta/tus-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';


// View - map to UI View or an Android View
export default function App() {

  // to handle the lengthy text
  const handlePress = () => console.log("Text is Pressed!")

    // require function return the number that is reference to our image
  // console.log(require("./assets/icon.png"));

  return(
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native App!
      </Text>
      <Image source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300'}} />
    </SafeAreaView>
  );
}
  






  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Text numberOfLines={1} onPress={pressHandle}>Hello React Native</Text>
  //     // for network images
  //     <Image 
  //      source={{
  //        width: 200,
  //        height: 300,
  //        uri: "https://picsum.photos/200/300",
  //        }} />

  //   </SafeAreaView>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
