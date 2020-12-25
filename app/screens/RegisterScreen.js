import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import {} from "react-navigation";

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
        <Text>
          Hello {state.params.name} choose you favorite song categories
        </Text>

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

// // Register Screen
// export class RegisterScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.textfields}>
//           <TextInput style={styles.input}>
//             placeholder = "username" returnKeyType = "next" onSubmiteEditing ={" "}
//             {() => this.passwordInput.focus()}
//             keyboardType = "email-address" autoCapitalize = "none" autoCorrect ={" "}
//             {false}
//           </TextInput>
//           <TextInput style={styles.input}>
//             placeholder = "password" returnKeyType = "next" onSubmiteEditing ={" "}
//             {() => this.passwordInput.focus()}
//             keyboardType = "email-address" autoCapitalize = "none" autoCorrect ={" "}
//             {false}
//           </TextInput>
//         </View>
//       </View>
//     );
//   }
// }
