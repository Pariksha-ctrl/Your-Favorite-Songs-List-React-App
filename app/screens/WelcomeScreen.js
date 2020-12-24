import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/red-logo.png")} />
        <Text>Listen to your favorite songs!</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>

      <registerButton
        title="Register Here!"
        onPress={() => this.props.navigation.navigate("RegisterScreen")}
      />
    </ImageBackground>
  );
}

// shortcut react-native stylesheet
const styles = StyleSheet.create({
  background: {
    flex: 1, // image background will take the entire screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
