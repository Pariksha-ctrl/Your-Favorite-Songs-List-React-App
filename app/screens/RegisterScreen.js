import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

// Register Screen
export default class RegisterScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
    };
  };

  render() {
    const { navigate, state } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Hello {state.params.name}</Text>

        <Button
          title="Go to Main Screen"
          onPress={() => navigate("MainScreen")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
