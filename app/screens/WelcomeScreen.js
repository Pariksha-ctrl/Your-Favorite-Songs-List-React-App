// import React from "react";
// import {
//   StyleSheet,
//   Button,
//   View,
//   Image,
//   ImageBackground,
//   Text,
// } from "react-native";

// export default class WelcomeScreen extends React.Component {
//   static navigationOptions = {
//     title: "Welcome Screen",
//   };

//   render() {
//     const { navigate } = this.props.navigation;

//     return (
//       <ImageBackground
//         style={styles.background}
//         source={require("../assets/background.jpg")}
//       >
//         <View style={styles.logoContainer}>
//           <Image
//             style={styles.logo}
//             source={require("../assets/red-logo.png")}
//           />
//           <Text>Listen to your favorite songs!</Text>
//         </View>
//         <View style={styles.registerButton}>
//           <Button
//             title="Register Here!"
//             onPress={() => navigate("MainScreen")}
//           />
//         </View>
//       </ImageBackground>
//     );
//   }
// }

// // shortcut react-native stylesheet
// const styles = StyleSheet.create({
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
// });

// KEEP THIS SAFE-------------------------

// // shortcut react-native stylesheet
// const styles = StyleSheet.create({
//   background: {
//     flex: 1, // image background will take the entire screen.
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   logo: {
//     width: 100,
//     height: 100,
//   },
//   logoContainer: {
//     position: "absolute",
//     top: 70,
//     alignItems: "center",
//   },
//   // LoginButton: {
//   //   width: "100%",
//   //   height: 70,
//   //   backgroundColor: "#fc5c65",
//   // },
//   RegisterButton: {
//     width: "100%",
//     height: 70,
//     backgroundColor: "#4ecdc4",
//   },
// });

// return (
//   <ImageBackground
//     style={styles.background}
//     source={require("../assets/background.jpg")}
//   >
//     <View style={styles.RegisterButton}></View>

//     <RegisterButton
//       title="Register Here!"
//       onPress={() => navigate("RegisterScreen", { name: "Pariksha" })}
//     />
//     <View style={styles.logoContainer}>
//       <Image
//         style={styles.logo}
//         source={require("../assets/red-logo.png")}
//       />
//       <Text>Listen to your favorite songs!</Text>
//     </View>
//     {/* <View style={styles.LoginButton}></View> */}
//   </ImageBackground>
// );

//return "WelcomeScreen";
//   }
// }

//function WelcomeScreen(props) {}

//export default WelcomeScreen;
