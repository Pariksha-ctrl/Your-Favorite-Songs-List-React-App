import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  // const [allSongs, setAllSongs] = useState([
  //   { songName: "Timro Mann", id: "1" },
  //   { songName: "Parkhaima", id: "2" },
  //   { songName: "Purano Hudaina Maya", id: "3" },
  //   { songName: "Sayau Juni", id: "4" },
  //   { songName: "Timi Sanga Najar judhai", id: "5" },
  //   { songName: "Tai Mori ko Maya", id: "6" },
  //   { songName: "Mann Thiyena Jogi Banna Lai", id: "7" },
  //   { songName: "Mayalu", id: "8" },
  //   { songName: "Timrai Maya Lagxa", id: "9" },
  //   { songName: "Maya Le Bolayo Malai", id: "10" },
  // ]);

  const [songs, setSongs] = useState([
    { songCategory: "All Songs", key: "1" },
    { songCategory: "Favorite Songs", key: "2" },
    { songCategory: "Unliked Songs", key: "3" },
  ]);

  // const pressHandler = (id) => {
  //   console.log(id);
  //   // to delete the clicked item
  //   setAllSongs((previousSong) => {
  //     return previousSong.filter((song) => song.id != id);
  //   });
  // };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* to various kinds of Songs of your choice */}
        <View style={styles.list}>
          {/**to list of various topic songs */}
          <FlatList
            data={songs}
            renderItem={({ item }) => <Text>{item.songCategory}</Text>}
          />
        </View>
      </View>
      {/* <View style={styles.allSongsContainer}>
        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.id}
          data={allSongs}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.songName}</Text>
            </TouchableOpacity>
          )}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  // allSongsContainer: {
  //   paddingTop: 40,
  //   paddingHorizontal: 20,
  // },
  // item: {
  //   marginTop: 24,
  //   padding: 30,
  //   backgroundColor: "pink",
  //   fontSize: 24,
  //   marginHorizontal: 10,
  //   marginTop: 24,
  // },
});

//{
/* <ScrollView>
        {allSongs.map((song) => (
          <View key={song.key}>
            <Text style={styles.song}>{song.songName}</Text>
          </View>
        ))}
      </ScrollView> */
//}
// const [name, setName] = useState("Pariksha");
// const [email, setEmail] = useState("parikshanepali@gmail.com");
// const [favoriteSongName, setFavoriteSongName] = useState("All of me");
// const [unlikedSong, setUnlikedSong] = useState({
//   name: "Complicated",
//   singer: "April Lavange",
// });

// const allSongsClickHandler = () => {
//   setFavoriteSongName("You're Beautiful");
//   setUnlikedSong({ name: "I'm Yours", singer: "Bruno Mars" });
// };

// // KEEPING THIS IN A SAFE SITE - 2

//   return (
//     <View style={styles.containter}>
//       <Text>Enter Name:</Text>
//       <TextInput
//         multiline
//         style={styles.input}
//         placeholder="e.g. Pariksha"
//         onChangeText={(val) => setName(val)}
//       />

//       <Text>Enter Email:</Text>
//       <TextInput
//         multiline
//         style={styles.input}
//         placeholder="e.g. parikshanepali@gmail.com"
//         onChangeText={(val) => setName(val)}
//       />
//       <Text>
//         name: {name}, email: {email}
//       </Text>

//       <View style={styles.allSongsListContainer}>
//         {allSongs.map((song) => {
//           return (
//             <View key={song.key}>
//               <Text style={styles.song}>(song.songName)</Text>
//             </View>
//           );
//         })}
//       </View>

//       <View style={styles.header}>
//         <Text style={styles.boldText}>Your Favorite Song List</Text>
//       </View>
//       <View style={styles.body}>
//         <Text style={styles.boldText}>All Songs</Text>
//         <Text style={styles.boldText}>
//           Favorite Songs - <Text>Your favorite song is {favoriteSongName}</Text>
//         </Text>
//         <Text style={styles.boldText}>
//           Unliked Songs -{" "}
//           <Text>
//             Your unliked song is {unlikedSong.name} and the singer of this song
//             is {unlikedSong.singer}
//           </Text>
//         </Text>
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button title="Update Song State" onPress={allSongsClickHandler} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   containter: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   header: {
//     backgroundColor: "lightblue",
//     padding: 20,
//   },
//   boldText: {
//     fontWeight: "bold",
//   },
//   allSongsListContainer: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   song: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: "pink",
//     fontSize: 24,
//   },
//   body: {
//     backgroundColor: "yellow",
//     padding: 20,
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#777",
//     padding: 8,
//     margin: 10,
//     width: 200,
//   },
// });

// // KEEPING THIS IN A SAFE SITE

// import React, { useState } from "react";
// import { render } from "react-dom";
// import {
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   Dimensions,
//   FlatList,
//   Image,
//   SafeAreaView,
//   TouchableOpacity,
//   ListItem,
// } from "react-native";
// import {} from "react-navigation";

// const listTab = [
//   {
//     status: "All",
//   },
//   {
//     status: "Favorite",
//   },
//   {
//     status: "Unliked",
//   },
// ];

// const data = [
//   {
//     name: "Last Christmas",
//     status: "Favorite",
//   },
//   {
//     name: "Back to December",
//     status: "Unliked",
//   },
//   {
//     name: "All of me",
//     status: "Favorite",
//   },
//   {
//     name: "Because of you",
//     status: "Unliked",
//   },
//   {
//     name: "Perfect",
//     status: "Favorite",
//   },
// ];

// const App = () => {
//   const [status, setStatus] = useState("All");
//   const [datalist, setDataList] = useState(data);

//   const setStausFilter = (status) => {
//     if (status !== "All") {
//       // i.e if the song is other than all which is either purple or green in color
//       setDataList([...data.filter((e) => e.status === status)]);
//     } else {
//       setDataList(data);
//     }
//     setStatus(status);
//   };

//   const renderSong = ({ song, index }) => {
//     return (
//       <View key={index} style={styles.songContainer}>
//         <View style={styles.songLogo}>
//           <Image
//             style={styles.songImage}
//             source={{
//               url:
//                 "https://i.pinimg.com/564x/ba/4e/31/ba4e319e3f58173908fcf134d0606568.jpg",
//             }}
//           />
//         </View>

//         <View style={styles.songBody}>
//           <Text style={styles.songName}>{song.name}</Text>
//         </View>

//         <View
//           style={[
//             styles.songStatus,
//             {
//               backgroundColor:
//                 song.status === "Favorite" ? "#e5848e" : "#69c080",
//             },
//           ]}
//         >
//           <Text>{song.status}</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.listTab}>
//         {listTab.map((e) => (
//           <TouchableOpacity
//             style={[
//               styles.buttonTab,
//               status === e.status && styles.buttonTabActive,
//             ]}
//             onPress={() => setStausFilter(e.status)}
//           >
//             <Text
//               style={
//                 (styles.textTab, status === e.status && styles.textTabActive)
//               }
//             >
//               {e.status}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <FlatList
//         data={datalist}
//         keyExtractor={(e, i) => i.toString()}
//         renderSong={renderSong}
//       />
//     </SafeAreaView>
//   );
// };
// export default App;

// // shortcut react-native stylesheet
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     justifyContent: "center",
//   },
//   background: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   logoContainer: {
//     position: "absolute",
//     top: 20,
//     alignItems: "center",
//   },
//   registerButton: {
//     width: "100%",
//     height: 70,
//     backgroundColor: "#4ecdc4",
//   },
//   listTab: {
//     flexDirection: "row",
//     alignSelf: "center",
//     marginBottom: 20,
//   },
//   buttonTab: {
//     width: Dimensions.get("window").width / 4,
//     flexDirection: "row",
//     borderWidth: 0.5,
//     borderColor: "#EBEBEB",
//     padding: 10,
//     justifyContent: "center",
//     top: 40,
//   },
//   textTab: {
//     fontSize: 15,
//     color: "#000",
//   },
//   buttonTabActive: {
//     backgroundColor: "#E683BD",
//   },
//   textTabActive: {
//     color: "#fff",
//   },
//   songContainer: {
//     flexDirection: "row",
//     paddingVertical: 15,
//   },
//   songLogo: {
//     padding: 10,
//   },
//   songImage: {
//     width: 50,
//     height: 50,
//   },
//   songBody: {
//     flex: 1,
//     paddingHorizontal: 10,
//     justifyContent: "center",
//   },
//   songName: {
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   songStatus: {
//     backgroundColor: "green",
//     paddingHorizontal: 6,
//     justifyContent: "center",
//     right: 12,
//   },
// });

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
