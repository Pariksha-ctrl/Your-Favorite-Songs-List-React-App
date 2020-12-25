import React from "react";
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
} from "react-native";
import {} from "react-navigation";

// Register Screen
export default class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
    };
  };

  render() {
    const { navigate, state } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.listTab}>
          <TouchableOpacity style={styles.buttonTab}>
            <Text>All Songs</Text>
          </TouchableOpacity>
        </View>
        <Text>Hello {state.params.name}</Text>

        <Button title="Set Selected Categories" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  listTab: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  buttonTab: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#EBEBEB",
    padding: 10,
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

// import React from "react";
// import { StyleSheet, View, Text, Button } from "react-native";

// // Register Screen
// export default class MainScreen extends React.Component {
//   //   static navigationOptions = ({ navigation }) => {
//   //     return {
//   //       title: navigation.getParam("name"),
//   //     };
//   //   };

//   static navigationOptions = {
//     title: "Main Screen",
//   };

//   render() {
//     const { navigate, state } = this.props.navigation;

//     return (
//       <View style={styles.container}>
//         <Text>Hello</Text>

//         <Button
//           title="Go Back to Register Page"
//           //onPress={() => navigate("RegisterScreen")}
//         />
//       </View>
//     );
//   }
// }
