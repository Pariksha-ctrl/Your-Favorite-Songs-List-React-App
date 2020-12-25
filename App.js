import React, { useState } from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ListItem,
} from "react-native";
import {} from "react-navigation";
// import BackgroundImage from "./assets/backgroundImage.jpg";
// import LogoImage from "./assets/red-logo.png";

const listTab = [
  {
    status: "All",
  },
  {
    status: "Favorite",
  },
  {
    status: "Unliked",
  },
];

const data = [
  {
    name: "Last Christmas",
    status: "Favorite",
  },
  {
    name: "Back to December",
    status: "Unliked",
  },
  {
    name: "All of me",
    status: "Favorite",
  },
  {
    name: "Because of you",
    status: "Unliked",
  },
  {
    name: "Perfect",
    status: "Favorite",
  },
];

const App = () => {
  const [status, setStatus] = useState("All");
  const [datalist, setDataList] = useState(data);

  const setStausFilter = (status) => {
    if (status !== "All") {
      // i.e if the song is other than all which is either purple or green in color
      setDataList([...data.filter((e) => e.status === status)]);
    } else {
      setDataList(data);
    }
    setStatus(status);
  };

  const renderSong = ({ song, index }) => {
    return (
      <View key={index} style={styles.songContainer}>
        <View style={styles.songLogo}>
          <Image
            style={styles.songImage}
            source={{
              url:
                "https://i.pinimg.com/564x/ba/4e/31/ba4e319e3f58173908fcf134d0606568.jpg",
            }}
          />
        </View>

        <View style={styles.songBody}>
          <Text style={styles.songName}>{song.name}</Text>
        </View>

        <View
          style={[
            styles.songStatus,
            {
              backgroundColor:
                song.status === "Favorite" ? "#e5848e" : "#69c080",
            },
          ]}
        >
          <Text>{song.status}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((e) => (
          <TouchableOpacity
            style={[
              styles.buttonTab,
              status === e.status && styles.buttonTabActive,
            ]}
            onPress={() => setStausFilter(e.status)}
          >
            <Text
              style={
                (styles.textTab, status === e.status && styles.textTabActive)
              }
            >
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderSong={renderSong}
      />
    </SafeAreaView>
  );
};
export default App;

// shortcut react-native stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 20,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonTab: {
    width: Dimensions.get("window").width / 4,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#EBEBEB",
    padding: 10,
    justifyContent: "center",
    top: 40,
  },
  textTab: {
    fontSize: 15,
    color: "#000",
  },
  buttonTabActive: {
    backgroundColor: "#E683BD",
  },
  textTabActive: {
    color: "#fff",
  },
  songContainer: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  songLogo: {
    padding: 10,
  },
  songImage: {
    width: 50,
    height: 50,
  },
  songBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  songName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  songStatus: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    justifyContent: "center",
    right: 12,
  },
});

// BACKUPS

// Importing Libraries
// import { StatusBar } from 'expo-sta/tus-bar';
// import React from "react";
// import { View, Text, Button } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// // Importing Components
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import MainScreen from "./app/screens/MainScreen";

// // creating the stacks of the route
// const Navigator = createStackNavigator({
//   WelcomeScreen: { screen: WelcomeScreen },
//   MainScreen: { screen: MainScreen },
// });

// const App = createAppContainer(Navigator);

// export default App;

// View - map to UI View or an Android View
// export default function App() {
//   return <WelcomeScreen />;
// return <ViewImageScreen />;
// }

// <SafeAreaView style={styles.container}>
//   <View
//     style={{
//       backgroundColor: "#fff",
//       flex: 1, // it helps to take all the availavle space
//     }}
//   ></View>
// </SafeAreaView>

// const containerStyle = { backgroundColor: "#fff" };

// // Regular javascrips properties
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });

// ---------THEESE ARE ALL COMMENTS------

// {/* TEXT */}
// {/*
// <Text numberOfLines={1} onPress={handlePress}>
//   Hello React Native App!
// </Text> */}

// {/* BUTTON */}
// {/* <Button
//   color="green"
//   title="Click Me"
//   onPress={() =>
//     Alert.alert("My title", "My message", [
//       { text: "Yes", onPress: () => console.log("Yes") },
//       { text: "No", onPress: () => console.log("No") },
//     ])
//   }
// /> */}
// {/*
// IMAGE */}

// {/* <TouchableWithoutFeedback onPress={() => console.log("Image Clicked")}>
//   <Image
//     blurRadius={2}
//     fadeDuration={1000}
//     source={{
//       width: 200,
//       height: 300,
//       uri: "https://picsum.photos/200/300",
//     }}
//   />
// </TouchableWithoutFeedback> */}

// IMAGES
// to change any image with view instead of image
// <View style={{ width: 200, height: 70, backgroundColor: "#fff"}}

// {
//   /* VIEW */
// }
// {
/* <View
          style={{
            backgroundColor: "dodgerblue",
            //width: 100,
            height: 100,
            flexBasis: 100,
            flexGrow: 1,
            //alignSelf: "flex-start", // for individual item
          }}
        />
        <View
          style={{
            backgroundColor: "gold",
            width: 100,
            height: 100,
            top: 20, // moving 20 pixel from the top
            position: "absolute", // poistioned relative to parent position
          }}
        />
        <View
          style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "grey",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "greenyellow",
            width: 100,
            height: 100,
          }}
        /> */
// }

// flexDirection: "row",
// justifyContent: "center", //aligning content on the center
// alignItems: "center",
// alignSelf: "center",
// flexWrap: "wrap",

// width: "100%",
// height: portrait ? "30%" : "100%",

// IMPORTS

// import React from "react";
// import {
//   View,
//   // Dimensions,
//   // StyleSheet,
//   Text,
//   // TouchableWithoutFeedback,
//   // View,
//   // Image,
//   // SafeAreaView,
//   // Alert,
//   // Platform,
//   // StatusBar,
//   Button,
// } from "react-native";

// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";
