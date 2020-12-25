import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

// Register Screen
export default class MainScreen extends React.Component {
  //   static navigationOptions = ({ navigation }) => {
  //     return {
  //       title: navigation.getParam("name"),
  //     };
  //   };

  static navigationOptions = {
    title: "Main Screen",
  };

  render() {
    const { navigate, state } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Hello</Text>

        <Button
          title="Go Back to Register Page"
          onPress={() => navigate("RegisterScreen")}
        />
      </View>
    );
  }
}
